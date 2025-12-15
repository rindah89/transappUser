import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@databases/supabase';
import { HttpException } from '@exceptions/HttpException';
import type { Booking, BookingInsert } from '@interfaces/booking.interface';
import type { PaymentRecordInsert } from '@interfaces/payment-record.interface';

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

function reservationFeeFor(price: number): number {
  if (!Number.isFinite(price) || price <= 0) return 0;
  const fee = (price / 100) * 10;
  return fee > 500 ? 500 : fee;
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
      status: (body.status as string | null | undefined) ?? '',
      booker_id: null,
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

    const { data: booking, error: bookingError } = await supabaseAdmin
      .from('bookings')
      .insert(insertPayload)
      .select(`
        *,
        agencies!bookings_agency_id_fkey (
          logo
        )
      `)
      .single();

    if (bookingError) throw new HttpException(500, bookingError.message);
    if (!booking) throw new HttpException(500, 'Failed to create booking');

    // Attach agency_logo from joined agencies table
    const bookingWithLogo = {
      ...booking,
      agency_logo: (booking as any).agencies?.logo || null,
    };
    delete (bookingWithLogo as any).agencies;

    // Record "payment" (reservation fee waived) + cash-at-counter amount (best-effort; never blocks booking)
    try {
      const reservationFee = reservationFeeFor(Number(trip.price || 0));
      const paymentPayload: PaymentRecordInsert = {
        booking_id: booking.id,
        trip_id: tripId,
        // tenancy: tie payment record to agency via booking/trip
        agency_id: trip.agency_id,
        user_id: null,
        currency: 'XAF',
        ticket_amount: Number(trip.price || 0),
        reservation_fee_amount: reservationFee,
        discount_amount: reservationFee, // 100% discount (waived)
        amount_due_now: 0,
        amount_due_at_counter: Number(trip.price || 0),
        payment_method: 'CASH_AT_COUNTER',
        provider: null,
        provider_reference: booking.transaction_id ?? null,
        status: 'SUCCEEDED',
        verified_at: new Date().toISOString(),
        metadata: {
          note: 'Reservation fee waived; ticket payable in cash at counter',
        } as any,
      };

      await supabaseAdmin.from('payment_records').insert(paymentPayload);
    } catch {
      // ignore
    }

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


