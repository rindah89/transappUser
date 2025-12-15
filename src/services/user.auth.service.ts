import { supabaseAdmin } from '@databases/supabase';
import { HttpException } from '../exceptions/HttpException';
import { isEmpty } from '../utils/util';
import type { UserInsert, User } from '../interfaces/user.interface';

class UserAuthService {
  /**
   * Sign up a new user using Supabase Auth
   * Creates auth user and then creates user record in users table
   */
  public async signup(userData: {
    email: string;
    password: string;
    name?: string;
    sex?: string;
    age?: number;
    phoneNumber?: string;
    idCardNumber?: string;
  }): Promise<{ user: User; session: any }> {
    if (isEmpty(userData)) throw new HttpException(400, 'Invalid credentials!');
    if (!userData.password || userData.password.length < 6) {
      throw new HttpException(400, 'Password must be at least 6 characters');
    }

    // Step 1: Create auth user using Supabase Admin API
    // We confirm the email immediately so the user can be logged in right after signup.
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email: userData.email,
      password: userData.password,
      email_confirm: true,
      user_metadata: {
        name: userData.name,
        phone_number: userData.phoneNumber,
      },
    });

    if (authError) {
      if (authError.message.includes('already registered')) {
        throw new HttpException(409, 'This email already exists');
      }
      throw new HttpException(500, authError.message);
    }

    if (!authData.user) {
      throw new HttpException(500, 'Failed to create auth user');
    }

    // Step 2: Create user record in users table with auth user ID
    const userInsert: UserInsert = {
      auth_id: authData.user.id, // Link to Supabase Auth user UUID
      email: userData.email,
      name: userData.name || null,
      sex: userData.sex || null,
      age: userData.age || null,
      phone_number: userData.phoneNumber || null,
      id_card_number: userData.idCardNumber || null,
    };

    const { data: newUser, error: insertError } = await supabaseAdmin
      .from('users')
      .insert(userInsert)
      .select()
      .single();

    if (insertError) {
      // If user table insert fails, try to clean up auth user
      if (authData.user) {
        await supabaseAdmin.auth.admin.deleteUser(authData.user.id);
      }
      
      if (insertError.code === '23505') {
        throw new HttpException(409, 'This email already exists');
      }
      throw new HttpException(500, insertError.message);
    }

    if (!newUser) {
      throw new HttpException(500, 'Failed to create user');
    }

    // Step 3: Create a session (so the frontend doesn't need to make a second "login" request)
    // Note: This should succeed because we confirm the email immediately above.
    const { data: signInData, error: signInError } = await supabaseAdmin.auth.signInWithPassword({
      email: userData.email,
      password: userData.password,
    });

    return {
      user: newUser,
      session: signInError ? null : signInData.session,
    };
  }

  /**
   * Login using Supabase Auth
   * Validates password and returns user with session
   */
  public async login(userData: { email: string; password: string }): Promise<{ user: User; session: any }> {
    if (isEmpty(userData)) throw new HttpException(400, 'Fields cannot be empty!');
    if (!userData.password) {
      throw new HttpException(400, 'Password is required');
    }

    // Use Supabase Auth to sign in (handles password verification)
    const { data: authData, error: authError } = await supabaseAdmin.auth.signInWithPassword({
      email: userData.email,
      password: userData.password,
    });

    if (authError) {
      if (authError.message.includes('Invalid login credentials')) {
        throw new HttpException(401, 'Invalid email or password');
      }
      if (authError.message.includes('Email not confirmed')) {
        throw new HttpException(403, 'Please verify your email before logging in');
      }
      throw new HttpException(500, authError.message);
    }

    if (!authData.user || !authData.session) {
      throw new HttpException(401, 'Invalid email or password');
    }

    // Get user record from users table
    const { data: user, error: userError } = await supabaseAdmin
      .from('users')
      .select('*')
      .eq('auth_id', authData.user.id)
      .single();

    if (userError) {
      throw new HttpException(500, 'Failed to fetch user data');
    }

    if (!user) {
      throw new HttpException(404, 'User not found');
    }

    return {
      user,
      session: authData.session,
    };
  }

  /**
   * Delete account using Supabase Auth
   * Deletes both auth user and user record
   */
  public async deleteAccount(userId: number): Promise<{ message: string }> {
    if (isEmpty(userId)) throw new HttpException(400, 'User ID is required');

    // Fetch auth_id before deleting the row
    const { data: userRow, error: fetchError } = await supabaseAdmin
      .from('users')
      .select('auth_id')
      .eq('id', userId)
      .single();

    if (fetchError) {
      throw new HttpException(500, fetchError.message);
    }

    // Delete user record from users table
    const { error: deleteError } = await supabaseAdmin
      .from('users')
      .delete()
      .eq('id', userId);

    if (deleteError) {
      throw new HttpException(500, deleteError.message);
    }

    // Delete auth user (if linked)
    if (userRow?.auth_id) {
      const { error: authDeleteError } = await supabaseAdmin.auth.admin.deleteUser(userRow.auth_id);
      if (authDeleteError) {
        throw new HttpException(500, authDeleteError.message);
      }
    }

    return { message: 'Account deleted successfully' };
  }

  /**
   * Reset password using Supabase Auth
   * Sends password reset email
   */
  public async resetPassword(email: string, redirectTo: string): Promise<{ message: string }> {
    if (isEmpty(email)) throw new HttpException(400, 'Email is required');

    const { error } = await supabaseAdmin.auth.resetPasswordForEmail(email, {
      redirectTo,
    });

    if (error) {
      throw new HttpException(500, error.message);
    }

    return { message: 'Password reset email sent' };
  }

  /**
   * Update password using Supabase Auth
   * Requires valid session token
   */
  public async updatePassword(userId: string, newPassword: string): Promise<{ message: string }> {
    if (isEmpty(userId) || isEmpty(newPassword)) {
      throw new HttpException(400, 'User ID and password are required');
    }

    if (newPassword.length < 6) {
      throw new HttpException(400, 'Password must be at least 6 characters');
    }

    const { error } = await supabaseAdmin.auth.admin.updateUserById(userId, {
      password: newPassword,
    });

    if (error) {
      throw new HttpException(500, error.message);
    }

    return { message: 'Password updated successfully' };
  }

  /**
   * Get user by ID
   */
  public async getUserByAuthId(authId: string): Promise<User> {
    if (isEmpty(authId)) throw new HttpException(400, 'Auth ID is required');

    const { data: user, error } = await supabaseAdmin
      .from('users')
      .select('*')
      .eq('auth_id', authId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        throw new HttpException(404, 'User not found');
      }
      throw new HttpException(500, error.message);
    }

    if (!user) {
      throw new HttpException(404, 'User not found');
    }

    return user;
  }

  /**
   * Verify session token and get user
   */
  public async verifySession(accessToken: string): Promise<{ user: User; session: any }> {
    if (isEmpty(accessToken)) throw new HttpException(401, 'Access token is required');

    const { data: sessionData, error } = await supabaseAdmin.auth.getUser(accessToken);

    if (error || !sessionData.user) {
      throw new HttpException(401, 'Invalid or expired token');
    }

    const user = await this.getUserByAuthId(sessionData.user.id);

    return {
      user,
      session: sessionData,
    };
  }
}

export default UserAuthService;
