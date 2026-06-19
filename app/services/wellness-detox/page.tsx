import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import BookingButton from '@/components/ui/BookingButton';

export const metadata: Metadata = { title: 'Wellness & Detox | Well Kneaded' };

const SERVICES = [
  { name: 'Ionic Foot Detox', duration: '30 min', desc: 'Facilitates body alkalization through ionization, removing free radicals and increasing pH levels. Continues alkalizing for up to 48 hours post-treatment.' },
  { name: 'Infrared Sauna', duration: '30 or 45 min · $30 add-on', desc: 'Eliminates 7× more toxins than traditional saunas. Reduces inflammation, improves circulation, burns calories, and relieves muscle and joint pain.' },
  { name: 'Red Light Therapy', duration: '$30 add-on', desc: 'Non-invasive, painless treatment using low-intensity red and near-infrared light. Addresses acne, hair growth, wound healing, inflammation, and collagen production.' },
  { name: 'Yoni Steams', duration: 'By appointment', desc: 'Herbal vaginal steaming with mugwort, rosemary, wormwood, and basil. Supports pH balance, menstrual regulation, fertility, and postpartum recovery.' },
  { name: 'Whole Foods Supplements', duration: 'Ongoing', desc: 'Nutritional supplements from whole food sources to address deficiencies and support overall health.' },
];

export default function WellnessDetoxPage() {
  return (
    <>
      <PageHero title="Wellness & Detox" subtitle="Up to 85% of all illness is created by toxins. We help your body restore balance." />
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {SERVICES.map(({ name, duration, desc }) => (
            <div key={name} className="bg-[var(--surface)] p-8 rounded-sm">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)]">{name}</h2>
                <span className="text-xs text-[var(--muted)] uppercase tracking-wide mt-1 sm:mt-0">{duration}</span>
              </div>
              <p className="text-sm text-[var(--taupe)] leading-relaxed">{desc}</p>
            </div>
          ))}
          <BookingButton label="Book a Wellness Session" location="both" />
        </div>
      </section>
    </>
  );
}
