import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import ContactForm from '@/components/ui/ContactForm';

export const metadata: Metadata = {
  title: 'Classes | Well Kneaded',
  description: 'CPR certification classes, educational workshops, and wellness events at Well Kneaded in Decatur, GA.',
};

const CPR_PRICING = [
  { level: 'Healthcare Professionals (BLS)', price: '$85', note: 'Book sold separately for $15' },
  { level: 'Family & Friends CPR', price: '$55/person', note: 'Groups of 4+. Book sold separately for $5' },
  { level: 'CPR (Adult & Child)', price: '$55', note: 'Massage/Bodywork Student pricing. Book sold separately for $5' },
  { level: 'Babysitter / Youth CPR (ages 8+)', price: '$45', note: 'Book sold separately for $5' },
];

export default function ClassesPage() {
  return (
    <>
      <PageHero title="Classes" subtitle="Educational events, CPR certification, and workshops throughout the year." />
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)] mb-2">CPR Certification</h2>
            <p className="text-sm text-[var(--taupe)] mb-6">Ongoing monthly classes. Contact us for current dates.</p>
            <div className="space-y-3">
              {CPR_PRICING.map(({ level, price, note }) => (
                <div key={level} className="bg-[var(--surface)] p-5 rounded-sm flex justify-between items-start gap-4">
                  <div>
                    <p className="text-sm font-medium text-[var(--text)]">{level}</p>
                    <p className="text-xs text-[var(--taupe)] mt-0.5">{note}</p>
                  </div>
                  <span className="text-sm font-medium text-[var(--muted)] flex-shrink-0">{price}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)] mb-6">Sign Up for a Class</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
