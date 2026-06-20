import type { Metadata } from 'next';
import BookingButton from '@/components/ui/BookingButton';
import ServiceCard from '@/components/ui/ServiceCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { TESTIMONIALS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Massage Therapy & Pain Relief in Decatur, GA | Well Kneaded',
  description: 'Well Kneaded offers therapeutic massage, chronic pain treatment, and holistic health services in Decatur, GA. Specializing in post-surgery recovery, injury rehabilitation, and pain relief massage. Serving Decatur since 2014.',
};

const BOOKING_URL = 'https://www.massagebook.com/therapists/WellKneadedBodyWorkandMassage?src=external';

const SERVICES = [
  { title: 'Therapeutic Massage', description: 'Deep tissue, Swedish, sports, pregnancy massage, and more — tailored to your body and pain points.', href: '/services/therapeutic-massage' },
  { title: 'Stretch-n-Flex Therapy', description: '1-on-1 assisted stretching sessions to increase range of motion and reduce muscle tension.', href: '/services/stretch-therapy' },
  { title: 'Wellness & Detox', description: 'Ionic foot detox, infrared sauna, red light therapy, and yoni steams for full-body restoration.', href: '/services/wellness-detox' },
  { title: 'Corporate Chair Massage', description: 'Bring the benefits of massage to your team. Healthy employees are productive employees.', href: '/services/corporate' },
];

const PAIN_POINTS = [
  'Sleepless nights from shoulder pain',
  'Neck aches from long days at the desk',
  'Migraines that won\'t respond to medication',
  'Post-surgery stiffness and recovery',
  'Chronic low back or hip pain',
  'Athletic injury and muscle tension',
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--surface)] py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div>
            <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-4">Decatur, Georgia · Est. 2014</p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl font-medium text-[var(--text)] mb-6 leading-tight">
              Pain Management Solutions
            </h1>
            <p className="text-[var(--taupe)] text-lg leading-relaxed mb-8">
              Specializing in post-surgery relief, injury recovery, and chronic conditions — naturally.
            </p>
            <ul className="mb-10 space-y-2">
              {['Licensed Massage Therapist', 'Serving Decatur Since 2014', 'Personalized Treatment Plans'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[var(--text)]">
                  <span className="text-[var(--accent)]">✓</span> {item}
                </li>
              ))}
            </ul>
            <BookingButton label="Book Your Appointment" location="main" />

            {/* Social proof */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-[var(--accent)] tracking-widest text-sm">★★★★★</span>
                <span className="text-sm text-[var(--taupe)]">4.9 · 145+ Google Reviews</span>
              </div>
              <blockquote className="border-l-2 border-[var(--accent)] pl-4">
                <p className="text-sm text-[var(--taupe)] italic">&ldquo;After 3 sessions my migraines decreased dramatically.&rdquo;</p>
                <cite className="text-xs text-[var(--muted)] not-italic mt-1 block">— Decatur client</cite>
              </blockquote>
            </div>
          </div>

          {/* Right — founder video portrait */}
          <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: '3/4', background: 'var(--surface)' }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              style={{ mixBlendMode: 'multiply' }}
            >
              <source src="/videos/founder-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Full-width Trust Bar */}
      <div className="bg-[var(--text)] py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-0 flex-wrap">
          {['Licensed & Certified', 'Research-Based Care', 'Serving Decatur Since 2014', '145+ Google Reviews', 'Results, Naturally'].map((cred, i, arr) => (
            <span key={cred} className="flex items-center gap-0">
              <span className="text-[10px] font-light text-white/50 uppercase tracking-widest px-6">{cred}</span>
              {i < arr.length - 1 && <span className="text-white/20 text-xs">•</span>}
            </span>
          ))}
        </div>
      </div>

