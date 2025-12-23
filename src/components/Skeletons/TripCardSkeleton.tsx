/**
 * Trip Card Skeleton
 * Matches the structure of trip cards in search results
 */

import Skeleton from './Skeleton';

export default function TripCardSkeleton() {
  return (
    <div className="mb-3">
      <div className="card ta-trip-card">
        <div className="card-body ta-trip-card__body">
          <div className="ta-trip-card__left">
            {/* Logo skeleton */}
            <div className="ta-trip-card__logo">
              <Skeleton width={44} height={44} borderRadius="0.5rem" />
            </div>
            
            {/* Meta information skeleton */}
            <div className="ta-trip-card__meta">
              <div className="ta-trip-card__top">
                {/* Agency name */}
                <Skeleton width={120} height={20} className="mb-2" />
                {/* Badge */}
                <Skeleton width={80} height={24} borderRadius="1rem" />
              </div>
              
              {/* Route */}
              <div className="ta-trip-card__route">
                <Skeleton width={180} height={24} className="mb-1" />
              </div>
              
              {/* Sub info */}
              <div className="ta-trip-card__sub">
                <Skeleton width={100} height={16} />
                <span className="ta-dot">•</span>
                <Skeleton width={120} height={16} />
              </div>
            </div>
          </div>

          {/* Right side - Price and button */}
          <div className="ta-trip-card__right">
            <div className="ta-trip-card__price">
              <Skeleton width={50} height={14} className="mb-1" />
              <Skeleton width={100} height={28} />
            </div>
            {/* Button skeleton */}
            <Skeleton width={140} height={40} borderRadius="0.375rem" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function TripCardSkeletonList({ count = 3 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <TripCardSkeleton key={index} />
      ))}
    </>
  );
}

