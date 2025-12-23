import LoadingSpinner from '../../../components/Loading/LoadingSpinner';
import { BookingCardSkeletonList } from '../../../components/Skeletons/BookingCardSkeleton';
import PageHeaderSkeleton from '../../../components/Skeletons/PageHeaderSkeleton';

export default function Loading() {
  return (
    <LoadingSpinner
      useSkeleton={true}
      fullScreen
      skeleton={
        <section className="ta-bookings">
          <div className="container">
            <PageHeaderSkeleton />
            <div className="ta-bookings__list">
              <BookingCardSkeletonList count={4} />
            </div>
          </div>
        </section>
      }
    />
  );
}
