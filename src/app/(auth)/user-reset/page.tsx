'use client'

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ResetPassword from '../../../pages/Users/ResetPassword';

export default function UserResetPage() {
  const searchParams = useSearchParams();
  const [isValidToken, setIsValidToken] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const verifyToken = async () => {
      // Supabase Auth password reset uses hash fragments in the URL
      // The token is automatically handled by Supabase when the user is redirected
      // Check if we have the necessary hash parameters
      const hashParams = window.location.hash;
      
      if (hashParams && hashParams.includes('access_token')) {
        // Supabase Auth reset link detected
        setIsValidToken(true);
      } else {
        // Fallback to old reset code method
        const token = searchParams?.get('token') || searchParams?.get('resetCode');
        setIsValidToken(!!token);
      }
      
      setLoading(false);
    };

    verifyToken();
  }, [searchParams]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <p>Verifying reset token...</p>
      </div>
    );
  }

  if (!isValidToken) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <p>Invalid or expired reset token. Please request a new password reset.</p>
      </div>
    );
  }

  return <ResetPassword />;
}

