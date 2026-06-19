import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import ContactForm from '@/components/ui/ContactForm';
import { SITE, LOCATIONS, HOURS, SOCIAL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact | Well Kneaded',
  description: 'Contact Well Kneaded Massage Therapies & Skincare in Decatur, GA. Call, email, or send a message online.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" subtitle="We'd love to hear from you." />
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-[var(--text)] mb-3">Get in Touch</h2>
              <p className="text-sm text-[var(--taupe)]">{SITE.phone}</p>
              <p className="text-sm text-[var(--taupe)]">{SITE.email}</p>
              <div className="flex gap-4 mt-3">
                <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--muted)] hover:underline">Facebook</a>
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--muted)] hover:underline">Instagram</a>
              </div>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-[var(--text)] mb-3">Locations</h2>
              <div className="space-y-4">
                {LOCATIONS.map((loc) => (
                  <div key={loc.name}>
                    <p className="text-sm font-medium text-[var(--text)]">{loc.name}</p>
                    <p className="text-sm text-[var(--taupe)]">{loc.address}</p>
                    <p className="text-sm text-[var(--taupe)]">{loc.city}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-[var(--text)] mb-3">Hours</h2>
              <div className="space-y-1.5">
                {HOURS.map(({ day, hours }) => (
                  <div key={day} className="flex gap-4 text-sm">
                    <span className="text-[var(--taupe)] w-24 flex-shrink-0">{day}</span>
                    <span className="text-[var(--text)]">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-[var(--text)] mb-6">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
