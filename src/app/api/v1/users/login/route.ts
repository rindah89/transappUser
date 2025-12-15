import { NextRequest, NextResponse } from 'next/server';
import UserAuthService from '@services/user.auth.service';
import type { User } from '@interfaces/user.interface';
import type { AuthResponse } from '@interfaces/auth.interface';

const userAuthService = new UserAuthService();

interface LoginRequest {
  email: string;
  password: string;
}

// Next.js 16 best practice: Use async request APIs
export async function POST(request: NextRequest): Promise<NextResponse<AuthResponse>> {
  try {
    const body: LoginRequest = await request.json();
    
    if (!body.password) {
      return NextResponse.json<AuthResponse>(
        {
          error: true,
          message: 'Password is required',
        },
        { 
          status: 400,
          headers: {
            'Cache-Control': 'no-store',
          },
        }
      );
    }

    // Use Supabase Auth for login
    const { user, session } = await userAuthService.login(body);
    
    if (!session) {
      return NextResponse.json<AuthResponse>(
        {
          error: true,
          message: 'Failed to create session',
        },
        { 
          status: 500,
          headers: {
            'Cache-Control': 'no-store',
          },
        }
      );
    }

    const response = NextResponse.json<AuthResponse>({
      error: false,
      message: 'Login successful',
      data: {
        ...user,
        token: session.access_token,
      } as User & { token?: string },
    }, {
      headers: {
        'Cache-Control': 'no-store',
      },
    });

    // Set secure cookies for Supabase Auth session
    // (middleware reads these on refresh; localStorage is not available at the edge)
    if (session.access_token) {
      response.cookies.set('sb-access-token', session.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: session.expires_in || 60 * 60 * 24 * 7, // session expiry or 7 days
        path: '/',
      });
    }

    if (session.refresh_token) {
      response.cookies.set('sb-refresh-token', session.refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 30, // 30 days for refresh token
        path: '/',
      });
    }

    // Backward compatibility for legacy middleware / APIs
    if (session.access_token) {
      response.cookies.set('auth-token', JSON.stringify({ user, token: session.access_token }), {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: session.expires_in || 60 * 60 * 24 * 7,
        path: '/',
      });
    }

    return response;
  } catch (error: unknown) {
    const httpError = error as { status?: number; message?: string };
    return NextResponse.json<AuthResponse>(
      {
        error: true,
        message: httpError.message || 'Login failed',
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
