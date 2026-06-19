import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Nutrition Response Testing™ | Well Kneaded',
  description: 'Non-invasive nutrition testing to identify underlying health causes. Free consultation available in Decatur, GA.',
};

const BENEFITS = [
  'Skin issue resolution', 'Reduced or eliminated headaches and migraines',
  'Weight loss', 'Vision restoration', 'Enhanced sleep quality',
  'Improved emotional wellbeing', 'Increased energy levels',
  'Easier menstrual cycles', 'Chronic neck and knee pain relief',
  'Seizure cessation', 'Digestive problem correction',
];

export default function NRTPage() {
  return (
    <>
      <PageHero title="Nutrition Response Testing™" subtitle="A non-invasive system for determining the underlying causes of ill health." />
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)] mb-4">What is NRT?</h2>
            <p className="text-[var(--taupe)] leading-relaxed">
              Nutrition Response Testing™, developed by Dr. Freddy Ulan, DC, is a non-invasive system of analyzing the body to determine underlying causes of ill or non-optimal health through neurological reflex testing. Based on results, we recommend personalized whole-food or homeopathic supplements to support natural healing.
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)] mb-4">Reported Client Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {BENEFITS.map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-[var(--taupe)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--muted)] flex-shrink-0" />{b}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[var(--surface)] p-8 rounded-sm text-center">
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)] mb-4">Free Consultation</h2>
            <p className="text-sm text-[var(--taupe)] mb-6">Contact our office for a free Nutrition Response Testing consultation today.</p>
            <a href={`tel:${SITE.phone.replace(/\D/g, '')}`} className="inline-block px-6 py-3 bg-[var(--text)] text-white text-sm rounded-sm hover:bg-[var(--muted)] transition-colors">
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
