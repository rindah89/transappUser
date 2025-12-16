import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@databases/supabase';
import { HttpException } from '@exceptions/HttpException';
import type { PaymentRecordInsert } from '@interfaces/payment-record.interface';

interface CompletePaymentResponse {
  error: boolean;
  message: string;
  data?: any;
}

function roundPriceToNearest50(price: number): number {
  if (!Number.isFinite(price) || price <= 0) return 0;
  return Math.ceil(price / 50) * 50;
}

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
  
  const roundedPrice = roundPriceToNearest50(price);
  const feeBase = (roundedPrice / 100) * percent;
  const feeCapped = Math.min(feeBase, capXaf);
  return roundPriceToNearest50(feeCapped);
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ bookingId: string }> }
): Promise<NextResponse<CompletePaymentResponse>> {
  try {
    const { bookingId: bookingIdParam } = await context.params;
    const bookingId = Number(bookingIdParam);

    if (!Number.isFinite(bookingId)) {
      return NextResponse.json(
        { error: true, message: 'Invalid booking ID' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { transaction_id, payment_method, amount, discount, promo_code } = body;

    // Get booking
    const { data: booking, error: bookingError } = await supabaseAdmin
      .from('bookings')
      .select('*, trips(*)')
      .eq('id', bookingId)
      .single();

    if (bookingError || !booking) {
      return NextResponse.json(
        { error: true, message: 'Booking not found' },
        { status: 404 }
      );
    }

    const trip = (booking as any).trips || booking;
    const tripPrice = Number(trip.price || booking.price || 0);

    // Get agency reservation fee settings
    let reservationFeeMode: 'percentage' | 'fixed' = 'percentage';
    let reservationFeePercent: number = 10;
    let reservationFeeCapXaf: number = 500;
    let reservationFeeXaf: number = 500;

    if (booking.agency_id) {
      const { data: agency } = await supabaseAdmin
        .from('agencies')
        .select('reservation_fee_mode, reservation_fee_percent, reservation_fee_cap_xaf, reservation_fee_xaf')
        .eq('id', booking.agency_id)
        .single();

      if (agency) {
        reservationFeeMode = (agency.reservation_fee_mode as 'percentage' | 'fixed') || 'percentage';
        reservationFeePercent = agency.reservation_fee_percent ?? 10;
        reservationFeeCapXaf = agency.reservation_fee_cap_xaf ?? 500;
        reservationFeeXaf = agency.reservation_fee_xaf ?? 500;
      }
    }

    const calculatedFee = calculateReservationFee(
      tripPrice,
      reservationFeeMode,
      reservationFeePercent,
      reservationFeeCapXaf,
      reservationFeeXaf
    );

    const discountAmount = discount || 0;
    const paidAmount = amount || calculatedFee;

    // Create payment record
    const paymentPayload: PaymentRecordInsert = {
      booking_id: booking.id,
      trip_id: booking.trip_id,
      agency_id: booking.agency_id,
      user_id: booking.booker_id,
      currency: 'XAF',
      ticket_amount: tripPrice,
      reservation_fee_amount: calculatedFee,
      discount_amount: discountAmount,
      amount_due_now: paidAmount,
      amount_due_at_counter: tripPrice,
      payment_method: payment_method || 'ONLINE',
      provider: 'PAYUNIT',
      provider_reference: transaction_id || null,
      status: 'SUCCEEDED',
      verified_at: new Date().toISOString(),
      metadata: {
        promo_code: promo_code || null,
        note: 'Reservation fee paid online. Ticket payable in cash at counter.',
      } as any,
    };

    const { error: paymentError } = await supabaseAdmin
      .from('payment_records')
      .insert(paymentPayload);

    if (paymentError) {
      throw new HttpException(500, `Failed to record payment: ${paymentError.message}`);
    }

    // Update booking status
    const { error: updateError } = await supabaseAdmin
      .from('bookings')
      .update({ status: 'CONFIRMED' })
      .eq('id', bookingId);

    if (updateError) {
      // Payment recorded but status update failed - log but don't fail
      console.error('Failed to update booking status:', updateError);
    }

    return NextResponse.json({
      error: false,
      message: 'Reservation fee paid successfully',
      data: {
        booking_id: booking.id,
        payment_amount: paidAmount,
        discount: discountAmount,
      },
    });
  } catch (error: unknown) {
    const httpError = error as { status?: number; message?: string };
    return NextResponse.json(
      {
        error: true,
        message: httpError.message || 'Failed to complete payment',
      },
      { status: httpError.status || 500 }
    );
  }
}

