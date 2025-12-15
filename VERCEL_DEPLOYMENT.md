# Vercel Deployment Guide for TransApp User App

## ✅ Fixed Issues

### 1. Root Route Configuration
- **Issue**: Missing root `page.tsx` file causing 404 errors
- **Fix**: Created `src/app/page.tsx` that renders the home page
- **Location**: `/Users/remyngwanyam/Desktop/transapp/transapp-user-master/src/app/page.tsx`

### 2. Vercel Configuration
- **Issue**: `vercel.json` was missing framework specification
- **Fix**: Added proper Vercel configuration with Next.js framework detection
- **Location**: `/Users/remyngwanyam/Desktop/transapp/transapp-user-master/vercel.json`

## 📋 Required Environment Variables

Set these in your Vercel project settings (Settings → Environment Variables):

### Required Variables

```env
# Supabase Configuration (REQUIRED)
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
# OR use publishable key
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-supabase-publishable-key

# Service Role Key (REQUIRED for API routes)
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Application URL (REQUIRED)
NEXT_PUBLIC_APP_URL=https://your-vercel-app.vercel.app

# Optional: External API URL (if using external API)
# NEXT_PUBLIC_API_URL=https://api.bookontransapp.com

# Optional: Socket.io URL (for real-time features)
# NEXT_PUBLIC_SOCKET_URL=https://api.bookontransapp.com
```

### How to Set Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable for:
   - **Production** (required)
   - **Preview** (optional, for pull requests)
   - **Development** (optional, for local dev)

## 🚀 Deployment Steps

### 1. Connect Repository to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **Add New Project**
3. Import your Git repository
4. Vercel will auto-detect Next.js

### 2. Configure Build Settings

Vercel should auto-detect these settings, but verify:

- **Framework Preset**: Next.js
- **Root Directory**: `transapp-user-master` (if deploying from monorepo)
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default, don't change)
- **Install Command**: `npm install` (default)

### 3. Set Environment Variables

Add all required environment variables (see above)

### 4. Deploy

1. Click **Deploy**
2. Wait for build to complete
3. Check deployment logs for any errors

## 🔧 Configuration Files

### vercel.json

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "rewrites": [
    {
      "source": "/admin",
      "destination": "https://YOUR_ADMIN_APP_URL/admin"
    },
    {
      "source": "/admin/:path*",
      "destination": "https://YOUR_ADMIN_APP_URL/admin/:path*"
    }
  ]
}
```

**Important**: Replace `YOUR_ADMIN_APP_URL` with your actual admin app Vercel URL if you have one.

### next.config.ts

The configuration is already optimized for Vercel:
- ✅ Uses default `.next` directory (Vercel-compatible)
- ✅ PWA support with `@ducanh2912/next-pwa`
- ✅ Image optimization configured
- ✅ Security headers configured
- ✅ API rewrites configured

## 🐛 Troubleshooting

### 404 Errors

**Possible Causes:**
1. Missing root `page.tsx` - ✅ Fixed
2. Incorrect basePath configuration
3. Missing environment variables
4. Build errors

**Solutions:**
- Check deployment logs in Vercel dashboard
- Verify all environment variables are set
- Ensure `NEXT_PUBLIC_APP_URL` matches your Vercel deployment URL
- Check that build completes successfully

### Build Failures

**Common Issues:**
1. Missing dependencies
2. TypeScript errors
3. Environment variable errors

**Solutions:**
- Run `npm run build` locally first to catch errors
- Check build logs in Vercel dashboard
- Ensure all required environment variables are set

### Runtime Errors

**Common Issues:**
1. Supabase connection errors
2. Missing API routes
3. Authentication issues

**Solutions:**
- Verify Supabase environment variables are correct
- Check Supabase project is active
- Review API route logs in Vercel Functions tab

## 📝 Post-Deployment Checklist

- [ ] All environment variables set correctly
- [ ] Build completes successfully
- [ ] Root route (`/`) loads correctly
- [ ] Authentication works (login/signup)
- [ ] API routes respond correctly
- [ ] Supabase connection works
- [ ] Images load correctly
- [ ] PWA features work (if enabled)

## 🔗 Useful Links

- [Vercel Next.js Documentation](https://vercel.com/docs/frameworks/nextjs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)
- [Supabase Environment Variables](https://supabase.com/docs/guides/getting-started/local-development#environment-variables)

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Check Vercel Functions logs
3. Review browser console for client-side errors
4. Verify all environment variables are set correctly

