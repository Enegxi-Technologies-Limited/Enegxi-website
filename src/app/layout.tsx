import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { ConnectWidget } from '@/components/atoms/ConnectWidget';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '@/config/seo';

const inter = Inter({ subsets: ['latin'], display: 'swap' });
const DESCRIPTION =
  'Build in-demand technology skills with practical, hands-on training at Enegxi Institute in Akure, Nigeria.';
const DEFAULT_TITLE = 'Enegxi Institute | Tech Career Training & IT Solutions';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'tech training in Akure',
    'software engineering course Nigeria',
    'frontend development training',
    'backend engineering course',
    'IT solutions Akure',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DESCRIPTION,
    locale: 'en_NG',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: DEFAULT_TITLE,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Akure',
    addressRegion: 'Ondo',
    addressCountry: 'NG',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.className} antialiased text-slate-900 bg-white flex flex-col min-h-screen relative overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main className="grow w-full">{children}</main>
        <Footer />
        <ConnectWidget />
      </body>
    </html>
  );
}
