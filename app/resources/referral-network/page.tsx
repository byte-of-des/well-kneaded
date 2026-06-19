import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import ContactForm from '@/components/ui/ContactForm';

export const metadata: Metadata = {
  title: 'Referral Network | Well Kneaded',
  description: 'Join the Well Kneaded professional referral and wellness network in the Decatur, GA area.',
};

export default function ReferralNetworkPage() {
  return (
    <>
      <PageHero title="Join Our Network" subtitle="Connect with a community built on wellness and referrals." />
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto space-y-8">
          <p className="text-[var(--taupe)] leading-relaxed">
            If you'd like to network with us, please fill out the form below. Include the name of your business, the type of business, your contact information, and why you think you'd be a good fit for our referral community.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
