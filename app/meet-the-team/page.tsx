import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Meet the WK Crew | Well Kneaded' };

export default function MeetTheTeamPage() {
  return (
    <>
      <PageHero title="Meet the WK Crew" subtitle="The talented team behind Well Kneaded." />
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Meet Our Founder/CEO', href: '/meet-the-team/founder', desc: 'Learn about Shanese Armstrong, LMT and the vision behind Well Kneaded.' },
            { label: 'Meet Our Staff', href: '/meet-the-team/staff', desc: 'Our licensed therapists and wellness practitioners.' },
            { label: 'Career Opportunities', href: '/meet-the-team/careers', desc: 'Join the Well Kneaded team. View open positions and apply.' },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="group block bg-[var(--surface)] p-8 rounded-sm hover:shadow-md transition-shadow">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)] mb-3 group-hover:text-[var(--muted)] transition-colors">{item.label}</h3>
              <p className="text-sm text-[var(--taupe)]">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
