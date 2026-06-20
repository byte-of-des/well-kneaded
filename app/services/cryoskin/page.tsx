import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import BookingButton from '@/components/ui/BookingButton';

export const metadata: Metadata = {
  title: 'CryoSkin Body Contouring | Well Kneaded',
  description: 'CryoSkin slimming, toning, and CryoFacial treatments in Decatur, GA. Non-invasive body contouring using thermal shock technology. No surgery, no downtime.',
};

const TECH_STATS = [
  { label: 'Treatment Time', value: '25 – 60 Minutes' },
  { label: 'Recovery', value: 'Zero Downtime' },
  { label: 'Technology', value: 'Thermal Shock' },
  { label: 'Approach', value: 'Non-Invasive' },
  { label: 'First Results', value: 'Same Session' },
];

const TREATMENTS = [
  {
    badge: 'Fat Elimination',
    subtitle: 'CryoSlimming',
    name: 'Targeted Fat Reduction',
    desc: 'CryoSlimming uses rapid thermal fluctuation — cycling between precise warmth and controlled cold — to induce apoptosis in adipocytes. The disrupted fat cells are then processed and eliminated through the body\'s natural lymphatic system over the following weeks. Designed for localized areas that resist diet and exercise.',
  },
  {
    badge: 'Skin Tightening',
    subtitle: 'CryoToning',
    name: 'Collagen & Elastin Boost',
    desc: 'CryoToning applies sustained, even cold to the skin\'s surface, triggering a natural vasoconstrictive response that stimulates new collagen and elastin production. The result is visibly firmer, smoother skin with improved texture and tone — without targeting fat tissue. Particularly effective on the abdomen, thighs, and upper arms.',
  },
  {
    badge: 'Facial Rejuvenation',
    subtitle: 'CryoFacial',
    name: 'Lift, Brighten & Depuff',
    desc: 'The CryoFacial delivers controlled cold to the face and neck, reducing inflammation and puffiness, tightening pores, and stimulating cellular renewal. Clients often notice an immediate improvement in skin brightness, contour definition, and tone. A complement to any advanced skincare regimen — with no injectables required.',
  },
];

const STEPS = [
  {
    num: '01',
    title: 'Consultation & Body Assessment',
    desc: 'We begin with an honest conversation about your goals, medical history, and which CryoSkin protocol is the right fit. Your practitioner will assess the target areas, explain what the treatment does and does not address, and set realistic expectations before any session begins.',
  },
  {
    num: '02',
    title: 'Your Treatment Session',
    desc: 'You\'ll recline comfortably as your practitioner moves the CryoSkin wand over the treatment area. The device alternates between gentle warmth and precise cold. Most clients describe the sensation as deeply relaxing. No anesthesia, no compression garments, and no preparation is required.',
    tag: '25 min (CryoFacial) · 60 min (Body treatments)',
  },
  {
    num: '03',
    title: 'Immediate Visible Results',
    desc: 'Many clients notice a difference in skin texture, firmness, or contouring immediately after their first session. The lymphatic elimination of fat cells is a gradual process that continues over the following two weeks, with progressive improvement across a treatment series.',
  },
  {
    num: '04',
    title: 'Your Recommended Follow-Up Plan',
    desc: 'Before you leave, your practitioner will outline a follow-up schedule tailored to your treatment goals. Most clients see optimal results with a series of sessions spaced appropriately apart. We\'ll also discuss complementary services — like manual lymphatic drainage — that can support and extend your results.',
  },
];

const GOOD_CANDIDATES = [
  'Individuals with isolated areas of fat accumulation (abdomen, flanks, inner thighs, upper arms) that have proven resistant to diet and regular exercise',
  'Those experiencing skin laxity or loss of firmness due to aging, postpartum changes, or weight fluctuation — particularly on the abdomen and legs',
  'Anyone seeking facial rejuvenation without injectables — interested in reducing puffiness, improving skin tone, or achieving a lifted appearance',
  'Clients who want to complement an active lifestyle and healthy diet with targeted body contouring support',
];

