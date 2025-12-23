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
      title="Authentication Error"
      message="We encountered an error during authentication. Please try again."
    />
  );
}
