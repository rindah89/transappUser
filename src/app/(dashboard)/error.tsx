'use client';

import ErrorBoundary from '../../components/Error/ErrorBoundary';

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
      title="Something went wrong!"
      message="We encountered an error while loading this page. Please try again."
    />
  );
}
