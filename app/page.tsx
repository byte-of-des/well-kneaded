import BookingButton from '@/components/ui/BookingButton';
import ServiceCard from '@/components/ui/ServiceCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { TESTIMONIALS } from '@/lib/constants';

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
      <section className="bg-[var(--surface)] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-4">Decatur, Georgia · Est. 2014</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-medium text-[var(--text)] mb-6 leading-tight">
            Pain Management.<br />Natural Solutions.
          </h1>
          <p className="text-[var(--taupe)] text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Affordable, comfortable, and therapeutic experiences that deliver real results — naturally. Specializing in post-surgery relief, chronic conditions, and injury recovery.
          </p>
          <BookingButton label="Schedule Your Appointment" location="both" />
        </div>
      </section>

      {/* Welcome */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-medium text-[var(--text)] mb-6">
            Welcome to Well Kneaded
          </h2>
          <p className="text-[var(--taupe)] leading-relaxed">
            Established in 2014 to address the overwhelming demand for an affordable, comfortable, therapeutic experience that delivers results — Naturally! We are on a mission to provide quality pain relief for people who suffer from chronic conditions through research-based treatments and natural healing.
          </p>
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
          <div className="text-center mt-12">
            <BookingButton label="Book Your First Session" location="both" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[var(--text)] text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
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

      {/* CTA Banner */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[var(--text)] mb-6">
            Ready to feel better?
          </h2>
          <BookingButton label="Book Now" location="both" />
        </div>
      </section>
    </>
  );
}
