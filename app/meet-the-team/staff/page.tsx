import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import BookingButton from '@/components/ui/BookingButton';

export const metadata: Metadata = { title: 'Our Staff | Well Kneaded' };

export default function StaffPage() {
  return (
    <>
      <PageHero title="Meet Our Staff" subtitle="Licensed therapists and wellness practitioners." />
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-[var(--taupe)] leading-relaxed">
            Our team of licensed massage therapists brings expertise, care, and a genuine commitment to helping you feel your best. Ready to find the right match for your needs?
          </p>
          <BookingButton label="Book Us" location="both" />
        </div>
      </section>
    </>
  );
}
