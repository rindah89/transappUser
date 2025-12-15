import moment from 'moment';
import type { Trip } from '../interfaces/trips.interface';

export type TripSort =
  | 'recommended'
  | 'price_low'
  | 'price_high'
  | 'departure_early'
  | 'departure_late'
  | 'seats_high';

export type TripFilters = {
  agency: string; // '' = all
  type: string; // '' = all
  maxPrice: number | null;
  minSeats: number | null;
  timeStart: string; // "HH:mm" or ''
  timeEnd: string; // "HH:mm" or ''
  sort: TripSort;
};

export const DEFAULT_TRIP_FILTERS: TripFilters = {
  agency: '',
  type: '',
  maxPrice: null,
  minSeats: null,
  timeStart: '',
  timeEnd: '',
  sort: 'recommended',
};

export function parsePrice(value: unknown): number | null {
  if (value == null) return null;
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  const s = String(value);
  const digits = s.replace(/[^\d]/g, '');
  if (!digits) return null;
  const n = Number(digits);
  return Number.isFinite(n) ? n : null;
}

export function availableSeats(trip: Trip): number {
  const seats = Number(trip.seats ?? 0);
  const reserved = Number(trip.reserved ?? 0);
  return Math.max(0, seats - reserved);
}

export function departureMinutes(trip: Trip): number | null {
  const raw = (trip.departure ?? '') as unknown;
  const s = String(raw || '').trim();
  if (!s) return null;

  const m = moment(s, ['HH:mm', 'HH:mm a', 'hh:mm A', 'H:mm', 'h:mm A'], true);
  if (!m.isValid()) return null;
  return m.hours() * 60 + m.minutes();
}

function withinTimeWindow(trip: Trip, start: string, end: string): boolean {
  if (!start && !end) return true;
  const mins = departureMinutes(trip);
  if (mins == null) return true;

  const startM = start ? moment(start, 'HH:mm', true) : null;
  const endM = end ? moment(end, 'HH:mm', true) : null;
  const startMin = startM?.isValid() ? startM.hours() * 60 + startM.minutes() : null;
  const endMin = endM?.isValid() ? endM.hours() * 60 + endM.minutes() : null;

  if (startMin != null && mins < startMin) return false;
  if (endMin != null && mins > endMin) return false;
  return true;
}

export function applyTripFilters(trips: Trip[], filters: TripFilters): Trip[] {
  return trips.filter((trip) => {
    if (filters.agency && String(trip.agency_name || '') !== filters.agency) return false;
    if (filters.type && String(trip.trip_type || '') !== filters.type) return false;

    if (filters.maxPrice != null) {
      const p = parsePrice(trip.price);
      if (p != null && p > filters.maxPrice) return false;
    }

    if (filters.minSeats != null) {
      if (availableSeats(trip) < filters.minSeats) return false;
    }

    if (!withinTimeWindow(trip, filters.timeStart, filters.timeEnd)) return false;

    return true;
  });
}

export function sortTrips(trips: Trip[], sort: TripSort): Trip[] {
  const arr = [...trips];
  switch (sort) {
    case 'price_low':
      return arr.sort((a, b) => (parsePrice(a.price) ?? Number.MAX_SAFE_INTEGER) - (parsePrice(b.price) ?? Number.MAX_SAFE_INTEGER));
    case 'price_high':
      return arr.sort((a, b) => (parsePrice(b.price) ?? 0) - (parsePrice(a.price) ?? 0));
    case 'departure_early':
      return arr.sort((a, b) => (departureMinutes(a) ?? 0) - (departureMinutes(b) ?? 0));
    case 'departure_late':
      return arr.sort((a, b) => (departureMinutes(b) ?? 0) - (departureMinutes(a) ?? 0));
    case 'seats_high':
      return arr.sort((a, b) => availableSeats(b) - availableSeats(a));
    case 'recommended':
    default:
      return arr;
  }
}


