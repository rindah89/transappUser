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
      title="Failed to search trips"
      message="We couldn't load the search results. Please try again or modify your search."
      showHomeButton={false}
    />
  );
}

