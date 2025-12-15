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
    if (!accessToken) {
      return NextResponse.json(
        { error: true, message: 'Unauthorized' },
        { status: 401, headers: { 'Cache-Control': 'no-store' } }
      );
    }

    const { user } = await userAuthService.verifySession(accessToken);

    const { data: booking, error } = await supabaseAdmin
      .from('bookings')
      .select(`
        *,
        agencies!bookings_agency_id_fkey (
          logo
        )
      `)
      .eq('id', bookingId)
      .eq('booker_id', user.id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') throw new HttpException(404, 'Booking not found');
      throw new HttpException(500, error.message);
    }

    if (!booking) throw new HttpException(404, 'Booking not found');

    // Attach agency_logo from joined agencies table
    const bookingWithLogo = {
      ...booking,
      agency_logo: (booking as any).agencies?.logo || null,
    };
    delete (bookingWithLogo as any).agencies;

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


