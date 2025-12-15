# Supabase Auth Setup Guide

## ✅ Migration Complete

The application has been migrated to **Supabase Auth** for secure authentication.

## 🔧 Required Setup

### 1. **Supabase Dashboard Configuration**

#### Enable Email Authentication
1. Go to Supabase Dashboard → Authentication → Providers
2. Enable **Email** provider
3. Configure email settings:
   - **Enable email confirmations**: Optional (recommended for production)
   - **Secure email change**: Enable
   - **Double confirm email changes**: Enable (recommended)

#### Email Templates
1. Go to Authentication → Email Templates
2. Configure templates:
   - **Confirm signup**: Customize welcome email
   - **Reset password**: Customize reset email
   - **Magic link**: If using magic links

#### Site URL Configuration
1. Go to Authentication → URL Configuration
2. Set **Site URL**: `http://localhost:3000` (development) or your production URL
3. Add **Redirect URLs**:
   - `http://localhost:3000/user-reset`
   - `http://localhost:3000/**` (for development)
   - Your production URLs

### 2. **Database Schema Requirements**

Ensure your `users` table has:
- `id` column that matches Supabase Auth `auth.users.id`
- `email` column
- Other user profile fields

#### Recommended: Link users table to auth.users

```sql
-- Create a trigger to automatically create user record when auth user is created
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, created_at, updated_at)
  VALUES (NEW.id, NEW.email, NOW(), NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to run when new auth user is created
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

### 3. **Environment Variables**

Ensure these are set in `.env.local`:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# App URL (for password reset redirects)
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. **Password Requirements**

- Minimum 6 characters (enforced in code)
- Can be customized in Supabase Dashboard → Authentication → Password

## 🔄 Authentication Flows

### Signup Flow
1. User submits email + password
2. Supabase Auth creates auth user (password hashed automatically)
3. User record created in `users` table
4. Email verification sent (if enabled)
5. User can log in after verification

### Login Flow
1. User submits email + password
2. Supabase Auth verifies password
3. Session created with access + refresh tokens
4. Tokens stored in HttpOnly cookies
5. User data fetched from `users` table

### Password Reset Flow
1. User requests password reset
2. Supabase Auth sends email with reset link
3. User clicks link → redirected to `/user-reset`
4. User enters new password
5. Supabase Auth updates password (hashed automatically)
6. User can log in with new password

### Logout Flow
1. User clicks logout
2. Supabase Auth signs out (invalidates session)
3. Cookies cleared
4. LocalStorage cleared
5. Redirect to login

## 🔒 Security Features

### Implemented
- ✅ Password hashing (bcrypt via Supabase)
- ✅ Password verification (secure comparison)
- ✅ Session management (access + refresh tokens)
- ✅ HttpOnly cookies (XSS protection)
- ✅ Token refresh (automatic)
- ✅ Email verification (optional)
- ✅ Secure password reset (token-based)

### Best Practices
- ✅ Minimum password length enforced
- ✅ Secure cookie settings (httpOnly, secure, sameSite)
- ✅ Session validation in middleware
- ✅ Token expiration handling

## 📝 API Endpoints

### Authentication
- `POST /api/v1/users/signup` - Create account (Supabase Auth)
- `POST /api/v1/users/login` - Login (Supabase Auth)
- `POST /api/v1/users/logout` - Logout (Supabase Auth)
- `POST /api/v1/users/user-forgot` - Request password reset (Supabase Auth)
- `POST /api/v1/users/user-reset` - Reset password (Supabase Auth)
- `POST /api/v1/users/user-delete-account` - Delete account (Supabase Auth)

## 🧪 Testing

### Test Signup
```bash
curl -X POST http://localhost:3000/api/v1/users/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123","name":"Test User"}'
```

### Test Login
```bash
curl -X POST http://localhost:3000/api/v1/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

### Test Password Reset
```bash
curl -X POST http://localhost:3000/api/v1/users/user-forgot \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

## ⚠️ Important Notes

1. **Email Verification**: If enabled, users must verify email before logging in
2. **Password Reset**: Users receive email with reset link (not code)
3. **Session Tokens**: Stored in HttpOnly cookies (not accessible via JavaScript)
4. **Backward Compatibility**: Still supports localStorage for gradual migration

## 🎯 Next Steps

1. ✅ Configure Supabase Dashboard settings
2. ✅ Set up email templates
3. ✅ Test signup/login flows
4. ✅ Test password reset
5. ✅ Configure production URLs
6. ✅ Enable email verification (optional but recommended)

**Supabase Auth is now fully integrated!** 🎉
