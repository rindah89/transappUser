/**
 * Reusable Error Boundary Component
 * Can be used in error.tsx files
 */

'use client';

import { useEffect } from 'react';
import { Container, Button } from 'reactstrap';
import Link from 'next/link';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
  title?: string;
  message?: string;
  showHomeButton?: boolean;
}

export default function ErrorBoundary({
  error,
  reset,
  title = 'Something went wrong!',
  message,
  showHomeButton = true,
}: ErrorBoundaryProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error Boundary:', error);
    
    // You can send to error tracking service here
    // Example: Sentry.captureException(error);
  }, [error]);

  const errorMessage = message || error.message || 'An unexpected error occurred. Please try again.';

  return (
    <div className="page-content">
      <Container>
        <div className="ta-error-page">
          <div className="ta-error-page__content">
            <div className="ta-error-page__icon">
              <AlertTriangle size={64} color="#dc3545" />
            </div>
            
            <h1 className="ta-error-page__title">{title}</h1>
            
            <p className="ta-error-page__message">{errorMessage}</p>
            
            {error.digest && (
              <p className="ta-error-page__digest">
                Error ID: <code>{error.digest}</code>
              </p>
            )}

            <div className="ta-error-page__actions">
              <Button
                color="primary"
                onClick={reset}
                className="ta-btn"
              >
                <RefreshCw size={16} />
                <span>Try again</span>
              </Button>
              
              {showHomeButton && (
                <Link href="/" className="btn btn-outline-secondary ta-btn">
                  <Home size={16} />
                  <span>Go home</span>
                </Link>
              )}
            </div>

            {process.env.NODE_ENV === 'development' && (
              <details className="ta-error-page__details">
                <summary>Error Details (Development Only)</summary>
                <pre className="ta-error-page__stack">
                  {error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

