// components/ui/BookingButton.tsx
import { LOCATIONS } from '@/lib/constants';

interface BookingButtonProps {
  label?: string;
  location?: 'main' | 'satellite' | 'both';
  className?: string;
}

export default function BookingButton({ label = 'Book Now', location = 'main', className = '' }: BookingButtonProps) {
  if (location === 'both') {
    return (
      <div className={`flex flex-col sm:flex-row gap-3 justify-center ${className}`}>
        {LOCATIONS.map((loc) => (
          <a
            key={loc.name}
            href={loc.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[var(--text)] text-white text-sm text-center rounded-sm hover:bg-[var(--muted)] transition-colors"
          >
            Book — {loc.name}
          </a>
        ))}
      </div>
    );
  }

  const loc = location === 'satellite' ? LOCATIONS[1] : LOCATIONS[0];
  return (
    <a
      href={loc.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block px-6 py-3 bg-[var(--text)] text-white text-sm rounded-sm hover:bg-[var(--muted)] transition-colors ${className}`}
    >
      {label}
    </a>
  );
}
