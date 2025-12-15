'use client'

import { useMemo, useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import type { Trip } from '../../interfaces/trips.interface';
import type { TripFilters } from '../../utils/tripFilters';
import TripFiltersBar from './TripFiltersBar';

function activeFiltersCount(filters: TripFilters): number {
  let n = 0;
  if (filters.agency) n += 1;
  if (filters.type) n += 1;
  if (filters.maxPrice != null) n += 1;
  if (filters.minSeats != null) n += 1;
  if (filters.timeStart) n += 1;
  if (filters.timeEnd) n += 1;
  return n;
}

export default function TripFiltersResponsive({
  trips,
  filters,
  onChange,
}: {
  trips: Trip[];
  filters: TripFilters;
  onChange: (next: TripFilters) => void;
}) {
  const [open, setOpen] = useState(false);
  const count = useMemo(() => activeFiltersCount(filters), [filters]);

  return (
    <>
      {/* Desktop: sticky filter bar */}
      <div className="d-none d-lg-block">
        <TripFiltersBar trips={trips} filters={filters} onChange={onChange} />
      </div>

      {/* Mobile: button + bottom sheet */}
      <div className="d-lg-none ta-filterbar-mobile">
        <Button
          type="button"
          className="ta-btn-outline"
          onClick={() => setOpen(true)}
        >
          Filters{count ? ` (${count})` : ''}
        </Button>
      </div>

      <Modal
        isOpen={open}
        toggle={() => setOpen(false)}
        centered
        className="ta-sheet"
        contentClassName="ta-sheet__content"
      >
        <ModalHeader toggle={() => setOpen(false)}>Filters</ModalHeader>
        <ModalBody>
          <TripFiltersBar trips={trips} filters={filters} onChange={onChange} />
        </ModalBody>
        <ModalFooter className="ta-sheet__footer">
          <Button type="button" className="ta-btn-outline" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button type="button" className="ta-btn-primary" onClick={() => setOpen(false)}>
            Apply
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}


