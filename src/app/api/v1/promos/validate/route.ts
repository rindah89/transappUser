import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@databases/supabase';

interface PromoValidationResponse {
  error: boolean;
  message: string;
  data?: {
    valid: boolean;
    discount_type: 'percentage' | 'fixed';
    discount_value: number;
    final_fee: number;
    original_fee: number;
  };
}

export async function POST(request: NextRequest): Promise<NextResponse<PromoValidationResponse>> {
  try {
    const body = await request.json();
    const { promo_code, trip_id, reservation_fee } = body;

    if (!promo_code || typeof promo_code !== 'string') {
      return NextResponse.json(
        { error: true, message: 'Promo code is required' },
        { status: 400 }
      );
    }

    if (!trip_id || !Number.isFinite(Number(trip_id))) {
      return NextResponse.json(
        { error: true, message: 'Valid trip ID is required' },
        { status: 400 }
      );
    }

    if (!Number.isFinite(reservation_fee) || reservation_fee < 0) {
      return NextResponse.json(
        { error: true, message: 'Valid reservation fee is required' },
        { status: 400 }
      );
    }

    // Get trip to find agency_id
    const { data: trip, error: tripError } = await supabaseAdmin
      .from('trips')
      .select('agency_id')
      .eq('id', Number(trip_id))
      .single();

    if (tripError || !trip) {
      return NextResponse.json(
        { error: true, message: 'Trip not found' },
        { status: 404 }
      );
    }

    // Check promo code
    const code = promo_code.trim().toUpperCase();
    const now = new Date().toISOString();

    // First check for app-wide promo codes (applies to all agencies)
    let { data: promo, error: promoError } = await supabaseAdmin
      .from('reservation_promotions')
      .select('*')
      .eq('code', code)
      .eq('is_active', true)
      .eq('is_app_wide', true)
      .single();

    // If no app-wide promo found, check for agency-specific promo
    if (promoError || !promo) {
      const { data: agencyPromo, error: agencyPromoError } = await supabaseAdmin
        .from('reservation_promotions')
        .select('*')
        .eq('agency_id', trip.agency_id)
        .eq('code', code)
        .eq('is_active', true)
        .eq('is_app_wide', false)
        .single();

      if (!agencyPromoError && agencyPromo) {
        promo = agencyPromo;
        promoError = null;
      } else {
        promoError = agencyPromoError;
      }
    }

    if (promoError || !promo) {
      return NextResponse.json({
        error: false,
        message: 'Promo code not found or expired',
        data: {
          valid: false,
          discount_type: 'fixed',
          discount_value: 0,
          final_fee: reservation_fee,
          original_fee: reservation_fee,
        },
      });
    }

    // Check date validity
    const isValidDate = (!promo.starts_at || promo.starts_at <= now) && 
                        (!promo.ends_at || promo.ends_at >= now);

    if (!isValidDate) {
      return NextResponse.json({
        error: false,
        message: 'Promo code not found or expired',
        data: {
          valid: false,
          discount_type: 'fixed',
          discount_value: 0,
          final_fee: reservation_fee,
          original_fee: reservation_fee,
        },
      });
    }

    if (promoError || !promo) {
      return NextResponse.json({
        error: false,
        message: 'Promo code not found or expired',
        data: {
          valid: false,
          discount_type: 'fixed',
          discount_value: 0,
          final_fee: reservation_fee,
          original_fee: reservation_fee,
        },
      });
    }

    // Calculate discount
    let discountAmount = 0;
    if (promo.discount_type === 'percentage') {
      discountAmount = Math.round((reservation_fee * promo.discount_value) / 100);
    } else {
      discountAmount = promo.discount_value;
    }

    // Discount cannot exceed the reservation fee
    discountAmount = Math.min(discountAmount, reservation_fee);
    const finalFee = Math.max(0, reservation_fee - discountAmount);

    return NextResponse.json({
      error: false,
      message: 'Promo code applied successfully',
      data: {
        valid: true,
        discount_type: promo.discount_type,
        discount_value: promo.discount_value,
        final_fee: finalFee,
        original_fee: reservation_fee,
      },
    });
  } catch (error: unknown) {
    return NextResponse.json(
      {
        error: true,
        message: (error as any)?.message || 'Failed to validate promo code',
      },
      { status: 500 }
    );
  }
}