{/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-medium text-[var(--text)] text-center mb-12">
            Why Clients Choose Well Kneaded
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: 'Serving Decatur Since 2014', desc: 'Over a decade of trusted care in the Decatur community.' },
              { title: 'Licensed & Certified Therapists', desc: 'Every therapist is state-licensed and professionally certified.' },
              { title: 'Specialized Chronic Pain Treatment', desc: 'We focus on conditions others treat as routine — and get results.' },
              { title: 'Personalized Treatment Plans', desc: 'No cookie-cutter sessions. Every visit is tailored to your body.' },
              { title: 'Natural, Drug-Free Approach', desc: 'Research-based techniques that work with your body, not against it.' },
              { title: 'Thousands of Sessions Performed', desc: 'Experience you can feel from the very first appointment.' },
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-2 p-6 bg-[var(--surface)] rounded-sm">
                <div className="flex items-start gap-2">
                  <span className="text-[var(--accent)] flex-shrink-0 mt-0.5">✓</span>
                  <p className="text-sm font-semibold text-[var(--text)]">{item.title}</p>
                </div>
                <p className="text-sm text-[var(--taupe)] pl-5">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <BookingButton label="Schedule Your Session" location="main" />
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-medium text-[var(--text)] mb-6">
            Welcome to Well Kneaded
          </h2>
          <p className="text-[var(--taupe)] leading-relaxed">
            Well Kneaded has been providing therapeutic massage and holistic pain relief in Decatur, GA since 2014. Our mission is simple: deliver real results for people living with chronic pain, recovering from surgery, or healing from injury — naturally, without drugs or invasive procedures. We&apos;re proud to be Decatur&apos;s trusted source for chronic pain treatment, massage therapy, and whole-body wellness.
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="bg-[var(--surface)] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-medium text-[var(--text)] text-center mb-4">
            See Us in Action
          </h2>
          <p className="text-center text-[var(--taupe)] text-sm mb-10">Get a feel for the Well Kneaded experience before you walk in the door.</p>
          <div className="relative w-full rounded-sm overflow-hidden" style={{ aspectRatio: '16/9' }}>
            <iframe
              src="https://www.youtube.com/embed/80ucGK6roWY?si=qk1ei4Wnkg0EWYiQ"
              title="Well Kneaded — Massage Therapy & Holistic Health in Decatur, GA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-[var(--surface)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[var(--text)] text-center mb-4">
            Sound familiar?
          </h2>
          <p className="text-center text-[var(--taupe)] mb-12">You don&apos;t have to keep living with it.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PAIN_POINTS.map((point) => (
              <div key={point} className="bg-[var(--bg)] p-6 rounded-sm border border-[var(--surface)]">
                <p className="text-sm text-[var(--text)]">{point}</p>
              </div>
            ))}
          </div>

          {/* Outcomes */}
          <div className="mt-16 bg-[var(--bg)] rounded-sm border border-[var(--surface)] px-8 py-10">
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)] mb-6 text-center">
              Imagine if you could…
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
              {[
                'Sleep through the night without pain waking you',
                'Turn your head and neck freely again',
                'Get through a full workday without a headache',
                'Recover faster after surgery or injury',
                'Move without tension or stiffness holding you back',
                'Live without relying on pain medication',
              ].map((outcome) => (
                <li key={outcome} className="flex items-start gap-3 text-sm text-[var(--text)]">
                  <span className="text-[var(--accent)] mt-0.5 flex-shrink-0">✓</span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mt-10">
            <BookingButton label="Book Your First Session" location="both" />
          </div>
        </div>
      </section>

      {/* Outcome-Based Services */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-medium text-[var(--text)] text-center mb-3">
            Find Relief For
          </h2>
          <p className="text-center text-[var(--taupe)] text-sm mb-12">Therapeutic massage and holistic treatment in Decatur, GA for the conditions that affect your daily life.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { condition: 'Chronic Neck Pain', href: '/services/therapeutic-massage' },
              { condition: 'Lower Back Pain', href: '/services/therapeutic-massage' },
              { condition: 'Migraines', href: '/services/therapeutic-massage' },
              { condition: 'Sciatica', href: '/services/stretch-therapy' },
              { condition: 'Post-Surgery Recovery', href: '/services/therapeutic-massage' },
              { condition: 'Sports Injuries', href: '/services/stretch-therapy' },
              { condition: 'Stress & Anxiety', href: '/services/wellness-detox' },
              { condition: 'Chronic Fatigue', href: '/services/wellness-detox' },
              { condition: 'Limited Range of Motion', href: '/services/stretch-therapy' },
            ].map(({ condition, href }) => (
              <a
                key={condition}
                href={href}
                className="flex items-center justify-between px-5 py-4 bg-[var(--surface)] rounded-sm border border-transparent hover:border-[var(--taupe)] hover:bg-[var(--bg)] transition-colors group"
              >
                <span className="text-sm text-[var(--text)] font-medium">{condition}</span>
                <span className="text-[var(--accent)] group-hover:translate-x-1 transition-transform text-xs">→</span>
              </a>
            ))}
          </div>
          <div className="text-center mt-12">
            <BookingButton label="Schedule Your Session" location="main" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[var(--surface)] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[var(--text)] text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-medium text-[var(--text)] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <dl className="divide-y divide-[var(--surface)]">
            {[
              {
                q: 'Does insurance cover massage therapy?',
                a: 'Most standard health insurance plans do not cover massage therapy, but some HSA and FSA accounts do. We recommend checking with your provider. We accept cash, card, and most major payment methods.',
              },
              {
                q: 'What should I wear?',
                a: 'Wear whatever is comfortable. For massage sessions, you will undress to your comfort level and be professionally draped throughout. For stretch therapy, wear athletic or loose-fitting clothing.',
              },
              {
                q: 'How many sessions will I need?',
                a: 'It depends on your condition and goals. Many clients notice significant improvement within 3–6 sessions. Chronic conditions or post-surgery recovery may benefit from an ongoing plan, which we will help you build.',
              },
              {
                q: 'Is this painful?',
                a: 'Therapeutic massage should never be unbearable. There may be moments of mild discomfort when working on problem areas, but your therapist will always adjust pressure to your comfort level.',
              },
              {
                q: 'Do you work with post-surgery patients?',
                a: 'Yes. We specialize in post-surgery recovery and work with clients healing from a range of procedures. We recommend consulting your physician before booking, and we are happy to coordinate with your care team.',
              },
              {
                q: "What if I've never had a massage before?",
                a: "You're in great hands. Our therapists are experienced with first-time clients and will walk you through everything — what to expect, how to communicate during the session, and how to get the most out of your visit.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none text-[var(--text)] font-medium text-sm gap-4">
                  {q}
                  <span className="flex-shrink-0 text-[var(--accent)] group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="mt-3 text-sm text-[var(--taupe)] leading-relaxed pr-6">{a}</p>
              </details>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[var(--text)] py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-medium text-white mb-3">
            Ready to Feel Better?
          </h2>
          <p className="text-white/60 mb-8 text-sm">New client appointments available this week.</p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-[var(--text)] text-sm font-semibold rounded-sm hover:bg-[var(--surface)] transition-colors"
          >
            Schedule Your Session
          </a>
        </div>
      </section>
    </>
  );
}
