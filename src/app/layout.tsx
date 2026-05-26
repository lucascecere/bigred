import type { Metadata } from 'next'
import { Anton, DM_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { getLocalBusinessSchema, getWebsiteSchema } from '@/lib/schema'

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bigredmovingco.com'),
  title: 'Big Red Moving Company | Local Movers in Hingham, MA & South Shore',
  description:
    'Hingham-based local moving company serving the South Shore — Hingham, Cohasset, Scituate, Weymouth, Quincy, and surrounding towns. Family-owned and fully insured. Get a free quote today.',
  keywords: [
    'movers hingham ma',
    'south shore moving company',
    'local movers massachusetts',
    'hingham moving company',
    'moving company south shore',
  ],
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
    ],
    shortcut: '/favicon.ico',
    apple: { url: '/apple-icon.png', sizes: '180x180' },
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://bigredmovingco.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Big Red Moving Company',
    title: 'Big Red Moving Company | Local Movers in Hingham, MA',
    description: 'Hingham-based movers serving the South Shore. Family-owned and fully insured.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Big Red Moving Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Big Red Moving Company | Hingham, MA',
    description: 'Local movers based in Hingham. Family-owned and fully insured.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        {/* Meta Pixel — inline in <head> so it fires on every page load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','972159302374319');fbq('track','PageView');`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=972159302374319&ev=PageView&noscript=1" alt="" />
        </noscript>
        {/* Google Analytics — inline in <head> so scanners detect it in raw HTML */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-B9ZH91DVF1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-B9ZH91DVF1');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebsiteSchema()) }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
