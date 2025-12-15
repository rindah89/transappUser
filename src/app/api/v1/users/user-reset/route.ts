import { NextRequest, NextResponse } from 'next/server';
// Supabase Auth recovery links handle password resets.

// Next.js 16 best practice: Use async request APIs
export async function POST(request: NextRequest): Promise<NextResponse<{ error: boolean; message: string }>> {
  try {
    // Supabase password resets are handled via recovery links.
    // This legacy endpoint is deprecated because it is not safe to reset by email without a token.
    await request.json().catch(() => null);
    return NextResponse.json(
      {
        error: true,
        message:
          'This endpoint is deprecated. Please use the password reset link sent to your email (Supabase Auth recovery).',
      },
      { status: 410, headers: { 'Cache-Control': 'no-store' } }
    );
  } catch (error: unknown) {
    const httpError = error as { status?: number; message?: string };
    return NextResponse.json(
      {
        error: true,
        message: httpError.message || 'Failed to reset password',
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
