import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-cormorant',
});

const inter = Inter({
  subsets: ['latin'],
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
