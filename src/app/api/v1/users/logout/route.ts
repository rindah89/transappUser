import { NextRequest, NextResponse } from 'next/server';
import { cookies, headers } from 'next/headers';
import { supabaseAdmin } from '@databases/supabase';

// Next.js 16 best practice: Use async request APIs
export async function POST(_request: NextRequest): Promise<NextResponse<{ error: boolean; message: string }>> {
  try {
    // Next.js 16: cookies() and headers() are now async
    const cookieStore = await cookies();
    const headersList = await headers();
    
    // Get access token from cookies or headers
    const accessToken = cookieStore.get('sb-access-token')?.value || 
                       headersList.get('authorization')?.replace('Bearer ', '');

    // Sign out from Supabase Auth if token exists
    if (accessToken) {
      try {
        const { data: userData } = await supabaseAdmin.auth.getUser(accessToken);
        if (userData?.user) {
          // Revoke all sessions for this user
          await supabaseAdmin.auth.admin.signOut(userData.user.id);
        }
      } catch {
        // Ignore errors if token is invalid
      }
    }
    
    // Clear all auth cookies
    cookieStore.delete('auth-token');
    cookieStore.delete('sb-access-token');
    cookieStore.delete('sb-refresh-token');
    
    return NextResponse.json({
      error: false,
      message: 'Logged out successfully',
    }, {
      headers: {
        'Cache-Control': 'no-store',
      },
    });
  } catch (error: unknown) {
    const httpError = error as { status?: number; message?: string };
    return NextResponse.json(
      {
        error: true,
        message: httpError.message || 'Failed to logout',
      },
      { 
        status: httpError.status || 500,
        headers: {
          'Cache-Control': 'no-store',
        },
      }
    );
  }
}
