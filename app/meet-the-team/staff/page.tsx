import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import BookingButton from '@/components/ui/BookingButton';

export const metadata: Metadata = {
  title: 'Our Staff | Well Kneaded',
  description: 'Meet the licensed massage therapists and estheticians behind Well Kneaded in Decatur, GA. Every practitioner is trained, credentialed, and genuinely invested in your results.',
};

const THERAPISTS = [
  {
    initial: 'A',
    name: 'Angelina',
    title: 'Licensed Massage Therapist',
    bio: 'Angelina brings focused expertise in deep tissue and therapeutic massage for clients managing chronic pain, muscular tension, and sports recovery. Her approach is methodical and pressure-responsive — she works with your tissue, not against it, to achieve meaningful, lasting relief.',
    specialties: ['Deep Tissue', 'Therapeutic Massage', 'Chronic Pain', 'Sports Recovery'],
  },
  {
    initial: 'J',
    name: 'Jocelyn',
    title: 'Licensed Massage Therapist',
    bio: 'Jocelyn specializes in Swedish massage, prenatal bodywork, and reflexology — modalities rooted in relaxation, nervous system regulation, and maternal health. Her sessions carry a calm, attentive quality that clients consistently describe as restorative on every level.',
    specialties: ['Swedish Massage', 'Prenatal', 'Reflexology', 'Relaxation'],
  },
];

export default function StaffPage() {
  return (
    <>
      <PageHero title="Meet Our Staff" subtitle="Skilled hands, individualized care." />
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">

          <p className="text-[var(--taupe)] leading-relaxed max-w-2xl">
            Every member of the Well Kneaded team is licensed, trained, and genuinely invested in your results. Our therapists bring diverse training and genuine expertise — every session is tailored to what your body actually needs.
          </p>

          {/* Therapists */}
          <div>
            <h2 className="sr-only">Licensed Massage Therapists</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {THERAPISTS.map((t) => (
                <div key={t.name} className="bg-[var(--surface)] p-8 rounded-sm space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-[var(--text)] flex items-center justify-center flex-shrink-0">
                      <span className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-white">{t.initial}</span>
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-[var(--text)]">{t.name}</h3>
                      <p className="text-xs text-[var(--taupe)]">{t.title}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--taupe)] leading-relaxed">{t.bio}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {t.specialties.map((s) => (
                      <span key={s} className="text-xs text-[var(--taupe)] bg-[var(--bg)] border border-[var(--surface)] px-2 py-0.5 rounded-full">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Urban Estheti Partnership */}
          <div className="bg-[var(--bg)] border border-[var(--surface)] p-8 rounded-sm">
            <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-2">Skin Care &amp; Esthetics</p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)] mb-4">
              In partnership with The Urban Estheti.
            </h2>
            <div className="space-y-3 text-sm text-[var(--taupe)] leading-relaxed mb-6">
              <p>
                Well Kneaded is proud to host The Urban Estheti — a collective of licensed estheticians whose work meets the same standard of clinical care and personalized attention that defines everything we do. Their presence on-site means you can address both body and skin in a single visit, with practitioners who communicate and coordinate on your behalf.
              </p>
              <p>
                The partnership reflects a shared philosophy: that skin care is not cosmetic vanity, but an integral dimension of whole-body wellness.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Custom Facials', 'Advanced Peels', 'Body Treatments', 'Microcurrent', 'Brightening Protocols', 'Acne Treatments'].map((s) => (
                <span key={s} className="text-xs text-[var(--taupe)] bg-[var(--surface)] px-2 py-0.5 rounded-full">{s}</span>
              ))}
            </div>
          </div>

          <BookingButton label="Book with Our Team" location="both" />
        </div>
      </section>
    </>
  );
}
