/**
 * Page Header Skeleton
 * For pages with headers and descriptions
 */

import Skeleton from './Skeleton';

export default function PageHeaderSkeleton() {
  return (
    <div className="ta-bookings__header mb-4">
      <div>
        <Skeleton width={200} height={32} className="mb-2" />
        <Skeleton width={300} height={18} />
      </div>
    </div>
  );
}

