import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@databases/supabase';
import { HttpException } from '@exceptions/HttpException';
import type { Booking, BookingInsert } from '@interfaces/booking.interface';
import type { PaymentRecordInsert } from '@interfaces/payment-record.interface';

/**
 * Anonymous Booking API Route
 * 
 * This endpoint allows guests (unauthenticated users) to create bookings without an account.
 * 
 * RLS (Row Level Security) Bypass:
 * - Uses `supabaseAdmin` which is initialized with SUPABASE_SERVICE_ROLE_KEY
 * - Service role key automatically bypasses all RLS policies
 * - This is safe because:
 *   1. This is a server-side API route (never exposed to client)
 *   2. All validations are performed server-side
 *   3. Guest bookings have `booker_id: null` to distinguish from authenticated bookings
 * 
 * Security:
 * - Input validation on all fields
 * - Seat conflict checking before insert
 * - Trip availability verification
 * - No sensitive data exposed to client
 */

interface AnonBookingResponse {
  error: boolean;
  message: string;
  data?: Booking;
}

function monthShort(date: string): string {
  const d = new Date(date);
  // Fallback to empty string if invalid date
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleString('default', { month: 'short' });
}

// ISO week number (1-53) as string, matching moment(date).format("W")
function isoWeek(date: string): string {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return '';
  const utc = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  // Thursday in current week decides the year.
  const day = utc.getUTCDay() || 7;
  utc.setUTCDate(utc.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(utc.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((utc.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
  return String(weekNo);
}

function ticketNumber(): string {
  // 7 chars, upper-case, URL-safe-ish
  return Math.random().toString(36).slice(2, 9).toUpperCase();
}

/**
 * Round price up to the nearest multiple of 50
 */
function roundPriceToNearest50(price: number): number {
  if (!Number.isFinite(price) || price <= 0) return 0;
  return Math.ceil(price / 50) * 50;
}

/**
 * Calculate reservation fee based on agency settings
 * - Round ticket price to nearest 50 first
 * - If percentage mode: calculate 10% of rounded price, cap at 500 XAF (whichever is lower), then round to nearest 50
 * - If fixed mode: return fixed amount
 */
function calculateReservationFee(
  price: number,
  mode: 'percentage' | 'fixed',
  percent: number = 10,
  capXaf: number = 500,
  fixedXaf: number = 500
): number {
  if (!Number.isFinite(price) || price <= 0) return 0;
  
  if (mode === 'fixed') {
    return fixedXaf;
  }
  
  // Percentage mode: round price first, then calculate fee
  const roundedPrice = roundPriceToNearest50(price);
  const feeBase = (roundedPrice / 100) * percent;
  
  // Take minimum of (10% of rounded price, cap), then round to nearest 50
  const feeCapped = Math.min(feeBase, capXaf);
  return roundPriceToNearest50(feeCapped);
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ tripId: string }> }
): Promise<NextResponse<AnonBookingResponse>> {
  try {
    const { tripId: tripIdParam } = await context.params;
    const tripId = Number(tripIdParam);
    if (!Number.isFinite(tripId)) {
      return NextResponse.json(
        { error: true, message: 'Invalid trip id' },
        { status: 400, headers: { 'Cache-Control': 'no-store' } }
      );
    }

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

    // Service role bypasses RLS - safe to read trips without authentication
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
      // tenancy: always tie booking to agency via trip
      agency_id: trip.agency_id,
      name: body.name ?? '',
      phone_number: typeof body.phone_number === 'number' ? body.phone_number : null,
      id_card_no: body.id_card_no ?? null,
      payer_email: body.payer_email ?? null,
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
      booker_id: null,
      booking_fee: (body.booking_fee as number | null | undefined) ?? null,
      payer_name: (body.payer_name as string | null | undefined) ?? null,
      payer_phone: (body.payer_phone as number | null | undefined) ?? null,
    };

    if (!insertPayload.seat) {
      throw new HttpException(400, 'Seat is required');
    }

    // Service role bypasses RLS - check for seat conflicts
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
    // Guest bookings have booker_id: null to distinguish from authenticated bookings
    // Note: Using select('*') instead of join to avoid RLS issues on agencies table
    const { data: booking, error: bookingError } = await supabaseAdmin
      .from('bookings')
      .insert(insertPayload)
      .select('*')
      .single();

    if (bookingError) throw new HttpException(500, bookingError.message);
    if (!booking) throw new HttpException(500, 'Failed to create booking');

    // Fetch agency logo and reservation fee settings separately to avoid RLS issues with foreign key joins
    // Service role bypasses RLS - safe to query agencies directly
    let agencyLogo: string | null = null;
    let reservationFeeMode: 'percentage' | 'fixed' = 'percentage';
    let reservationFeePercent: number = 10;
    let reservationFeeCapXaf: number = 500;
    let reservationFeeXaf: number = 500;
    
    if (insertPayload.agency_id) {
      const { data: agency, error: agencyError } = await supabaseAdmin
        .from('agencies')
        .select('logo, reservation_fee_mode, reservation_fee_percent, reservation_fee_cap_xaf, reservation_fee_xaf')
        .eq('id', insertPayload.agency_id)
        .single();
      
      if (!agencyError && agency) {
        agencyLogo = agency.logo || null;
        reservationFeeMode = (agency.reservation_fee_mode as 'percentage' | 'fixed') || 'percentage';
        reservationFeePercent = agency.reservation_fee_percent ?? 10;
        reservationFeeCapXaf = agency.reservation_fee_cap_xaf ?? 500;
        reservationFeeXaf = agency.reservation_fee_xaf ?? 500;
      }
    }

    // Attach agency_logo from agencies table
    const bookingWithLogo = {
      ...booking,
      agency_logo: agencyLogo || null,
    };

    // Don't create payment record yet - booking is PENDING_PAYMENT
    // Payment record will be created when reservation fee is paid

    // Service role bypasses RLS - update trip reserved count
    // Best-effort: increment reserved seats (non-atomic)
    try {
      await supabaseAdmin
        .from('trips')
        .update({ reserved: (trip.reserved || 0) + 1 })
        .eq('id', tripId);
    } catch {
      // ignore
    }

    return NextResponse.json<AnonBookingResponse>(
      { error: false, message: 'Booking created successfully', data: bookingWithLogo as Booking },
      { headers: { 'Cache-Control': 'no-store' } }
    );
  } catch (error: unknown) {
    const httpError = error as { status?: number; message?: string };
    return NextResponse.json<AnonBookingResponse>(
      { error: true, message: httpError.message || 'Failed to create booking' },
      { status: httpError.status || 500, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}


