/**
 * Supabase Auth utility functions
 * Helper functions for client-side Supabase Auth operations
 */

import { supabase } from '@databases/supabase';
import type { User } from '@interfaces/user.interface';

const requireSupabase = () => {
  if (!supabase) {
    throw new Error('Supabase is not configured');
  }
  return supabase;
};

/**
 * Sign in with email and password
 */
export async function signInWithPassword(email: string, password: string): Promise<{
  user: User;
  session: any;
}> {
  const sb = requireSupabase();
  const { data, error } = await sb.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  if (!data.user || !data.session) {
    throw new Error('Failed to sign in');
  }

  // Get user data from users table (by auth_id to match RLS)
  const authId = data.user.id;
  const { data: userData, error: userError } = await sb.from('users').select('*').eq('auth_id', authId).single();

  if (userError || !userData) {
    throw new Error('Failed to fetch user data');
  }

  return {
    user: userData as User,
    session: data.session,
  };
}

/**
 * Sign up with email and password
 */
export async function signUpWithPassword(
  email: string,
  password: string,
  metadata?: {
    name?: string;
    phone_number?: string;
  }
): Promise<{
  user: User | null;
  session: any;
}> {
  const sb = requireSupabase();
  const { data, error } = await sb.auth.signUp({
    email,
    password,
    options: {
      data: metadata,
    },
  });

  if (error) {
    throw error;
  }

  if (!data.user) {
    throw new Error('Failed to create user');
  }

  // Get user data from users table (may not exist yet if email confirmation is required)
  const { data: userData } = await sb
    .from('users')
    .select('*')
    .eq('email', email)
    .single();

  return {
    user: userData as User | null,
    session: data.session,
  };
}

/**
 * Sign out
 */
export async function signOut(): Promise<void> {
  const sb = requireSupabase();
  const { error } = await sb.auth.signOut();
  if (error) {
    throw error;
  }
}

/**
 * Get current session
 */
export async function getCurrentSession() {
  const sb = requireSupabase();
  const { data: { session }, error } = await sb.auth.getSession();
  if (error) {
    throw error;
  }
  return session;
}

/**
 * Get current user
 */
export async function getCurrentUser(): Promise<User | null> {
  const sb = requireSupabase();
  const { data: { user: authUser }, error: authError } = await sb.auth.getUser();
  
  if (authError || !authUser) {
    return null;
  }

  const { data: userData } = await sb.from('users').select('*').eq('auth_id', authUser.id).single();

  return userData as User | null;
}

/**
 * Reset password (sends email)
 */
export async function resetPassword(email: string): Promise<void> {
  const sb = requireSupabase();
  const origin =
    typeof window !== 'undefined' && window.location?.origin ? window.location.origin : process.env.NEXT_PUBLIC_APP_URL;
  const redirectTo = `${origin || ''}/user-reset`;
  const { error } = await sb.auth.resetPasswordForEmail(email, {
    redirectTo,
  });

  if (error) {
    throw error;
  }
}

/**
 * Update password
 */
export async function updatePassword(newPassword: string): Promise<void> {
  const sb = requireSupabase();
  const { error } = await sb.auth.updateUser({
    password: newPassword,
  });

  if (error) {
    throw error;
  }
}
