import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import UserAuthService from '@services/user.auth.service';
import { supabaseAdmin } from '@databases/supabase';

const userAuthService = new UserAuthService();

interface DeleteAccountRequest {
  email: string;
}

// Next.js 16 best practice: Use async request APIs
export async function POST(request: NextRequest): Promise<NextResponse<{ error: boolean; message: string }>> {
  try {
    // Next.js 16: cookies() and headers() are now async
    const cookieStore = await cookies();
    
    const body: DeleteAccountRequest = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: true, message: 'Email is required' },
        { status: 400, headers: { 'Cache-Control': 'no-store' } }
      );
    }

    // Get user by email to find their ID
    const { data: user, error: userError } = await supabaseAdmin
      .from('users')
      .select('id')
      .eq('email', email)
      .single();

    if (userError || !user) {
      return NextResponse.json(
        { error: true, message: 'User not found' },
        { status: 404, headers: { 'Cache-Control': 'no-store' } }
      );
    }

    // Use Supabase Auth to delete account (deletes both auth user and user record)
    const result = await userAuthService.deleteAccount(user.id);
    
    // Clear all auth cookies on account deletion
    cookieStore.delete('auth-token');
    cookieStore.delete('sb-access-token');
    cookieStore.delete('sb-refresh-token');
    
    return NextResponse.json({
      error: false,
      message: result.message,
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
        message: httpError.message || 'Failed to delete account',
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
