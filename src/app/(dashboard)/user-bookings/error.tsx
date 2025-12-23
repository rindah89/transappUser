'use client';

import ErrorBoundary from '../../../components/Error/ErrorBoundary';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorBoundary
      error={error}
      reset={reset}
      title="Failed to load bookings"
      message="We couldn't load your bookings. Please try again or contact support if the problem persists."
    />
  );
}
