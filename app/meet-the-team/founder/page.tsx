import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import BookingButton from '@/components/ui/BookingButton';

export const metadata: Metadata = { title: 'Meet Our Founder | Well Kneaded' };

const CREDENTIALS = [
  'Licensed Massage Therapist',
  'Massage Instructor',
  'Basic Life Support & CPR Instructor',
  'Stretch Therapist',
  'Business Mentor',
  'Burn Survivor Therapist',
  'Alternative Medicine Advocate',
  'Integrative Massage Reflexologist',
  'Manual Lymphatic Therapist',
  'Aromatherapist',
];

export default function FounderPage() {
  return (
    <>
      <PageHero title="Meet Our Founder & CEO" subtitle="Shanese Armstrong, LMT" />
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)] mb-4">Our Mission</h2>
            <p className="text-[var(--taupe)] leading-relaxed">
              "MAKE LIFE EASIER FOR Everyday People who have muscle discomfort or tension and pain from post surgeries, injuries, and chronic conditions."
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)] mb-4">Background</h2>
            <p className="text-[var(--taupe)] leading-relaxed mb-4">
              Shanese has been an educator since 2002 and a massage therapist since 2012. She founded Well Kneaded LLC in 2013, driven by her own personal experience with hip dysplasia and chronic pain from childhood into adulthood.
            </p>
            <p className="text-[var(--taupe)] leading-relaxed">
              Nothing makes her happier than helping clients feel better and get through their day with less pain and discomfort. Well Kneaded specializes in cases others avoid — offering pain management, pain education, and self-care options for complicated chronic conditions. Chiropractors, pain doctors, physical therapists, psychologists, and other health professionals refer their patients with confidence.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)] mb-4">Credentials</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {CREDENTIALS.map((c) => (
                <li key={c} className="text-sm text-[var(--taupe)] flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[var(--muted)] inline-block flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)] mb-4">By the Numbers</h2>
            <div className="grid grid-cols-3 gap-6 text-center">
              {[['2014', 'Year Founded'], ['1,000+', 'Clients Served'], ['99%', 'Satisfaction Rate']].map(([stat, label]) => (
                <div key={label} className="bg-[var(--surface)] p-6 rounded-sm">
                  <p className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[var(--text)]">{stat}</p>
                  <p className="text-xs text-[var(--taupe)] mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <BookingButton label="Book with Our Team" location="both" />
        </div>
      </section>
    </>
  );
}
