import { NextRequest, NextResponse } from 'next/server';
import UserAuthService from '@services/user.auth.service';
import type { User } from '@interfaces/user.interface';
import type { AuthResponse } from '@interfaces/auth.interface';

const userAuthService = new UserAuthService();

interface SignupRequest {
  email: string;
  password: string;
  name?: string;
  sex?: string;
  age?: number;
  phoneNumber?: string;
  idCardNumber?: string;
}

// Next.js 16 best practice: Use async request APIs
export async function POST(request: NextRequest): Promise<NextResponse<AuthResponse>> {
  try {
    const body: SignupRequest = await request.json();
    
    if (!body.password || body.password.length < 6) {
      return NextResponse.json<AuthResponse>(
        {
          error: true,
          message: 'Password must be at least 6 characters',
        },
        { 
          status: 400,
          headers: {
            'Cache-Control': 'no-store',
          },
        }
      );
    }

    // Use Supabase Auth for signup
    const { user, session } = await userAuthService.signup(body);

    const response = NextResponse.json<AuthResponse>({
      error: false,
      message: 'Account created successfully.',
      data: {
        ...user,
        token: session?.access_token,
      } as User & { token?: string },
    }, {
      headers: {
        'Cache-Control': 'no-store',
      },
    });

    // If we managed to create a session, set secure cookies (mirrors /login behavior)
    if (session?.access_token) {
      response.cookies.set('sb-access-token', session.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: session.expires_in || 60 * 60 * 24 * 7,
        path: '/',
      });

      // Backward compatibility
      response.cookies.set('auth-token', JSON.stringify({ user, token: session.access_token }), {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: session.expires_in || 60 * 60 * 24 * 7,
        path: '/',
      });
    }

    if (session?.refresh_token) {
      response.cookies.set('sb-refresh-token', session.refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
      });
    }

    return response;
  } catch (error: unknown) {
    const httpError = error as { status?: number; message?: string };
    return NextResponse.json<AuthResponse>(
      {
        error: true,
        message: httpError.message || 'Failed to create user',
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
