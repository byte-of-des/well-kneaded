import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resources | Well Kneaded',
  description: 'FAQs, forms, policies, community services, classes, and referral network for Well Kneaded clients in Decatur, GA.',
};

const LINKS = [
  { label: 'FAQs', href: '/resources/faq', desc: 'Answers to common questions about massage, sessions, and what to expect.' },
  { label: 'Forms & Policies', href: '/resources/forms-policies', desc: 'Review our intake forms, financial policy, and clinic waiver before your first visit.' },
  { label: 'Community Services', href: '/resources/community-services', desc: 'Equipment rental, CPR certification, mentoring, and the Healing Hands Initiative.' },
  { label: 'Classes', href: '/resources/classes', desc: 'CPR classes, educational events, and workshops. View upcoming dates.' },
  { label: 'Referral Network', href: '/resources/referral-network', desc: 'Partner with Well Kneaded. Join our professional referral and wellness network.' },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero title="Resources" subtitle="Everything you need before, during, and after your visit." />
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {LINKS.map(({ label, href, desc }) => (
            <Link key={href} href={href} className="group block bg-[var(--surface)] p-8 rounded-sm hover:shadow-md transition-shadow">
              <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)] mb-3 group-hover:text-[var(--muted)] transition-colors">{label}</h2>
              <p className="text-sm text-[var(--taupe)]">{desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
