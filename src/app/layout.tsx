import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { ConnectWidget } from '@/components/atoms/ConnectWidget';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://enegxi.com'),
  title: {
    default: 'Enegxi Institute | Tech Career Training & IT Solutions',
    template: '%s | Enegxi Institute',
  },
  description:
    'Build in-demand technology skills with practical, hands-on training at Enegxi Institute in Akure, Nigeria.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.className} antialiased text-slate-900 bg-white flex flex-col min-h-screen relative overflow-x-hidden`}>
        <Navbar />
        <main className="grow w-full">{children}</main>
        <Footer />
        <ConnectWidget />
      </body>
    </html>
  );
}
