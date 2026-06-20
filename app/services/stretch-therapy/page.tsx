import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import BookingButton from '@/components/ui/BookingButton';

export const metadata: Metadata = {
  title: 'Stretch-n-Flex Therapy | Well Kneaded',
  description: 'Assisted stretch therapy using PNF and active isolated techniques in Decatur, GA. Improve range of motion, reduce pain, and unlock performance.',
};

const TECHNIQUES = [
  {
    label: 'Technique One',
    name: 'PNF Stretching',
    abbr: 'Proprioceptive Neuromuscular Facilitation',
    how: 'PNF is a two-phase technique that works with your nervous system, not against it. Your therapist guides you into a stretch, then asks you to contract the target muscle isometrically — pushing against resistance for a brief hold. Upon release, the muscle reflexively relaxes to a deeper resting length than passive stretching alone can achieve. This contract-relax cycle is repeated progressively, producing gains in flexibility that are both immediate and cumulative.',
    benefits: [
      'Athletes looking to increase functional range for training or competition',
      'Those recovering from muscle tightness or minor strains',
      'Anyone who has plateaued with conventional stretching',
      'Clients with stubborn hamstring, hip flexor, or shoulder restrictions',
    ],
  },
  {
    label: 'Technique Two',
    name: 'Active Isolated Stretching',
    abbr: 'AIS — The Mattes Method',
    how: 'Active Isolated Stretching operates on a fundamentally different principle: brevity over duration. Each stretch is held for no more than two seconds — precisely timed to stay below the threshold that triggers the myotatic stretch reflex. The movement is repeated eight to ten times per position, each repetition reaching slightly farther as fresh oxygenated blood enters the tissue and microtension releases. Rope assistance allows the therapist to gently guide end-range without forcing, creating a safe, progressive extension that accumulates over the session.',
    benefits: [
      'Clients with chronic tightness, fibromyalgia, or pain-sensitive tissue',
      'Post-surgical recovery where passive stretching may be contraindicated',
      'Older adults and those returning from long periods of inactivity',
      'Anyone seeking gentle but effective mobility work',
    ],
  },
];

const WHO_BENEFITS = [
  {
    title: 'Athletes & Active Adults',
    intro: 'For those who demand more from their body — and want to protect it long-term.',
    items: [
      'Increase functional flexibility for sport-specific movement',
      'Accelerate recovery between training sessions',
      'Address chronic imbalances that affect performance',
      'Prevent injury through proactive mobility work',
    ],
  },
  {
    title: 'Post-Surgery & Recovery',
    intro: 'Gentle, therapist-guided mobility work for those rebuilding after a procedure or injury.',
    items: [
      'Restore range of motion lost during recovery',
      'Reduce post-surgical stiffness and scar tissue restrictions',
      'Re-establish normal movement patterns safely',
      'Complement physical therapy with soft-tissue focused care',
    ],
  },
  {
    title: 'Chronic Pain & Stiffness',
    intro: 'For desk workers, those managing arthritis, and anyone carrying long-term tension in the hips or back.',
    items: [
      'Break the pain-tension cycle driving chronic discomfort',
      'Reduce reliance on pain medication through natural mobility restoration',
      'Improve daily function and quality of life',
      'Address the postural imbalances that cause recurring pain',
    ],
  },
];

const PACKAGES = [
  {
    name: 'Single Session',
    sessions: 'One 60-minute appointment',
    desc: 'A full-body or targeted assisted stretch session. Ideal for a first-time experience, a recovery day, or an acute area of concern. Your therapist will assess your movement patterns and prioritize the regions that need it most.',
    details: ['Intake assessment included', 'Full-body or regional focus', 'Post-session home stretching guidance'],
    featured: false,
  },
  {
    name: 'Series of Four',
    sessions: 'Four 60-minute sessions',
    desc: 'A focused series that allows your therapist to build on each session. By session two, your body begins to respond more readily. By session four, measurable improvements in range of motion and comfort are standard. Recommended for most new clients with a specific goal.',
    details: [
      'Progressive protocol across sessions',
      'Therapist tracking of range-of-motion changes',
      'Flexible scheduling — no expiration pressure',
    ],
    featured: true,
    badge: 'Most Popular',
  },
  {
    name: 'Series of Six',
    sessions: 'Six 60-minute sessions',
    desc: 'The most complete course of stretch therapy. Designed for clients managing chronic tightness, recovering from injury, or preparing for an athletic event. Six sessions provide enough continuity to retrain movement habits and sustain them independently.',
    details: [
      'Comprehensive mobility assessment at start and finish',
      'Customized home maintenance program',
      'Recommended for post-surgical and chronic pain clients',
    ],
    featured: false,
  },
];

const PREP_TIPS = [
  {
    title: 'Wear Athletic Clothing',
    text: 'Form-fitting athletic wear — leggings, shorts, or compression gear — allows your therapist to assess and assist your movement without restriction. Loose clothing can limit technique accuracy.',
  },
  {
    title: 'Arrive 5 Minutes Early',
    text: 'A brief intake allows your therapist to understand your goals and any areas to prioritize or avoid. Arriving early means your full session time is spent on you — not paperwork.',
  },
  {
    title: 'No Experience Needed',
    text: "You don't need to be flexible to benefit from stretch therapy. In fact, the less flexible you are, the more dramatic the results. Your therapist adapts the technique entirely to your current range of motion.",
  },
  {
    title: 'Communicate Openly',
    text: 'Your comfort is the guiding principle of every session. If anything feels sharp, uncomfortable, or too intense, your therapist will adjust immediately. There is no "push through the pain" approach here.',
  },
];

