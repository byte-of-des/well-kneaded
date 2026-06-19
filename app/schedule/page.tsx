// app/schedule/page.tsx
import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import BookingButton from '@/components/ui/BookingButton';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Schedule an Appointment | Well Kneaded',
};

export default function SchedulePage() {
  return (
    <>
      <PageHero
        title="Schedule an Appointment"
        subtitle="Choose a location below to book online through MassageBook."
      />
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <p className="text-[var(--taupe)]">
            Please{' '}
            <Link href="/resources/forms-policies" className="text-[var(--muted)] underline underline-offset-2">
              review our policies
            </Link>{' '}
            prior to your first appointment.
          </p>
          <BookingButton location="both" />
          <p className="text-xs text-[var(--taupe)]">
            Appointments only. Walk-ins are not currently available.
          </p>
        </div>
      </section>
    </>
  );
}