const NOT_CANDIDATES = [
  'Pregnant or nursing individuals',
  'Those with Raynaud\'s disease, cold urticaria, or known cold hypersensitivity',
  'Clients with active cancer, open wounds, or recent surgical sites in the treatment area',
  'Individuals expecting results equivalent to surgical liposuction — CryoSkin is a non-surgical complement, not a replacement',
];

export default function CryoSkinPage() {
  return (
    <>
      <PageHero title="CryoSkin Body Contouring" subtitle="Reshape your body. No surgery. No downtime." />

      {/* Tech Stats Strip */}
      <div className="bg-[var(--text)] py-5 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-0">
          {TECH_STATS.map((s, i, arr) => (
            <div key={s.label} className={`px-8 text-center ${i < arr.length - 1 ? 'border-r border-white/10' : ''}`}>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">{s.label}</p>
              <p className="text-sm text-white mt-0.5 font-light">{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-20">

          {/* Intro */}
          <p className="text-[var(--taupe)] text-lg leading-relaxed max-w-2xl">
            CryoSkin uses thermal shock technology to eliminate fat cells, tone skin, and rejuvenate your face — naturally, safely, and in a single session.
          </p>

          {/* Treatments */}
          <div>
            <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-2">Our CryoSkin Treatments</p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[var(--text)] mb-4">
              Three protocols. One technology.
            </h2>
            <p className="text-[var(--taupe)] mb-10">Each CryoSkin treatment is designed for a specific outcome — and each is clinically distinct from the others.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TREATMENTS.map((t) => (
                <div key={t.name} className="bg-[var(--surface)] p-6 rounded-sm space-y-3">
                  <span className="inline-block text-xs text-[var(--muted)] border border-[var(--muted)]/30 px-2 py-0.5 rounded-full">{t.badge}</span>
                  <div>
                    <p className="text-xs text-[var(--taupe)]">{t.subtitle}</p>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-[var(--text)] mt-0.5">{t.name}</h3>
                  </div>
                  <p className="text-sm text-[var(--taupe)] leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div>
            <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-2">The Process</p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[var(--text)] mb-4">
              What to expect from start to finish
            </h2>
            <p className="text-[var(--taupe)] mb-10">
              Every CryoSkin session at Well Kneaded is guided by a trained practitioner. The process is structured, comfortable, and calibrated to your individual goals — from your first consultation through your follow-up plan.
            </p>
            <div className="space-y-6">
              {STEPS.map((step) => (
                <div key={step.num} className="flex gap-6 items-start">
                  <span className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[var(--muted)] flex-shrink-0 w-8">{step.num}</span>
                  <div>
                    <h3 className="font-medium text-[var(--text)] mb-1">{step.title}</h3>
                    <p className="text-sm text-[var(--taupe)] leading-relaxed">{step.desc}</p>
                    {step.tag && <span className="inline-block mt-2 text-xs text-[var(--muted)] border border-[var(--surface)] px-2 py-0.5 rounded-full">{step.tag}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Candidacy */}
          <div>
            <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-2">Candidacy & Expectations</p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[var(--text)] mb-4">
              Is CryoSkin right for you?
            </h2>
            <p className="text-[var(--taupe)] mb-10">
              CryoSkin produces meaningful, measurable results — and we believe in being direct about what it is and what it is not.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[var(--surface)] p-8 rounded-sm">
                <h3 className="font-medium text-[var(--text)] mb-4">Strong Candidates</h3>
                <ul className="space-y-3">
                  {GOOD_CANDIDATES.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm text-[var(--taupe)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--muted)] mt-1.5 flex-shrink-0" />{c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[var(--bg)] border border-[var(--surface)] p-8 rounded-sm">
                <h3 className="font-medium text-[var(--text)] mb-4">Not a Good Fit</h3>
                <ul className="space-y-3">
                  {NOT_CANDIDATES.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm text-[var(--taupe)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--muted)] mt-1.5 flex-shrink-0" />{c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <BookingButton label="Book a CryoSkin Session" location="both" />
        </div>
      </section>
    </>
  );
}
