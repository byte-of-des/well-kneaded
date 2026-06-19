import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = { title: 'Corporate Chair Massage | Well Kneaded' };

const BENEFITS = [
  { title: 'Decreases Employee Stress', desc: 'Stress-related turnover and absenteeism cost companies an estimated $200 billion annually. Massage lowers anxiety and hostility.' },
  { title: 'Increases Productivity', desc: 'Revitalized minds become more productive. Your team leaves energized and focused.' },
  { title: 'Keeps Employees Healthy', desc: 'Reduces blood pressure, relieves arthritis, and improves neck/back pain from excessive sitting and computer use.' },
  { title: 'Boosts Morale', desc: 'Position massage as a meaningful employee benefit. 90% of employees will participate in a chair massage program.' },
  { title: 'Cost-Efficient', desc: 'Pricing begins as little as $15 per employee — often cheaper than providing free coffee.' },
  { title: 'Same-Day Results', desc: 'Noticeable results that last for weeks, delivered in a single session.' },
];

export default function CorporatePage() {
  return (
    <>
      <PageHero title="Corporate Chair Massage" subtitle="Healthy employees are productive employees." />
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BENEFITS.map(({ title, desc }) => (
              <div key={title} className="bg-[var(--surface)] p-6 rounded-sm">
                <h2 className="font-medium text-[var(--text)] mb-2">{title}</h2>
                <p className="text-sm text-[var(--taupe)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center bg-[var(--surface)] py-12 px-8 rounded-sm">
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)] mb-4">Get a Quote</h2>
            <p className="text-[var(--taupe)] mb-6">Starting at $15 per employee. Packages available for any team size or event.</p>
            <a href={`tel:${SITE.phone.replace(/\D/g, '')}`} className="inline-block px-6 py-3 bg-[var(--text)] text-white text-sm rounded-sm hover:bg-[var(--muted)] transition-colors">
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
