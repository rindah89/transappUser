import type { NextConfig } from 'next'
import withPWAInit from '@ducanh2912/next-pwa'

const nextConfig: NextConfig = {
  // distDir: './dist', // Commented out to use default .next directory
  
  // React Compiler - Next.js 16 feature for automatic memoization
  reactCompiler: true,
  
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60, // 1 minute minimum cache
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
    ],
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: [
      'react-bootstrap',
      'reactstrap',
      '@supabase/supabase-js',
    ],
  },
  
  // Turbopack configuration (Next.js 16+)
  // Empty config to explicitly use Turbopack instead of webpack
  turbopack: {},
  
  sassOptions: {
    includePaths: ['node_modules'],
    additionalData: `
      @function theme-color($key: "primary") {
        @if map-has-key($theme-colors, $key) {
          @return map-get($theme-colors, $key);
        }
        @return null;
      }
    `,
    silenceDeprecations: [
      'import',           // Suppress @import deprecation warnings from Bootstrap
      'global-builtin',   // Suppress global built-in function warnings
      'slash-div',        // Suppress division warnings (we've fixed custom files, but Bootstrap still uses it)
      'if-function',      // Suppress deprecated if() syntax warnings from Bootstrap
      'color-functions',  // Suppress deprecated color function warnings (red(), green(), blue()) from Bootstrap
    ],
  },
  
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  
  // Headers for better caching and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
        ],
      },
    ]
  },

  // Rewrites for API proxying (if needed for external API calls)
  // This allows proxying external API calls through Next.js API routes
  async rewrites() {
    // If NEXT_PUBLIC_API_URL is set, we can proxy through Next.js API routes
    // Otherwise, API calls go directly to Next.js API routes (recommended)
    const externalApiUrl = process.env.NEXT_PUBLIC_API_URL;
    
    if (externalApiUrl && externalApiUrl !== '') {
      return [
        {
          source: '/api/external/:path*',
          destination: `${externalApiUrl}/:path*`,
        },
      ];
    }
    
    return [];
  },
}

const withPWA = withPWAInit({
  dest: 'public',
  // Avoid service worker noise / caching pitfalls during `next dev`
  disable: process.env.NODE_ENV === 'development',
})

export default withPWA(nextConfig)
