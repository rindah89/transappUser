import { NextRequest, NextResponse } from 'next/server';
import UserAuthService from '@services/user.auth.service';

const userAuthService = new UserAuthService();

interface ForgotPasswordRequest {
  email: string;
}

// Next.js 16 best practice: Use async request APIs
export async function POST(request: NextRequest): Promise<NextResponse<{ error: boolean; message: string }>> {
  try {
    const body: ForgotPasswordRequest = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: true, message: 'Email is required' },
        { status: 400, headers: { 'Cache-Control': 'no-store' } }
      );
    }

    // Use Supabase Auth for password reset (build redirect URL dynamically)
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const redirectTo = `${request.nextUrl.origin}${basePath}/user-reset`;
    const result = await userAuthService.resetPassword(email, redirectTo);

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
        message: httpError.message || 'Failed to process forgot password',
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
