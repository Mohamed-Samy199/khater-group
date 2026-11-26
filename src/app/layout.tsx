import type { Metadata, Viewport } from 'next';
import { Inter_Tight } from 'next/font/google';
import type { ReactNode } from 'react';
import JsonLd from '@/components/atoms/JsonLd';
import Footer from '@/components/organisms/layout/Footer';
import LayoutChrome from '@/components/organisms/layout/LayoutChrome';
import Navbar from '@/components/organisms/layout/Navbar';
import {
  DEFAULT_OG_IMAGE,
  organizationJsonLd,
  SITE_NAME,
  SITE_URL,
} from '@/lib/seo';
import './globals.css';

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700'],
  variable: '--font-inter-tight',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#000000',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Khater Group — Built across every environment.',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Khater Group is an integrated solutions company across sports, landscapes, play, aquatics, and technology — serving Egypt, Saudi Arabia, and MENA since 1987.',
  keywords: [
    'Khater Group',
    'Khater Sports',
    'Khater Aquatics',
    'Khater Tech',
    'Khater Scapes',
    'Khater Play',
    'sports infrastructure Egypt',
    'sports infrastructure Saudi Arabia',
    'Olympic swimming pools',
    'landscape contractors MENA',
  ],
  icons: {
    icon: '/favicon.png',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: SITE_NAME,
    title: 'Khater Group — Built across every environment.',
    description:
      'Integrated engineering across Khater Sports, Khater Play, Khater Scapes, Khater Tech, and Khater Aquatics.',
    images: [{ url: DEFAULT_OG_IMAGE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khater Group — Built across every environment.',
    description:
      'Integrated engineering across sports, play, landscapes, arena electronics, and aquatics.',
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={interTight.variable}>
      <body>
        <JsonLd data={organizationJsonLd()} />
        <LayoutChrome navbar={<Navbar />} footer={<Footer />}>
          {children}
        </LayoutChrome>
      </body>
    </html>
  );
}
