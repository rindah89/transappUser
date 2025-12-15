import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/database.types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_URL environment variable');
}

if (!supabaseAnonKey && !supabaseServiceKey) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY, or SUPABASE_SERVICE_ROLE_KEY environment variable');
}

// Client for client-side operations (uses anon/publishable key, respects RLS)
export const supabase = supabaseAnonKey
  ? createClient<Database>(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    })
  : null;

// Client for server-side admin operations (uses service role key - REQUIRED for API routes)
// WARNING: Only use this in API routes or getServerSideProps. NEVER expose to client.
// Only check for service key on server side (not during client-side module evaluation)
const isServer = typeof window === 'undefined';

if (isServer && !supabaseServiceKey) {
  console.error('⚠️  SUPABASE_SERVICE_ROLE_KEY is missing! Server-side API routes will not work.');
  console.error('   Get it from: Supabase Dashboard → Settings → API → service_role key');
  console.error('   Make sure it\'s in your .env.local file (not .env, as .env.local is not committed to git)');
}

export const supabaseAdmin = supabaseServiceKey
  ? createClient<Database>(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false
      },
      db: {
        schema: 'public'
      }
    })
  : (() => {
      // Only throw error on server side when actually trying to use it
      if (isServer) {
        throw new Error(
          'SUPABASE_SERVICE_ROLE_KEY is required for server-side operations.\n' +
          'Please add it to your .env.local file:\n' +
          'SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here\n' +
          'Get it from: Supabase Dashboard → Settings → API → service_role key'
        );
      }
      // On client side, return a dummy object that will throw if used
      return null as any;
    })();
