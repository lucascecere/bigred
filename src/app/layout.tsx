import type { Metadata } from 'next'
import { Anton, DM_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { getLocalBusinessSchema } from '@/lib/schema'

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
    'Hingham-based local moving company serving the South Shore — Hingham, Cohasset, Scituate, Weymouth, Quincy, and surrounding towns. Family-owned, licensed, insured. Get a free quote today.',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Big Red Moving Company',
    title: 'Big Red Moving Company | Local Movers in Hingham, MA',
    description: 'Hingham-based movers serving the South Shore. Family-owned, licensed & insured.',
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
    description: 'Local movers based in Hingham. Family-owned, licensed & insured.',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
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
