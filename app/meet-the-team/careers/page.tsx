import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import ContactForm from '@/components/ui/ContactForm';

export const metadata: Metadata = { title: 'Career Opportunities | Well Kneaded' };

const EXTRA_FIELDS = [
  { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
  { name: 'address', label: 'Street Address', required: true },
  { name: 'city', label: 'City', required: true },
  { name: 'state', label: 'State or Province', required: true },
];

export default function CareersPage() {
  return (
    <>
      <PageHero title="Join the WK Team!" subtitle="Find your next opportunity at Well Kneaded." />
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-[var(--taupe)] mb-10 leading-relaxed">
            Welcome! Here you'll find various employment options available in our office. Fill out the form below or contact us directly to learn more.
          </p>
          <ContactForm extraFields={EXTRA_FIELDS} />
        </div>
      </section>
    </>
  );
}
