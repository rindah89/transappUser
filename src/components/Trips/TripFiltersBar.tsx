'use client'

import { useMemo } from 'react';
import type { Trip } from '../../interfaces/trips.interface';
import { DEFAULT_TRIP_FILTERS, type TripFilters, type TripSort, parsePrice } from '../../utils/tripFilters';

function uniq(values: string[]): string[] {
  return Array.from(new Set(values.filter(Boolean))).sort((a, b) => a.localeCompare(b));
}

export default function TripFiltersBar({
  trips,
  filters,
  onChange,
}: {
  trips: Trip[];
  filters: TripFilters;
  onChange: (next: TripFilters) => void;
}) {
  const agencies = useMemo(() => uniq(trips.map((t) => String(t.agency_name || ''))), [trips]);
  const types = useMemo(() => uniq(trips.map((t) => String(t.trip_type || ''))), [trips]);

  const maxPriceHint = useMemo(() => {
    const prices = trips.map((t) => parsePrice(t.price)).filter((n): n is number => typeof n === 'number');
    if (!prices.length) return null;
    return Math.max(...prices);
  }, [trips]);

  const set = (patch: Partial<TripFilters>) => onChange({ ...filters, ...patch });

  const reset = () => onChange({ ...DEFAULT_TRIP_FILTERS });

  return (
    <div className="ta-filterbar">
      <div className="ta-filterbar__row">
        <div className="ta-filterbar__group">
          <label className="ta-filterbar__label">Sort</label>
          <select
            className="form-select ta-filterbar__control"
            value={filters.sort}
            onChange={(e) => set({ sort: e.target.value as TripSort })}
          >
            <option value="recommended">Recommended</option>
            <option value="price_low">Price: low → high</option>
            <option value="price_high">Price: high → low</option>
            <option value="departure_early">Departure: earliest</option>
            <option value="departure_late">Departure: latest</option>
            <option value="seats_high">Seats: most available</option>
          </select>
        </div>

        <div className="ta-filterbar__group">
          <label className="ta-filterbar__label">Agency</label>
          <select
            className="form-select ta-filterbar__control"
            value={filters.agency}
            onChange={(e) => set({ agency: e.target.value })}
          >
            <option value="">All</option>
            {agencies.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        <div className="ta-filterbar__group">
          <label className="ta-filterbar__label">Type</label>
          <select
            className="form-select ta-filterbar__control"
            value={filters.type}
            onChange={(e) => set({ type: e.target.value })}
          >
            <option value="">All</option>
            {types.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="ta-filterbar__group">
          <label className="ta-filterbar__label">Max price (XAF)</label>
          <input
            className="form-control ta-filterbar__control"
            inputMode="numeric"
            placeholder={maxPriceHint ? `e.g. ${maxPriceHint}` : 'e.g. 5000'}
            value={filters.maxPrice ?? ''}
            onChange={(e) => set({ maxPrice: e.target.value ? Number(e.target.value) : null })}
          />
        </div>

        <div className="ta-filterbar__group">
          <label className="ta-filterbar__label">Min seats</label>
          <input
            className="form-control ta-filterbar__control"
            inputMode="numeric"
            placeholder="e.g. 2"
            value={filters.minSeats ?? ''}
            onChange={(e) => set({ minSeats: e.target.value ? Number(e.target.value) : null })}
          />
        </div>

        <div className="ta-filterbar__group">
          <label className="ta-filterbar__label">Time</label>
          <div className="ta-filterbar__time">
            <input
              type="time"
              className="form-control ta-filterbar__control"
              value={filters.timeStart}
              onChange={(e) => set({ timeStart: e.target.value })}
            />
            <span className="ta-filterbar__time-sep">–</span>
            <input
              type="time"
              className="form-control ta-filterbar__control"
              value={filters.timeEnd}
              onChange={(e) => set({ timeEnd: e.target.value })}
            />
          </div>
        </div>

        <div className="ta-filterbar__actions">
          <button type="button" className="btn ta-btn-outline" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}


