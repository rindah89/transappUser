import { supabaseAdmin } from '@databases/supabase';
import { HttpException } from '../exceptions/HttpException';
import type { Trip } from '../interfaces/trips.interface';

class TripService {
  public async searchTrips(params: {
    from?: string;
    to?: string;
    journeyDate?: string;
    departureTime?: string;
  }): Promise<Trip[]> {
    // Service role bypasses RLS - fetch trips without joins to avoid RLS issues on agencies table
    let query = supabaseAdmin
      .from('trips')
      .select('*');

    if (params.from) {
      query = query.eq('from_location', params.from);
    }

    if (params.to) {
      query = query.eq('to_location', params.to);
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
      throw new HttpException(500, error.message);
    }

    if (!data || data.length === 0) {
      return [];
    }

    // Fetch agency logos separately to avoid RLS issues with foreign key joins
    // Service role bypasses RLS - safe to query agencies directly
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

    // Attach current agency_logo from agencies table (overrides stale trips.agency_logo)
    return ((data || []) as any[]).map((trip: any) => {
      const tripWithCurrentLogo = {
        ...trip,
        agency_logo: agencyLogos[trip.agency_id] || trip.agency_logo || null,
      };
      return tripWithCurrentLogo;
    }) as Trip[];
  }
}

export default TripService;
