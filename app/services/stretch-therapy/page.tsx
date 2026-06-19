import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import BookingButton from '@/components/ui/BookingButton';

export const metadata: Metadata = {
  title: 'Stretch-n-Flex Therapy | Well Kneaded',
  description: '1-on-1 assisted stretching sessions using PNF and active isolated techniques. Increase flexibility and reduce pain in Decatur, GA.',
};

export default function StretchTherapyPage() {
  return (
    <>
      <PageHero title="Stretch-n-Flex Therapy" subtitle="1-on-1 assisted stretching to increase flexibility and reduce pain." />
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          <p className="text-[var(--taupe)] leading-relaxed">
            A customized 1-on-1 assisted stretch session that incorporates active isolated stretching, Proprioceptive Neuromuscular Facilitation (PNF), static and dynamic stretching to increase range of motion and maximize soft tissue movement throughout the body.
          </p>
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)] mb-4">Benefits</h2>
            <ul className="space-y-2">
              {['Increase joint range of motion', 'Reduce pain and muscle discomfort', 'Enhance flexibility', 'Correct muscle imbalances', 'Improve athletic performance'].map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-[var(--taupe)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--muted)] flex-shrink-0" />{b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)] mb-4">Packages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['4 Sessions', '6 Sessions', '8 Sessions'].map((pkg) => (
                <div key={pkg} className="bg-[var(--surface)] p-6 text-center rounded-sm">
                  <p className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-[var(--text)]">{pkg}</p>
                  <p className="text-xs text-[var(--taupe)] mt-1">30 or 60-minute sessions</p>
                </div>
              ))}
            </div>
          </div>
          <BookingButton label="Book a Stretch Session" location="both" />
        </div>
      </section>
    </>
  );
}
