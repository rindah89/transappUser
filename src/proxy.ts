import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types/database.types';

/**
 * Proxy - Handles authentication checks and route protection at the edge using Supabase Auth
 * Replaces the deprecated middleware file convention
 */
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Initialize Supabase client for proxy
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  
  if (!supabaseUrl || !supabaseAnonKey) {
    // If Supabase is not configured, allow request through
    return NextResponse.next();
  }

  const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  // Get access token from cookies or headers
  // - Prefer raw JWT in `sb-access-token`
  // - Support legacy `auth-token` cookie which stores JSON { user, token }
  const authTokenCookie = request.cookies.get('auth-token')?.value;
  let accessToken =
    request.cookies.get('sb-access-token')?.value ||
    request.headers.get('authorization')?.replace('Bearer ', '') ||
    undefined;

  if (!accessToken && authTokenCookie) {
    try {
      const parsed = JSON.parse(authTokenCookie) as { token?: string };
      if (parsed?.token) accessToken = parsed.token;
    } catch {
      // If it's not JSON, treat it as a raw token
      accessToken = authTokenCookie;
    }
  }

  let user = null;

  // Verify token with Supabase Auth
  if (accessToken) {
    try {
      const { data: { user: authUser }, error } = await supabase.auth.getUser(accessToken);
      if (!error && authUser) {
        user = authUser;
      }
    } catch {
      // Invalid token, continue without auth
    }
  }

  // Protected routes that require authentication (dashboard routes)
  const protectedRoutes = [
    '/user-bookings',
    '/ticket-form',
    '/ticket-summary',
    // Removed /book, /trip-search, /search-results to allow guest booking
  ];

  // Auth routes (public routes)
  const authRoutes = [
    '/login',
    '/register',
    '/user-forgot',
    '/user-reset',
    '/trip-login',
    '/transapp-delete-my-account',
    '/pay',
    '/payunit-return',
  ];

  // Check if the route is protected
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  // Keep authRoutes list for future checks/redirects if needed.
  authRoutes.some(route => pathname.startsWith(route));

  // If accessing a protected route without valid session, redirect to login
  if (isProtectedRoute && !user) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    url.searchParams.set('redirect', pathname);
    return NextResponse.redirect(url);
  }

  // Note: we intentionally do NOT redirect authenticated users away from auth routes.
  // This avoids trapping users in cases where cookies exist but client state/localStorage is out of sync.

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

