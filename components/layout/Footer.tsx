// components/layout/Footer.tsx
import Link from 'next/link';
import { SITE, LOCATIONS, HOURS, SOCIAL } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[var(--text)] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="font-[family-name:var(--font-cormorant)] text-xl mb-4">Well Kneaded</h3>
          <p className="text-sm text-white/70 leading-relaxed">
            Holistic massage therapies, skincare, and pain management solutions in Decatur, GA. Established {SITE.founded}.
          </p>
          <div className="flex gap-4 mt-6">
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm transition-colors">Facebook</a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm transition-colors">Instagram</a>
          </div>
        </div>

        {/* Locations */}
        <div>
          <h4 className="text-sm font-medium uppercase tracking-widest text-white/50 mb-4">Locations</h4>
          <div className="space-y-4">
            {LOCATIONS.map((loc) => (
              <div key={loc.name}>
                <p className="text-sm font-medium">{loc.name}</p>
                <p className="text-sm text-white/60">{loc.address}</p>
                <p className="text-sm text-white/60">{loc.city}</p>
              </div>
            ))}
            <div className="pt-2 text-sm text-white/60 space-y-0.5">
              <p>{SITE.phone}</p>
              <p>{SITE.email}</p>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-sm font-medium uppercase tracking-widest text-white/50 mb-4">Hours</h4>
          <div className="space-y-1.5">
            {HOURS.map(({ day, hours }) => (
              <div key={day} className="flex justify-between text-sm">
                <span className="text-white/60 w-28">{day}</span>
                <span className="text-white/90">{hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-xs text-white/40">
        <span>© {SITE.founded}–{new Date().getFullYear()} {SITE.name}</span>
        <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
      </div>
    </footer>
  );
}
