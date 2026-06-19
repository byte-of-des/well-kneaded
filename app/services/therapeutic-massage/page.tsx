import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import BookingButton from '@/components/ui/BookingButton';

export const metadata: Metadata = { title: 'Therapeutic Massage | Well Kneaded' };

const MODALITIES = [
  { name: 'Swedish / Relaxation', desc: 'Long, flowing strokes to improve circulation, relieve tension, and promote relaxation.' },
  { name: 'Deep Tissue', desc: 'Targets deeper muscle layers and connective tissue for chronic tension in neck, back, and shoulders.' },
  { name: 'Neuromuscular Therapy', desc: 'Pressure applied to trigger points to release specific areas of skeletal muscle tension.' },
  { name: 'Hot Stone Therapy', desc: 'Smooth heated basalt stones relax muscles, increase circulation, and aid toxin removal.' },
  { name: 'Sports Massage', desc: 'Designed for active individuals — prevents injury, enhances performance, and uses PNF stretching.' },
  { name: 'Pregnancy / Prenatal', desc: 'Customized sessions to reduce stress, decrease swelling, and relieve aches in expectant mothers.' },
  { name: 'Aromatherapy', desc: 'Incorporates essential oils for relaxation, energy, stress reduction, or emotional balance.' },
  { name: 'Table Top Thai', desc: 'Combines stretching with deep rhythmic pressing — a blend of massage and assisted flexibility.' },
  { name: 'Reflexology', desc: 'Pressure applied to specific foot and hand points corresponding to organs and body systems.' },
  { name: 'Manual Lymphatic Drainage (MLD)', desc: 'Very light pressure to flush toxins and support the lymphatic system. Often done in a series.' },
  { name: 'Cupping', desc: 'Silicone cups create negative pressure to loosen muscles, reduce pain, and improve circulation.' },
];

const PRICING_NOTES = [
  '30, 60, or 90-minute sessions available',
  '60-minute session: $90 | 90-minute session: $135',
  'Monthly memberships available — contact us for rates',
  'SPOT Packages: 5, 8, or 12 sessions prepaid',
  'HSA / FSA cards accepted',
  'Physician referrals receive approved discounted rates',
];

export default function TherapeuticMassagePage() {
  return (
    <>
      <PageHero title="Therapeutic Massage" subtitle="Specializing in post-surgery relief, injuries, and chronic conditions." />
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)] mb-8">Modalities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MODALITIES.map(({ name, desc }) => (
                <div key={name} className="bg-[var(--surface)] p-6 rounded-sm">
                  <h3 className="font-medium text-[var(--text)] mb-2">{name}</h3>
                  <p className="text-sm text-[var(--taupe)] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)] mb-6">Rates & Options</h2>
            <ul className="space-y-3">
              {PRICING_NOTES.map((note) => (
                <li key={note} className="flex items-start gap-3 text-sm text-[var(--taupe)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--muted)] mt-1.5 flex-shrink-0" />
                  {note}
                </li>
              ))}
            </ul>
          </div>
          <BookingButton label="Book a Session" location="both" />
        </div>
      </section>
    </>
  );
}
