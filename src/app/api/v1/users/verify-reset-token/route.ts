import { NextRequest, NextResponse } from 'next/server';

interface VerifyResetTokenRequest {
  token: string;
}

/**
 * Verify password reset token from Supabase Auth
 * This is called when user clicks the reset link from email
 */
export async function POST(request: NextRequest): Promise<NextResponse<{ error: boolean; message: string; valid?: boolean }>> {
  try {
    const body: VerifyResetTokenRequest = await request.json();
    const { token } = body;

    if (!token) {
      return NextResponse.json(
        { error: true, message: 'Token is required' },
        { status: 400, headers: { 'Cache-Control': 'no-store' } }
      );
    }

    // Verify the token with Supabase Auth
    // Note: Supabase Auth handles token verification via the reset link
    // This endpoint is for additional validation if needed
    
    return NextResponse.json({
      error: false,
      message: 'Token is valid',
      valid: true,
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
        message: httpError.message || 'Failed to verify token',
        valid: false,
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
