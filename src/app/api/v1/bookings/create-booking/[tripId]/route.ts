import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { supabaseAdmin } from '@databases/supabase';
import { HttpException } from '@exceptions/HttpException';
import UserAuthService from '@services/user.auth.service';
import type { Booking, BookingInsert } from '@interfaces/booking.interface';

interface CreateBookingResponse {
  error: boolean;
  message: string;
  data?: Booking;
}

const userAuthService = new UserAuthService();

function monthShort(date: string): string {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleString('default', { month: 'short' });
}

function isoWeek(date: string): string {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return '';
  const utc = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const day = utc.getUTCDay() || 7;
  utc.setUTCDate(utc.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(utc.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((utc.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
  return String(weekNo);
}

function ticketNumber(): string {
  return Math.random().toString(36).slice(2, 9).toUpperCase();
}

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
  context: { params: Promise<{ tripId: string }> }
): Promise<NextResponse<CreateBookingResponse>> {
  try {
    const { tripId: tripIdParam } = await context.params;
    const tripId = Number(tripIdParam);
    if (!Number.isFinite(tripId)) {
      return NextResponse.json(
        { error: true, message: 'Invalid trip id' },
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

    const body = (await request.json()) as Partial<BookingInsert> & {
      phone_number?: number | null;
      name?: string;
      id_card_no?: string | null;
      payer_email?: string | null;
      number_of_seats?: string | null;
      ticket_type?: string | null;
      transaction_id?: string | null;
      seat?: string | null;
    };

    const { data: trip, error: tripError } = await supabaseAdmin
      .from('trips')
      .select('*')
      .eq('id', tripId)
      .single();

    if (tripError) throw new HttpException(500, tripError.message);
    if (!trip) throw new HttpException(404, 'Trip not found');
    if (trip.reserved >= trip.seats) throw new HttpException(409, 'No seats available for this trip');

    const journeyDate = (body.journey_date || trip.journey_date) as string;
    const year = (body.year || trip.year || new Date(journeyDate).getFullYear().toString()) as string;
    const month = (body.month || trip.month || monthShort(journeyDate)) as string;

    const insertPayload: BookingInsert = {
      trip_id: tripId,
      booker_id: user.id,
      // tenancy: always tie booking to agency via trip
      agency_id: trip.agency_id,
      name: body.name ?? user.name ?? '',
      phone_number: typeof body.phone_number === 'number'
        ? body.phone_number
        : (user.phone_number ? Number(user.phone_number) : null),
      id_card_no: body.id_card_no ?? (user.id_card_number ?? null),
      payer_email: body.payer_email ?? user.email ?? null,
      number_of_seats: body.number_of_seats ?? '1',
      ticket_type: body.ticket_type ?? 'One-way',
      transaction_id: body.transaction_id ?? null,
      agency_name: trip.agency_name,
      journey_date: journeyDate,
      price: trip.price,
      departure_city: trip.from_location,
      arrival_city: trip.to_location,
      departure_time: trip.departure,
      year,
      month,
      week: (body.week || isoWeek(journeyDate)) || null,
      ticket_number: (body.ticket_number || ticketNumber()) as string,
      seat: (body.seat as string | null | undefined) ?? null,
      status: (body.status as string | null | undefined) || 'PENDING_PAYMENT',
      booking_fee: (body.booking_fee as number | null | undefined) ?? null,
      payer_name: (body.payer_name as string | null | undefined) ?? null,
      payer_phone: (body.payer_phone as number | null | undefined) ?? null,
    };

    if (!insertPayload.seat) {
      throw new HttpException(400, 'Seat is required');
    }

    // Best-effort: prevent duplicate seat selection (non-atomic)
    const { data: seatRow, error: seatError } = await supabaseAdmin
      .from('bookings')
      .select('id')
      .eq('trip_id', tripId)
      .eq('seat', insertPayload.seat)
      .limit(1);
    if (seatError) throw new HttpException(500, seatError.message);
    if ((seatRow || []).length > 0) throw new HttpException(409, 'Seat already taken');

    // Service role bypasses RLS - allows insert without authentication
    // Note: Using select('*') instead of join to avoid RLS issues on agencies table
    const { data: booking, error: bookingError } = await supabaseAdmin
      .from('bookings')
      .insert(insertPayload)
      .select('*')
      .single();

    if (bookingError) throw new HttpException(500, bookingError.message);
    if (!booking) throw new HttpException(500, 'Failed to create booking');

    // Fetch agency logo separately to avoid RLS issues with foreign key joins
    // Service role bypasses RLS - safe to query agencies directly
    let agencyLogo: string | null = null;
    
    if (insertPayload.agency_id) {
      const { data: agency, error: agencyError } = await supabaseAdmin
        .from('agencies')
        .select('logo')
        .eq('id', insertPayload.agency_id)
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

    // Don't create payment record yet - booking is PENDING_PAYMENT
    // Payment record will be created when reservation fee is paid

    // Best-effort: increment reserved seats (non-atomic)
    try {
      await supabaseAdmin
        .from('trips')
        .update({ reserved: (trip.reserved || 0) + 1 })
        .eq('id', tripId);
    } catch {
      // ignore
    }

    return NextResponse.json<CreateBookingResponse>(
      { error: false, message: 'Booking created successfully', data: bookingWithLogo as Booking },
      { headers: { 'Cache-Control': 'no-store' } }
    );
  } catch (error: unknown) {
    const httpError = error as { status?: number; message?: string };
    return NextResponse.json<CreateBookingResponse>(
      { error: true, message: httpError.message || 'Failed to create booking' },
      { status: httpError.status || 500, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}


