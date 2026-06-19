import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Community Services | Well Kneaded',
  description: 'Equipment rental, CPR certification, mentoring, and the Healing Hands Initiative from Well Kneaded in Decatur, GA.',
};

export default function CommunityServicesPage() {
  return (
    <>
      <PageHero title="Community Services" subtitle="Supporting massage therapists and the Decatur wellness community." />
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          {[
            { title: 'Equipment Rental', desc: 'Need a professional space to see clients? We offer massage tables, chairs, and products for hourly, daily, monthly, or occasional rental. An affordable way to build your practice.' },
            { title: 'CPR Certification', desc: 'Regular CPR classes covering basic life support, CPR, first aid, and renewals for adults, children, and infants. Group and student pricing available. Contact us for class dates.' },
            { title: 'Mentoring & Education', desc: 'Shanese is a mentor and massage student educator, offering programs for therapists transitioning to private practice and shadowing opportunities for students.' },
            { title: 'Healing Hands Initiative', desc: 'Offer a massage to someone who needs it but lacks the resources to get one. Donate to a specific person or allow our team to gift one of our nominated clients. Ask at the front desk for details.' },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-[var(--surface)] p-8 rounded-sm">
              <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)] mb-3">{title}</h2>
              <p className="text-sm text-[var(--taupe)] leading-relaxed">{desc}</p>
            </div>
          ))}
          <p className="text-sm text-[var(--taupe)] text-center">
            For details on any of our community programs, call us at {SITE.phone} or email {SITE.email}.
          </p>
        </div>
      </section>
    </>
  );
}
