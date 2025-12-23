import LoadingSpinner from '../../../../components/Loading/LoadingSpinner';
import Skeleton from '../../../../components/Skeletons/Skeleton';
import { Container } from 'reactstrap';

export default function Loading() {
  return (
    <LoadingSpinner
      useSkeleton={true}
      fullScreen
      skeleton={
        <div className="page-content">
          <Container fluid={false}>
            <div className="ta-ticket">
              {/* Header skeleton */}
              <div className="ta-ticket__header ta-no-print mb-3">
                <Skeleton width={100} height={36} borderRadius="0.375rem" />
              </div>

              {/* Ticket skeleton */}
              <article className="ta-boarding-pass">
                <header className="ta-boarding-pass__header">
                  <div className="ta-boarding-pass__brand">
                    <div className="ta-boarding-pass__agency">
                      <Skeleton width={24} height={24} borderRadius="0.25rem" />
                      <Skeleton width={100} height={18} className="ms-2" />
                    </div>
                    <Skeleton width={120} height={20} />
                  </div>
                  <div className="ta-boarding-pass__barcode">
                    <Skeleton width={100} height={14} className="mb-1" />
                    <Skeleton width={150} height={24} />
                  </div>
                </header>

                <section className="ta-boarding-pass__route">
                  <div className="ta-boarding-pass__routeCol">
                    <Skeleton width={50} height={14} className="mb-2" />
                    <Skeleton width={120} height={24} />
                  </div>
                  <div className="ta-boarding-pass__routeMid" aria-hidden="true">
                    <span className="ta-boarding-pass__routeLine" />
                  </div>
                  <div className="ta-boarding-pass__routeCol ta-boarding-pass__routeCol--right">
                    <Skeleton width={40} height={14} className="mb-2" />
                    <Skeleton width={120} height={24} />
                  </div>
                </section>

                <div className="ta-perf" aria-hidden="true">
                  <span className="ta-perf__cut ta-perf__cut--left" />
                  <span className="ta-perf__line" />
                  <span className="ta-perf__cut ta-perf__cut--right" />
                </div>

                <section className="ta-boarding-pass__details">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="ta-kv">
                      <div className="ta-kv__k">
                        <Skeleton width={16} height={16} borderRadius="50%" />
                        <Skeleton width={80} height={16} className="ms-2" />
                      </div>
                      <div className="ta-kv__v">
                        <Skeleton width={120} height={18} />
                      </div>
                    </div>
                  ))}
                </section>
              </article>
            </div>
          </Container>
        </div>
      }
    />
  );
}
