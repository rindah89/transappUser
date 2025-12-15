import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { supabaseAdmin } from '@databases/supabase';
import { HttpException } from '@exceptions/HttpException';
import UserAuthService from '@services/user.auth.service';
import type { Booking } from '@interfaces/booking.interface';

interface BookingsResponse {
  error: boolean;
  message: string;
  data?: Booking[];
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

function parseJourneyDeparture(journeyDate: string, departureTime: string): Date | null {
  if (!journeyDate || !departureTime) return null;

  // Handles "HH:mm" and also attempts "h:mm A" (e.g., "6:30 PM")
  const trimmed = departureTime.trim();
  const ampm = trimmed.match(/(\d{1,2}):(\d{2})\s*([AaPp][Mm])/);
  if (ampm) {
    let h = Number(ampm[1]);
    const m = Number(ampm[2]);
    const ap = ampm[3].toLowerCase();
    if (ap === 'pm' && h < 12) h += 12;
    if (ap === 'am' && h === 12) h = 0;
    const dt = new Date(`${journeyDate}T00:00:00`);
    if (Number.isNaN(dt.getTime())) return null;
    dt.setHours(h, m, 0, 0);
    return dt;
  }

  const hm = trimmed.match(/^(\d{1,2}):(\d{2})$/);
  if (hm) {
    const h = Number(hm[1]);
    const m = Number(hm[2]);
    const dt = new Date(`${journeyDate}T00:00:00`);
    if (Number.isNaN(dt.getTime())) return null;
    dt.setHours(h, m, 0, 0);
    return dt;
  }

  // Last resort
  const parsed = new Date(`${journeyDate} ${trimmed}`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

async function cancelBookingReleaseSeat(bookingId: number, tripId: number): Promise<void> {
  // Prefer DB function (atomic)
  const { error: rpcError } = await supabaseAdmin.rpc('cancel_booking_release_seat', { p_booking_id: bookingId });
  if (!rpcError) return;

  // Fallback: mark cancelled + decrement trip reserved
  await supabaseAdmin.from('bookings').update({ status: 'CANCELLED' }).eq('id', bookingId);

  const { data: trip } = await supabaseAdmin.from('trips').select('reserved').eq('id', tripId).single();
  const reserved = (trip as any)?.reserved ?? 0;
  await supabaseAdmin.from('trips').update({ reserved: Math.max(0, Number(reserved) - 1) }).eq('id', tripId);
}

// Next.js 16 best practice: Use async request APIs with caching
export async function GET(request: NextRequest): Promise<NextResponse<BookingsResponse>> {
  try {
    
    const searchParams = request.nextUrl.searchParams;
    const userIdParam = searchParams.get('userId');
    let userId: number | null = userIdParam ? Number(userIdParam) : null;

    // Prefer auth-based lookup if userId not provided (or invalid)
    if (!userId || !Number.isFinite(userId)) {
      const accessToken = await getAccessToken(request);
      if (!accessToken) {
        return NextResponse.json(
          { error: true, message: 'Unauthorized' },
          { status: 401, headers: { 'Cache-Control': 'no-store' } }
        );
      }
      const { user } = await userAuthService.verifySession(accessToken);
      userId = user.id;
    }

    const currentYear = new Date().getFullYear().toString();

    // Service role bypasses RLS - fetch bookings without joins to avoid RLS issues on agencies table
    const { data, error } = await supabaseAdmin
      .from('bookings')
      .select('*')
      .eq('booker_id', userId)
      .eq('year', currentYear)
      .order('created_at', { ascending: false });

    if (error) {
      throw new HttpException(500, error.message);
    }

    if (!data || data.length === 0) {
      return {
        error: false,
        message: 'No bookings found',
        data: [],
      };
    }

    // Fetch agency logos separately to avoid RLS issues with foreign key joins
    // Service role bypasses RLS - safe to query agencies directly
    const agencyIds = [...new Set((data as any[]).map((b: any) => b.agency_id).filter(Boolean))];
    const agencyLogos: Record<number, string | null> = {};

    if (agencyIds.length > 0) {
      const { data: agencies, error: agenciesError } = await supabaseAdmin
        .from('agencies')
        .select('id, logo')
        .in('id', agencyIds);

      if (!agenciesError && agencies) {
        agencies.forEach((agency: any) => {
          agencyLogos[agency.id] = agency.logo || null;
        });
      }
    }

    // Attach agency_logo from agencies table to each booking
    const bookings = ((data || []) as any[]).map((b: any) => {
      const bookingWithLogo = {
        ...b,
        agency_logo: agencyLogos[b.agency_id] || null,
      };
      return bookingWithLogo;
    }) as Booking[];

    // Auto-cancel reservations 30 mins before departure time
    // BUT only if they are still unpaid / unconfirmed (i.e. not marked as Paid/Confirmed by admin app)
    const now = Date.now();
    const protectedStatuses = new Set(['PAID', 'CONFIRMED', 'BOOKED']);
    const cancelableStatuses = new Set(['', 'PENDING', 'RESERVED', 'CASH_PENDING']);

    const toCancel = bookings.filter((b) => {
      const status = String(b.status ?? '').trim().toUpperCase();

      // Never auto-cancel if admin/payment already confirmed it
      if (protectedStatuses.has(status)) return false;
      if ((b as any)?.transaction_id) return false;

      // Never auto-cancel already-cancelled items (handle various spellings/casing)
      if (status.startsWith('CANCEL')) return false;

      return cancelableStatuses.has(status);
    });
    for (const b of toCancel) {
      const dt = parseJourneyDeparture(b.journey_date, b.departure_time);
      if (!dt) continue;
      const cutoff = dt.getTime() - 30 * 60 * 1000;
      if (now >= cutoff) {
        try {
          await cancelBookingReleaseSeat(b.id, b.trip_id);
          b.status = 'CANCELLED';
        } catch {
          // ignore
        }
      }
    }

    return NextResponse.json<BookingsResponse>({
      error: false,
      message: 'Bookings retrieved successfully',
      data: bookings,
    }, {
      headers: {
        // Cache for 30 seconds, revalidate in background
        'Cache-Control': 'private, s-maxage=30, stale-while-revalidate=60',
      },
    });
  } catch (error: unknown) {
    const httpError = error as { status?: number; message?: string };
    return NextResponse.json<BookingsResponse>(
      {
        error: true,
        message: httpError.message || 'Failed to retrieve bookings',
      },
      { 
        status: httpError.status || 500,
        headers: {
          'Cache-Control': 'no-store',
        },
      }
    );
  }
}
