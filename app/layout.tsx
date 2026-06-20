import type { Metadata } from 'next';
import { Fraunces, Nunito } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { LOCATIONS } from '@/lib/constants';

const cormorant = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const inter = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Well Kneaded Massage Therapies & Skincare | Decatur, GA',
  description: 'Holistic massage therapy, skincare, and pain management in Decatur, GA. Therapeutic massage, stretch therapy, wellness & detox. Book online today.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-[family-name:var(--font-inter)]">
        <Navigation />
        <main className="pb-20 lg:pb-0">{children}</main>
        <Footer />
        {/* Sticky mobile Book Now */}
        <a
          href={LOCATIONS[0].bookingUrl!}
          target="_blank"
          rel="noopener noreferrer"
          className="lg:hidden fixed bottom-5 right-5 z-40 px-5 py-3 bg-[var(--text)] text-white text-sm rounded-full shadow-lg hover:bg-[var(--muted)] transition-colors"
        >
          Book Now
        </a>
      </body>
    </html>
  );
}
