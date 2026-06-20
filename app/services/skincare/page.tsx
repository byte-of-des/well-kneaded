import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import BookingButton from '@/components/ui/BookingButton';

export const metadata: Metadata = {
  title: 'Skin Care | Well Kneaded',
  description: 'Professional facials, advanced treatments, and body care — delivered in partnership with The Urban Estheti, Decatur\'s premier esthetics team.',
};

const SERVICES = [
  {
    num: '01',
    name: 'Customized Facials',
    desc: 'Each facial begins with a thorough skin analysis before any product touches your face. Your esthetician selects cleansers, exfoliants, serums, and masks based on your skin type, current conditions, and goals — whether that is deep hydration, brightening, or congestion relief.',
    tags: ['Hydrating', 'Brightening', 'Anti-Aging', 'Clarifying'],
  },
  {
    num: '02',
    name: 'Body Treatments',
    desc: 'Skin care does not stop at the neck. Our body treatment menu includes professional exfoliation to remove dulling dead cells, nourishing wraps that replenish moisture and minerals, and targeted treatments that leave skin soft, smooth, and visibly renewed from head to toe.',
    tags: ['Exfoliation', 'Body Wraps', 'Nourishing'],
  },
  {
    num: '03',
    name: 'Advanced Skin Tightening',
    desc: 'Technology-assisted lifting and firming treatments that work beneath the surface to stimulate collagen, improve elasticity, and support a more defined, youthful contour. Suitable for both face and body, these non-surgical protocols are designed for cumulative, long-term improvement.',
    tags: ['Lifting', 'Firming', 'Collagen Support'],
  },
  {
    num: '04',
    name: 'CryoFacial',
    desc: 'A non-invasive rejuvenation treatment that applies controlled cold therapy to the face to reduce puffiness, minimize the appearance of pores, stimulate circulation, and leave skin with an immediate luminous glow. Part of our broader CryoSkin offering — no needles, no downtime.',
    tags: ['Cold Therapy', 'No Downtime', 'Glow'],
    link: { label: 'Explore CryoSkin', href: '/services/cryoskin' },
  },
  {
    num: '05',
    name: 'Brow & Lash Services',
    desc: 'Precise brow shaping and lash enhancement services that frame the face and complement your skin care results. Whether you prefer a refined arch or a fuller, more defined look, our estheticians work with your natural features to achieve a result that looks intentional, not overdone.',
    tags: ['Shaping', 'Tinting', 'Enhancement'],
  },
];

export default function SkinCarePage() {
  return (
    <>
      <PageHero title="Skin Care" subtitle="Skin care rooted in expertise." />
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-20">

          {/* Partnership */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-2">In Partnership With</p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[var(--text)] mb-6">
                The Urban Estheti — brought in-house.
              </h2>
              <div className="space-y-4 text-[var(--taupe)] leading-relaxed">
                <p>
                  Well Kneaded has partnered with The Urban Estheti to bring licensed esthetician services directly into our studio — so your skin care and bodywork happen in the same trusted space, guided by the same standard of clinical precision.
                </p>
                <p>
                  This collaboration means you can address your body and your skin as a connected whole: release tension, restore circulation, and then let our partner estheticians deliver treatments that respond to what your skin actually needs that day.
                </p>
              </div>
              <ul className="mt-6 space-y-2">
                {[
                  'Licensed, experienced estheticians on-site at our Decatur studio',
                  'Treatments coordinated with your massage and wellness care when desired',
                  'Professional-grade products and evidence-informed protocols',
                ].map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-[var(--taupe)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--muted)] mt-1.5 flex-shrink-0" />{d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[var(--surface)] p-8 rounded-sm space-y-4">
              <p className="text-xs text-[var(--muted)] uppercase tracking-widest">Our Partner</p>
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)]">The Urban Estheti</h3>
              <p className="text-xs text-[var(--taupe)]">Partner Estheticians · On-Site at Well Kneaded</p>
              <p className="text-sm text-[var(--taupe)] leading-relaxed">
                A curated collective of licensed estheticians offering advanced facial treatments, therapeutic body care, and targeted skin solutions — all under one roof at our McConnell Drive location. Their work is deeply customized, avoiding generic protocols in favor of treatments built around your individual skin profile and wellness goals.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Custom Facials', 'Advanced Peels', 'Body Treatments', 'Microcurrent', 'Brightening Protocols', 'Acne Treatments'].map((s) => (
                  <span key={s} className="text-xs text-[var(--taupe)] border border-[var(--surface)] bg-[var(--bg)] px-3 py-1 rounded-full">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-2">What We Offer</p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[var(--text)] mb-4">
              Treatments for every skin story.
            </h2>
            <p className="text-[var(--taupe)] mb-10">
              From a restorative facial to advanced tightening technology, our skincare menu is curated for results — with care that is never rushed and always personalized to your skin&apos;s current needs.
            </p>
            <div className="space-y-0 divide-y divide-[var(--surface)]">
              {SERVICES.map((s) => (
                <div key={s.name} className="py-8 flex gap-6 items-start">
                  <span className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[var(--muted)] flex-shrink-0 w-8">{s.num}</span>
                  <div className="flex-1 space-y-3">
                    <h3 className="font-medium text-[var(--text)]">{s.name}</h3>
                    <p className="text-sm text-[var(--taupe)] leading-relaxed max-w-xl">{s.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((tag) => (
                        <span key={tag} className="text-xs text-[var(--taupe)] border border-[var(--surface)] bg-[var(--surface)] px-2 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                  {s.link && (
                    <a href={s.link.href} className="text-xs text-[var(--muted)] hover:text-[var(--text)] transition-colors flex-shrink-0">
                      {s.link.label} →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Consultation CTA */}
          <div className="bg-[var(--surface)] p-10 rounded-sm text-center">
            <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-2">Your Skin Journey</p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[var(--text)] mb-4">
              Every skin journey starts with a conversation.
            </h2>
            <p className="text-[var(--taupe)] mb-8 max-w-xl mx-auto">
              Your first appointment includes a full skin analysis. We don&apos;t prescribe treatments until we understand what your skin actually needs. Call us or book online and we&apos;ll take it from there.
            </p>
            <BookingButton label="Book a Skin Care Appointment" location="both" />
          </div>

        </div>
      </section>
    </>
  );
}
