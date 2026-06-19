import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Event Calendar | Well Kneaded',
  description: 'Upcoming classes, workshops, and community events at Well Kneaded in Decatur, GA.',
};

const PAST_EVENTS = [
  {
    date: 'February 16, 2024',
    title: 'Couples Massage Class',
    time: '6:30pm – 9:30pm',
    location: '1270 McConnell Drive, Suite B, Decatur GA',
    desc: "Plan something new this Valentine's Day. Learn awesome massage techniques to show your loved one!",
  },
  {
    date: 'August 22, 2022',
    title: 'Customer Appreciation / Open House',
    time: '12:00pm – 3:00pm',
    location: 'Decatur, GA',
    desc: 'Games, food, and prizes. A celebration of our community.',
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero title="Event Calendar" subtitle="Classes, workshops, and community events." />
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center bg-[var(--surface)] py-12 px-8 rounded-sm">
            <p className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)]">No upcoming events</p>
            <p className="text-sm text-[var(--taupe)] mt-2">Check back soon or follow us on social media for announcements.</p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)] mb-6">Past Events</h2>
            <div className="space-y-6">
              {PAST_EVENTS.map(({ date, title, time, location, desc }) => (
                <div key={title} className="bg-[var(--surface)] p-6 rounded-sm">
                  <p className="text-xs text-[var(--muted)] uppercase tracking-wide mb-2">{date} · {time}</p>
                  <h3 className="font-medium text-[var(--text)] mb-1">{title}</h3>
                  <p className="text-xs text-[var(--taupe)] mb-2">{location}</p>
                  <p className="text-sm text-[var(--taupe)]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
