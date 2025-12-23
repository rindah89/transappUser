'use client';

import ErrorBoundary from '../../../../components/Error/ErrorBoundary';

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
      title="Failed to load ticket"
      message="We couldn't load your ticket. It may have been deleted or you may not have permission to view it."
    />
  );
}

