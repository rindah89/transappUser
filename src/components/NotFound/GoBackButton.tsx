/**
 * Client Component - Go Back Button
 * Handles browser history navigation
 */

'use client';

import { Button } from 'reactstrap';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function GoBackButton() {
  const router = useRouter();

  return (
    <Button
      color="outline-secondary"
      onClick={() => router.back()}
      className="ta-btn"
    >
      <ArrowLeft size={16} />
      <span>Go Back</span>
    </Button>
  );
}

