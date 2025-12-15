import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { supabaseAdmin } from '@databases/supabase';
import { HttpException } from '@exceptions/HttpException';
import UserAuthService from '@services/user.auth.service';
import type { Booking } from '@interfaces/booking.interface';

interface CancelResponse {
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

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ bookingId: string }> }
): Promise<NextResponse<CancelResponse>> {
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

    const { data: booking, error: bookingError } = await supabaseAdmin
      .from('bookings')
      .select('*')
      .eq('id', bookingId)
      .eq('booker_id', user.id)
      .single();

    if (bookingError) {
      if (bookingError.code === 'PGRST116') throw new HttpException(404, 'Booking not found');
      throw new HttpException(500, bookingError.message);
    }
    if (!booking) throw new HttpException(404, 'Booking not found');

    const status = (booking.status || '').toUpperCase();
    if (status === 'CANCELLED') {
      return NextResponse.json(
        { error: false, message: 'Booking already cancelled', data: booking as Booking },
        { headers: { 'Cache-Control': 'no-store' } }
      );
    }

    // Prefer DB function (atomic release of seat + status update)
    const { error: rpcError } = await supabaseAdmin.rpc('cancel_booking_release_seat', { p_booking_id: bookingId });
    if (rpcError) {
      // Fallback: mark cancelled + decrement trip reserved
      await supabaseAdmin.from('bookings').update({ status: 'CANCELLED' }).eq('id', bookingId);
      const { data: trip } = await supabaseAdmin.from('trips').select('reserved').eq('id', booking.trip_id).single();
      const reserved = (trip as any)?.reserved ?? 0;
      await supabaseAdmin.from('trips').update({ reserved: Math.max(0, Number(reserved) - 1) }).eq('id', booking.trip_id);
    }

    const { data: updated, error: updatedError } = await supabaseAdmin
      .from('bookings')
      .select('*')
      .eq('id', bookingId)
      .single();

    if (updatedError) throw new HttpException(500, updatedError.message);

    return NextResponse.json<CancelResponse>(
      { error: false, message: 'Booking cancelled successfully', data: updated as Booking },
      { headers: { 'Cache-Control': 'no-store' } }
    );
  } catch (error: unknown) {
    const httpError = error as { status?: number; message?: string };
    return NextResponse.json<CancelResponse>(
      { error: true, message: httpError.message || 'Failed to cancel booking' },
      { status: httpError.status || 500, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}


