/**
 * Server-side data fetching utilities for Next.js 16
 * Uses React cache() for request deduplication
 * All functions run on the server only
 */

import { cache } from 'react';
import { cookies } from 'next/headers';
import { supabaseAdmin } from '../lib/supabase';
import type { Trip } from '../interfaces/trips.interface';
import type { Booking } from '../interfaces/booking.interface';

/**
 * Get authenticated user from cookies/session
 * Cached per request to avoid duplicate calls
 */
export const getServerUser = cache(async () => {
  try {
    const cookieStore = await cookies();
    const authToken = cookieStore.get('sb-access-token')?.value;
    
    if (!authToken) {
      return null;
    }

    // Get user from Supabase session
    const { data: { user }, error } = await supabaseAdmin.auth.getUser(authToken);
    
    if (error || !user) {
      return null;
    }

    // Get user data from users table
    const { data: userData, error: userError } = await supabaseAdmin
      .from('users')
      .select('*')
      .eq('auth_id', user.id)
      .single();

    if (userError || !userData) {
      return null;
    }

    return {
      ...userData,
      token: authToken,
    };
  } catch {
    return null;
  }
});

/**
 * Search trips - Server-side data fetching
 * Cached per request to avoid duplicate API calls
 */
export const getTrips = cache(async (params: {
  from?: string;
  to?: string;
  journeyDate?: string;
  departureTime?: string;
}): Promise<Trip[]> => {
  try {
    let query = supabaseAdmin
      .from('trips')
      .select('*');

    if (params.from) {
      query = query.ilike('from_location', `%${params.from}%`);
    }

    if (params.to) {
      query = query.ilike('to_location', `%${params.to}%`);
    }

    if (params.journeyDate) {
      query = query.eq('journey_date', params.journeyDate);
    }

    if (params.departureTime) {
      query = query.gte('departure', params.departureTime);
    }

    query = query.order('departure', { ascending: true });

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching trips:', error);
      return [];
    }

    if (!data || data.length === 0) {
      return [];
    }

    // Fetch agency logos separately
    const agencyIds = [...new Set((data as any[]).map((trip: any) => trip.agency_id).filter(Boolean))];
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

    // Attach current agency_logo
    return ((data || []) as any[]).map((trip: any) => ({
      ...trip,
      agency_logo: agencyLogos[trip.agency_id] || trip.agency_logo || null,
    })) as Trip[];
  } catch (error) {
    console.error('Error in getTrips:', error);
    return [];
  }
});

/**
 * Get user bookings - Server-side
 */
export const getUserBookings = cache(async (userId?: number): Promise<Booking[]> => {
  try {
    if (!userId) {
      return [];
    }

    const { data, error } = await supabaseAdmin
      .from('bookings')
      .select('*')
      .eq('booker_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching bookings:', error);
      return [];
    }

    return (data || []) as Booking[];
  } catch (error) {
    console.error('Error in getUserBookings:', error);
    return [];
  }
});

/**
 * Get booking by ID - Server-side
 */
export const getBooking = cache(async (bookingId: number): Promise<Booking | null> => {
  try {
    const { data, error } = await supabaseAdmin
      .from('bookings')
      .select('*')
      .eq('id', bookingId)
      .single();

    if (error || !data) {
      return null;
    }

    return data as Booking;
  } catch (error) {
    console.error('Error in getBooking:', error);
    return null;
  }
});

/**
 * Get trip by ID - Server-side
 */
export const getTrip = cache(async (tripId: number): Promise<Trip | null> => {
  try {
    const { data, error } = await supabaseAdmin
      .from('trips')
      .select('*')
      .eq('id', tripId)
      .single();

    if (error || !data) {
      return null;
    }

    // Get agency logo
    if (data.agency_id) {
      const { data: agency } = await supabaseAdmin
        .from('agencies')
        .select('logo')
        .eq('id', data.agency_id)
        .single();

      if (agency?.logo) {
        (data as any).agency_logo = agency.logo;
      }
    }

    return data as Trip;
  } catch (error) {
    console.error('Error in getTrip:', error);
    return null;
  }
});

