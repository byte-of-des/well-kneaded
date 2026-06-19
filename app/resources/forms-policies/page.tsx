import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Forms & Policies | Well Kneaded',
  description: 'Client intake forms, financial policy, and clinic waiver for Well Kneaded Massage Therapies & Skincare in Decatur, GA.',
};

export default function FormsPoliciesPage() {
  return (
    <>
      <PageHero title="Forms & Policies" subtitle="Please complete the relevant forms before your first appointment." />
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)] mb-4">Intake Forms</h2>
            <p className="text-[var(--taupe)] mb-6 text-sm">Forms are available at the front desk or by contacting us directly prior to your first appointment.</p>
            <ul className="space-y-3">
              {['General Client Intake Form', 'COVID-19 Waiver', 'Fertility Massage Intake Form', 'Yoni Steam Intake Form'].map((form) => (
                <li key={form} className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--muted)] flex-shrink-0" />
                  <span className="text-[var(--text)]">{form}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)] mb-4">Financial Policy</h2>
            <div className="space-y-4 text-sm text-[var(--taupe)] leading-relaxed">
              <p>Full payment is due at the time of your appointment. We accept cash, checks (with ID), major credit cards, HSA, and FSA.</p>
              <p>A $50 fee applies to returned checks. A credit card on file is required at booking; it is charged only for no-shows or late cancellations with less than 4-hour notice.</p>
              <p>A $25 no-show/late cancellation fee applies to all steam services.</p>
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)] mb-4">Clinic Waiver</h2>
            <div className="space-y-4 text-sm text-[var(--taupe)] leading-relaxed">
              <p>Well Kneaded is a Therapeutic (NON-SEXUAL) Massage, Skincare and Bodywork facility focused on pain management. Practitioners cannot diagnose, prescribe, or treat physical or mental illness.</p>
              <p>Clients must accurately disclose medical conditions and agree to keep records updated. Clients release the practitioner and Well Kneaded LLC from liability for outcomes related to undisclosed conditions.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
