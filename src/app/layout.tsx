import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
// Import CSS files first - Next.js 16 requires CSS imports at the top
// Order matters: vendors/base styles first, then custom styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import '../index.css'
import '../assets/css/vendors.css'
import '../assets/css/default.css'
import '../assets/css/main.css'
import '../assets/css/magnific-popup.css'
import '../assets/css/custom-animated.css'
import '../theme.scss' // SCSS imports should come after base CSS
import '../assets/css/style.css'
import '../assets/css/custom.css'
import '../assets/css/userstyle.css'
import Providers from './providers'

// Next.js 16 best practice: Static metadata export
export const metadata: Metadata = {
  applicationName: 'TransApp',
  title: {
    default: 'TransApp | Connect',
    template: '%s | TransApp',
  },
  description: 'Bus tickets on demand - Book your bus tickets easily and securely',
  manifest: '/manifest.json',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  keywords: ['bus tickets', 'transportation', 'booking', 'travel'],
  authors: [{ name: 'TransApp' }],
  creator: 'TransApp',
  publisher: 'TransApp',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'TransApp',
  },
  icons: {
    icon: [
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'TransApp | Connect',
    description: 'Bus tickets on demand - Book your bus tickets easily and securely',
    siteName: 'TransApp',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TransApp | Connect',
    description: 'Bus tickets on demand',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Resource hints - Next.js 16 best practice */}
        <link rel="preconnect" href="https://api.bookontransapp.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.bookontransapp.com" />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Nunito:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
        
        {/* Optimize third-party scripts with Next.js 16 Script component */}
        {process.env.NODE_ENV === 'production' && (
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js"
            id="google-analytics"
          />
        )}
      </body>
    </html>
  )
}