export default function StretchTherapyPage() {
  return (
    <>
      <PageHero title="Stretch-n-Flex Therapy" subtitle="Move the way you were meant to." />
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-20">

          {/* Intro */}
          <p className="text-[var(--taupe)] text-lg leading-relaxed max-w-2xl">
            Assisted stretch therapy using PNF and active isolated techniques. Improve your range of motion, reduce pain, and unlock performance — in one session.
          </p>

          {/* Techniques */}
          <div>
            <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-2">The Science Behind the Session</p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[var(--text)] mb-4">
              Two distinct methods — matched to your body.
            </h2>
            <p className="text-[var(--taupe)] mb-10">
              Well Kneaded therapists are trained in two distinct assisted stretching methods — matched to your body, goals, and how you move.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {TECHNIQUES.map((t) => (
                <div key={t.name} className="bg-[var(--surface)] p-8 rounded-sm space-y-6">
                  <div>
                    <span className="text-xs text-[var(--muted)] uppercase tracking-widest">{t.label}</span>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)] mt-1">{t.name}</h3>
                    <p className="text-xs text-[var(--taupe)] mt-0.5">{t.abbr}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-2">How it works</p>
                    <p className="text-sm text-[var(--taupe)] leading-relaxed">{t.how}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-3">Who benefits most</p>
                    <ul className="space-y-2">
                      {t.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-[var(--taupe)]">
                          <span className="w-1 h-1 rounded-full bg-[var(--muted)] mt-2 flex-shrink-0" />{b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Who It's For */}
          <div>
            <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-2">Who It&apos;s For</p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[var(--text)] mb-4">
              Stretch therapy meets you exactly where you are.
            </h2>
            <p className="text-[var(--taupe)] mb-10">
              Whether you&apos;re training hard, healing from surgery, or just tired of waking up stiff — assisted stretching delivers results no foam roller can replicate.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {WHO_BENEFITS.map((w) => (
                <div key={w.title} className="bg-[var(--bg)] border border-[var(--surface)] p-6 rounded-sm space-y-4">
                  <div>
                    <h3 className="font-medium text-[var(--text)] mb-1">{w.title}</h3>
                    <p className="text-sm text-[var(--taupe)]">{w.intro}</p>
                  </div>
                  <ul className="space-y-2">
                    {w.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-[var(--taupe)]">
                        <span className="w-1 h-1 rounded-full bg-[var(--muted)] mt-1.5 flex-shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Packages */}
          <div>
            <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-2">Session Formats</p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[var(--text)] mb-2">
              One session is transformative. A series is lasting.
            </h2>
            <p className="text-[var(--taupe)] mb-10">
              Stretch therapy is available as a standalone session or as part of a structured series designed to produce cumulative, long-term results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PACKAGES.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative p-6 rounded-sm space-y-4 ${pkg.featured ? 'bg-[var(--text)] text-white' : 'bg-[var(--surface)]'}`}
                >
                  {pkg.featured && pkg.badge && (
                    <span className="absolute -top-3 left-6 text-xs bg-[var(--muted)] text-white px-3 py-1 rounded-full">{pkg.badge}</span>
                  )}
                  <div>
                    <p className={`font-[family-name:var(--font-cormorant)] text-xl font-medium ${pkg.featured ? 'text-white' : 'text-[var(--text)]'}`}>{pkg.name}</p>
                    <p className={`text-xs mt-0.5 ${pkg.featured ? 'text-white/60' : 'text-[var(--taupe)]'}`}>{pkg.sessions}</p>
                  </div>
                  <p className={`text-sm leading-relaxed ${pkg.featured ? 'text-white/80' : 'text-[var(--taupe)]'}`}>{pkg.desc}</p>
                  <ul className="space-y-1.5">
                    {pkg.details.map((d) => (
                      <li key={d} className={`flex items-start gap-2 text-xs ${pkg.featured ? 'text-white/70' : 'text-[var(--taupe)]'}`}>
                        <span className={`w-1 h-1 rounded-full mt-1.5 flex-shrink-0 ${pkg.featured ? 'bg-white/40' : 'bg-[var(--muted)]'}`} />{d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-sm text-[var(--taupe)] mt-8">
              Not sure which format is right for you? Book a consultation and your therapist will assess your goals, movement history, and current restrictions to recommend the approach that makes the most sense for your body.
            </p>
          </div>

          {/* Prep Tips */}
          <div>
            <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-2">Preparing for Your Session</p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[var(--text)] mb-10">
              What to expect &amp; wear
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PREP_TIPS.map((tip) => (
                <div key={tip.title} className="bg-[var(--bg)] border border-[var(--surface)] p-6 rounded-sm">
                  <h3 className="font-medium text-[var(--text)] mb-2">{tip.title}</h3>
                  <p className="text-sm text-[var(--taupe)] leading-relaxed">{tip.text}</p>
                </div>
              ))}
            </div>
          </div>

          <BookingButton label="Book a Stretch Session" location="both" />
        </div>
      </section>
    </>
  );
}
