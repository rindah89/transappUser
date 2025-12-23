/**
 * Booking Card Skeleton
 * Matches the structure of booking cards in user bookings
 */

import Skeleton from './Skeleton';

export default function BookingCardSkeleton() {
  return (
    <article className="ta-ticket-card">
      {/* Top section */}
      <div className="ta-ticket-card__top">
        <div className="ta-ticket-card__route">
          {/* Cities */}
          <div className="ta-ticket-card__cities">
            <Skeleton width={100} height={20} />
            <span className="ta-ticket-card__arrow">→</span>
            <Skeleton width={100} height={20} />
          </div>
          
          {/* Agency */}
          <Skeleton width={150} height={18} className="mt-2" />
          
          {/* Meta pill */}
          <div className="ta-ticket-card__meta mt-2">
            <Skeleton width={120} height={24} borderRadius="1rem" />
          </div>
        </div>

        {/* Status */}
        <div className="ta-ticket-card__status">
          <Skeleton width={100} height={24} borderRadius="1rem" />
        </div>
      </div>

      {/* Grid section */}
      <div className="ta-ticket-card__grid">
        {/* Date */}
        <div className="ta-kv">
          <div className="ta-kv__k">
            <Skeleton width={16} height={16} borderRadius="50%" />
            <Skeleton width={60} height={16} className="ms-2" />
          </div>
          <div className="ta-kv__v">
            <Skeleton width={100} height={18} />
          </div>
        </div>

        {/* Time */}
        <div className="ta-kv">
          <div className="ta-kv__k">
            <Skeleton width={16} height={16} borderRadius="50%" />
            <Skeleton width={60} height={16} className="ms-2" />
          </div>
          <div className="ta-kv__v">
            <Skeleton width={80} height={18} />
          </div>
        </div>

        {/* Seat */}
        <div className="ta-kv">
          <div className="ta-kv__k">
            <Skeleton width={50} height={16} />
          </div>
          <div className="ta-kv__v">
            <Skeleton width={40} height={18} />
          </div>
        </div>

        {/* Price */}
        <div className="ta-kv ta-kv--right">
          <div className="ta-kv__k">
            <Skeleton width={50} height={16} />
          </div>
          <div className="ta-kv__v ta-kv__v--price">
            <Skeleton width={120} height={24} />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="ta-ticket-card__actions">
        <Skeleton width={100} height={36} borderRadius="0.375rem" />
        <Skeleton width={120} height={36} borderRadius="0.375rem" />
        <Skeleton width={100} height={36} borderRadius="0.375rem" />
      </div>
    </article>
  );
}

export function BookingCardSkeletonList({ count = 3 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <BookingCardSkeleton key={index} />
      ))}
    </>
  );
}

