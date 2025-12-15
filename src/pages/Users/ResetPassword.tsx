'use client'

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ForgotPassword from "../../components/Common/ForgotPassword";
import { supabase } from "@databases/supabase";
import { toast } from "react-hot-toast";

const ResetPassword: React.FC = () => {
  const router = useRouter();
  const [isResetting, setIsResetting] = useState<boolean>(false);

  useEffect(() => {
    // Check if this is a Supabase Auth password reset (has hash fragment)
    const hashParams = window.location.hash;
    
    if (hashParams && hashParams.includes('access_token')) {
      // Supabase Auth will handle the session automatically
      setIsResetting(true);
    }
  }, []);

  // Handle Supabase Auth password reset
  const handleSupabaseReset = async (newPassword: string) => {
    try {
      if (!supabase) {
        toast.error('Supabase is not configured. Please contact support.');
        return;
      }

      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) {
        toast.error(error.message || 'Failed to reset password');
      } else {
        toast.success('Password reset successful! You can now log in.');
        router.push('/login');
      }
    } catch (error: unknown) {
      toast.error('An unexpected error occurred');
    }
  };

  // If using Supabase Auth reset (from email link), show password reset form
  if (isResetting) {
    return (
      <div className="min-vh-100 d-flex flex-column opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.4)">
        <div className="container my-auto">
          <div className="row">
            <div className="col-md-9 col-lg-7 col-xl-5 mx-auto my-4">
              <div className="panel header_2 center">
                <h3>Reset Your Password</h3>
                <p>Please enter your new password below.</p>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const password = formData.get('password') as string;
                    const confirmPassword = formData.get('confirmPassword') as string;

                    if (!password || password.length < 6) {
                      toast.error('Password must be at least 6 characters');
                      return;
                    }

                    if (password !== confirmPassword) {
                      toast.error('Passwords do not match');
                      return;
                    }

                    await handleSupabaseReset(password);
                  }}
                >
                  <div className="form-group">
                    <label htmlFor="password">New Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      required
                      minLength={6}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      className="form-control"
                      required
                      minLength={6}
                    />
                  </div>
                  <button type="submit" className="btn_1 full-width">
                    Reset Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Otherwise, show the forgot password form
  return <ForgotPassword route="users/user-forgot" />;
};

export default ResetPassword;
