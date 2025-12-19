import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { supabaseAdmin } from '@databases/supabase';
import { HttpException } from '@exceptions/HttpException';
import UserAuthService from '@services/user.auth.service';
import type { Booking } from '@interfaces/booking.interface';

interface BookingResponse {
  error: boolean;
  message: string;
  data?: Booking;
}

const userAuthService = new UserAuthService();

async function getAccessToken(request: NextRequest): Promise<string | null> {
  const authHeader = request.headers.get('authorization');
  if (authHeader?.toLowerCase().startsWith('bearer ')) {
    return authHeader.slice(7).trim();
  }

  const cookieStore = await cookies();
  const sbAccessToken = cookieStore.get('sb-access-token')?.value;
  if (sbAccessToken) return sbAccessToken;

  const legacy = cookieStore.get('auth-token')?.value;
  if (legacy) {
    try {
      const parsed = JSON.parse(legacy) as { token?: string };
      if (parsed?.token) return parsed.token;
    } catch {
      // ignore
    }
  }
  return null;
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ bookingId: string }> }
): Promise<NextResponse<BookingResponse>> {
  try {
    const { bookingId: bookingIdParam } = await context.params;
    const bookingId = Number(bookingIdParam);
    if (!Number.isFinite(bookingId)) {
      return NextResponse.json(
        { error: true, message: 'Invalid booking id' },
        { status: 400, headers: { 'Cache-Control': 'no-store' } }
      );
    }

    const accessToken = await getAccessToken(request);
    let userId: number | null = null;

    // If authenticated, verify session and get user ID
    if (accessToken) {
      try {
        const { user } = await userAuthService.verifySession(accessToken);
        userId = user.id;
      } catch {
        // If session verification fails, treat as anonymous
        userId = null;
      }
    }

    // Service role bypasses RLS - fetch booking without joins to avoid RLS issues on agencies table
    // Allow fetching:
    // 1. Bookings that belong to the authenticated user (if userId is set)
    // 2. Anonymous bookings (booker_id is null) if not authenticated
    let query = supabaseAdmin
      .from('bookings')
      .select('*')
      .eq('id', bookingId);

    if (userId) {
      // Authenticated user: only fetch their own bookings
      query = query.eq('booker_id', userId);
    } else {
      // Anonymous user: only fetch anonymous bookings (booker_id is null)
      query = query.is('booker_id', null);
    }

    const { data: booking, error } = await query.single();

    if (error) {
      if (error.code === 'PGRST116') throw new HttpException(404, 'Booking not found');
      throw new HttpException(500, error.message);
    }

    if (!booking) throw new HttpException(404, 'Booking not found');

    // Fetch agency logo separately to avoid RLS issues with foreign key joins
    // Service role bypasses RLS - safe to query agencies directly
    let agencyLogo: string | null = null;
    if ((booking as any).agency_id) {
      const { data: agency, error: agencyError } = await supabaseAdmin
        .from('agencies')
        .select('logo')
        .eq('id', (booking as any).agency_id)
        .single();
      
      if (!agencyError && agency) {
        agencyLogo = agency.logo || null;
      }
    }

    // Attach agency_logo from agencies table
    const bookingWithLogo = {
      ...booking,
      agency_logo: agencyLogo || null,
    };

    return NextResponse.json<BookingResponse>(
      { error: false, message: 'Booking retrieved successfully', data: bookingWithLogo as Booking },
      { headers: { 'Cache-Control': 'no-store' } }
    );
  } catch (error: unknown) {
    const httpError = error as { status?: number; message?: string };
    return NextResponse.json<BookingResponse>(
      { error: true, message: httpError.message || 'Failed to retrieve booking' },
      { status: httpError.status || 500, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}


