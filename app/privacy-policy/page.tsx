import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy | Well Kneaded',
  description: 'Privacy policy for Well Kneaded Massage Therapies & Skincare at wellkneadedcare.com.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-6 text-sm text-[var(--taupe)] leading-relaxed">
          <p>At Well Kneaded Massage Therapies and Skincare, we are strongly committed to protecting your privacy and providing a safe, high-quality online experience for all visitors.</p>
          <p>We have developed this Privacy Policy to inform you of our policies regarding the collection, use, and disclosure of information we receive from users of this website. This site is operated by {SITE.name}.</p>
          <p>Our Privacy Policy, along with our Terms & Conditions, governs your use of this site. By accessing wellkneadedcare.com or accepting Terms of Use, you consent to these policies.</p>
          <p>Customers may access and modify personal information via website instructions or by emailing {SITE.altEmail}. Marketing communications can be managed through unsubscribe links in emails, though transactional emails cannot be opted out of.</p>
          <p>We will try to accommodate any requests related to the management of personal information in a timely manner. Complete removal isn&apos;t always possible due to legal retention requirements.</p>
        </div>
      </section>
    </>
  );
}
