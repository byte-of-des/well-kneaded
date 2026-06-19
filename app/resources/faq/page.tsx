import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'FAQs | Well Kneaded',
  description: 'Common questions about massage therapy, sessions, tipping, draping, and what to expect at Well Kneaded in Decatur, GA.',
};

const FAQS = [
  { q: 'How often should I get a massage?', a: 'We recommend starting with one or two sessions weekly for the first four to six weeks depending on your needs, then gradually increasing time between sessions as symptoms improve. For preventative care or daily stress management, one session per month is common.' },
  { q: 'What is included in the session time?', a: 'The session includes treatment time, time to get on and off the table, and time to communicate before and after with your therapist to truly customize your experience.' },
  { q: 'How much should I tip?', a: 'We recommend tipping 15%, 18%, or 20%+ based on the full price of a regular session (60 min: $90 / 90 min: $135).' },
  { q: 'Do I need to undress completely?', a: 'You should undress to your desired level of comfort. About half our clients prefer to be completely undressed (but fully draped), while others prefer to keep undergarments on.' },
  { q: 'Will I be covered during the session?', a: 'You will be properly draped (covered) at all times to keep you warm and comfortable.' },
  { q: 'What should I expect on my first visit?', a: 'Your therapist will complete a health history form and ask about desired focus areas and any health concerns before beginning your session.' },
  { q: 'Will massage hurt?', a: 'Massage should not hurt. Deep tissue work may cause some discomfort — on a scale of 1–10 you may experience up to a 7. Always communicate with your therapist about pressure.' },
  { q: 'Can I get a massage while pregnant?', a: 'Yes! We have therapists who specialize in pregnancy (prenatal) massage.' },
  { q: 'Can massages help with headaches and migraines?', a: "Yes! Getting relief doesn't have to mean only medication or sitting in the dark. Massage can be a powerful tool for migraine management." },
];

export default function FAQPage() {
  return (
    <>
      <PageHero title="Frequently Asked Questions" subtitle="This is your session. Speak up — we're here to help." />
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {FAQS.map(({ q, a }) => (
            <div key={q} className="bg-[var(--surface)] p-8 rounded-sm">
              <h2 className="font-medium text-[var(--text)] mb-3">{q}</h2>
              <p className="text-sm text-[var(--taupe)] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
