/**
 * Reusable Loading Spinner Component
 * Can be used in loading.tsx files or as inline loading states
 * Now supports skeleton mode for better UX
 */

import { SpinnerCircular } from 'spinners-react';
import { Container } from 'reactstrap';
import type { ReactNode } from 'react';

interface LoadingSpinnerProps {
  message?: string;
  fullScreen?: boolean;
  size?: number;
  color?: string;
  useSkeleton?: boolean;
  skeleton?: ReactNode;
}

export default function LoadingSpinner({ 
  message = 'Loading...', 
  fullScreen = false,
  size = 50,
  color = '#bcc014',
  useSkeleton = false,
  skeleton,
}: LoadingSpinnerProps) {
  // If skeleton is provided, use it instead of spinner
  if (useSkeleton && skeleton) {
    const content = (
      <div className="page-content">
        {skeleton}
      </div>
    );

    if (fullScreen) {
      return (
        <div className="page-content">
          <Container fluid>
            {skeleton}
          </Container>
        </div>
      );
    }

    return content;
  }

  // Default spinner behavior
  const content = (
    <div className="loader-outer" style={fullScreen ? { minHeight: '100vh' } : { minHeight: '50vh' }}>
      <div className="loader-inner">
        <SpinnerCircular color={color} size={size} />
        {message && (
          <p className="mt-3 text-muted" style={{ textAlign: 'center' }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="page-content">
        <Container fluid>
          {content}
        </Container>
      </div>
    );
  }

  return content;
}
