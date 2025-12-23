import LoadingSpinner from '../../../components/Loading/LoadingSpinner';
import { TripCardSkeletonList } from '../../../components/Skeletons/TripCardSkeleton';

export default function Loading() {
  return (
    <LoadingSpinner
      useSkeleton={true}
      fullScreen
      skeleton={
        <div className="container-fluid">
          <div className="row mt-3">
            <div className="col-lg-12">
              <TripCardSkeletonList count={5} />
            </div>
          </div>
        </div>
      }
    />
  );
}

