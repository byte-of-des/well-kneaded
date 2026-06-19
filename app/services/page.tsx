import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import ServiceCard from '@/components/ui/ServiceCard';

export const metadata: Metadata = {
  title: 'Rates & Services | Well Kneaded',
  description: 'Massage therapy, stretch therapy, wellness detox, and corporate chair massage in Decatur, GA. View all services and pricing.',
};

const SERVICES = [
  { title: 'Therapeutic Massage', description: 'Swedish, deep tissue, sports, pregnancy, reflexology, cupping, hot stone, and more.', href: '/services/therapeutic-massage' },
  { title: 'Stretch-n-Flex Therapy', description: '1-on-1 assisted stretching using PNF, active isolated, static, and dynamic techniques.', href: '/services/stretch-therapy' },
  { title: 'Wellness & Detox', description: 'Ionic foot detox, infrared sauna, red light therapy, yoni steams, and whole foods supplements.', href: '/services/wellness-detox' },
  { title: 'Corporate Chair Massage', description: 'Workplace massage programs for teams of any size. Starting at $15/employee.', href: '/services/corporate' },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Rates & Services" subtitle="We meet you where you are physically and help you get to where you want to be — with less pain and more balance." />
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="sr-only">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((s) => <ServiceCard key={s.href} {...s} />)}
          </div>
        </div>
      </section>
    </>
  );
}
