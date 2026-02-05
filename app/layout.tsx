import type { Metadata } from 'next';
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-heading' });
const sourceSans = Source_Sans_3({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'CPOCC | Citizens Park Office & Conference Center',
  description: 'A professional home for business, events, and community growth in Aiken.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className={`bg-brand-neutral text-slate-900 ${sourceSans.className}`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
