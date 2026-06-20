import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import BookingButton from '@/components/ui/BookingButton';

export const metadata: Metadata = {
  title: 'Continuing Education Classes | Well Kneaded',
  description: 'NCBTMB-approved continuing education courses for massage therapists in Decatur, GA. MLD, stretch therapy, aromatherapy, CPR/BLS, and ethics credits.',
};

const COURSES = [
  {
    num: '01',
    title: 'Manual Lymphatic Drainage (MLD) Fundamentals',
    desc: 'A hands-on introduction to the Vodder technique of MLD. Covers anatomy of the lymphatic system, indications and contraindications, and foundational MLD strokes. Ideal for therapists working with post-surgical clients.',
    tags: ['8 CE Hours', 'Hands-On', 'Certificate Provided'],
  },
  {
    num: '02',
    title: 'Advanced MLD: Post-Surgical Applications',
    desc: 'For therapists who have completed MLD Fundamentals. Deep dive into post-mastectomy, post-liposuction, and post-reconstructive care. Includes scar tissue work and client communication for sensitive cases.',
    tags: ['8 CE Hours', 'Prerequisites Required', 'Certificate Provided'],
  },
  {
    num: '03',
    title: 'Stretch Therapy: PNF & Active Isolated Techniques',
    desc: 'Learn to incorporate assisted stretching into your practice. Covers PNF (Proprioceptive Neuromuscular Facilitation) and Active Isolated Stretching with hands-on supervised practice.',
    tags: ['6 CE Hours', 'Hands-On', 'Certificate Provided'],
  },
  {
    num: '04',
    title: 'Aromatherapy for Clinical Practice',
    desc: 'How to safely and effectively integrate essential oils into massage therapy. Covers chemistry basics, blending, client intake for aromatherapy, and evidence-based applications for pain, anxiety, and inflammation.',
    tags: ['4 CE Hours', 'Online Available', 'Certificate Provided'],
  },
  {
    num: '05',
    title: 'CPR & First Aid / BLS Certification',
    desc: 'American Heart Association-aligned CPR, AED, and First Aid training for healthcare providers. Required for most state LMT license renewals. Offered in a small group setting with hands-on mannequin practice.',
    tags: ['4 CE Hours', 'Certification', 'Renewal Available'],
  },
  {
    num: '06',
    title: 'Ethics & Boundaries in Massage Therapy',
    desc: 'Fulfills ethics CE requirements for most states. Covers professional boundaries, dual relationships, informed consent, scope of practice, and documentation best practices. Available online.',
    tags: ['3 CE Hours', 'Online Available', 'Ethics Credit'],
  },
];

const CPR_PRICING = [
  { level: 'Healthcare Professionals (BLS)', price: '$85', note: 'Book sold separately for $15' },
  { level: 'Family & Friends CPR', price: '$55/person', note: 'Groups of 4+. Book sold separately for $5' },
  { level: 'CPR (Adult & Child)', price: '$55', note: 'Massage/Bodywork Student pricing. Book sold separately for $5' },
  { level: 'Babysitter / Youth CPR (ages 8+)', price: '$45', note: 'Book sold separately for $5' },
];

export default function ClassesPage() {
  return (
    <>
      <PageHero title="Continuing Education" subtitle="NCBTMB-approved courses taught by Shanese Armstrong, LMT — since 2002." />
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-20">

          {/* Instructor */}
          <div className="bg-[var(--surface)] p-8 rounded-sm">
            <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-2">Your Instructor</p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)] mb-4">Shanese Armstrong, LMT</h2>
            <div className="space-y-3 text-sm text-[var(--taupe)] leading-relaxed">
              <p>
                With over two decades of teaching experience, Shanese brings clinical depth and real-world expertise to every course she teaches. Her background spans post-surgical care, manual lymphatic drainage, stretch therapy, aromatherapy, and CPR/BLS instruction.
              </p>
              <p>
                Students leave her courses with hands-on confidence, not just theory. Every class combines technique demonstrations, supervised practice, and the kind of clinical reasoning that only comes from years in practice.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {['NCBTMB Provider', 'AHA CPR Instructor', 'MLD Certified', 'LMT Since 2012', 'Educator Since 2002'].map((c) => (
                <span key={c} className="text-xs text-[var(--taupe)] bg-[var(--bg)] border border-[var(--surface)] px-3 py-1 rounded-full">{c}</span>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-2">Course Catalog</p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-[var(--text)] mb-2">What you&apos;ll learn</h2>
            <p className="text-[var(--taupe)] mb-10">
              All courses are available for licensed massage therapists seeking continuing education credits. Class sizes are intentionally small.
            </p>
            <div className="space-y-0 divide-y divide-[var(--surface)]">
              {COURSES.map((course) => (
                <div key={course.num} className="py-8 flex gap-6 items-start">
                  <span className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[var(--muted)] flex-shrink-0 w-8">{course.num}</span>
                  <div className="flex-1 space-y-3">
                    <h3 className="font-medium text-[var(--text)]">{course.title}</h3>
                    <p className="text-sm text-[var(--taupe)] leading-relaxed max-w-xl">{course.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {course.tags.map((tag) => (
                        <span key={tag} className="text-xs text-[var(--taupe)] border border-[var(--surface)] bg-[var(--surface)] px-2 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CPR Pricing */}
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)] mb-2">CPR Certification Rates</h2>
            <p className="text-sm text-[var(--taupe)] mb-6">Ongoing monthly classes. Contact us for current dates.</p>
            <div className="space-y-3">
              {CPR_PRICING.map(({ level, price, note }) => (
                <div key={level} className="bg-[var(--surface)] p-5 rounded-sm flex justify-between items-start gap-4">
                  <div>
                    <p className="text-sm font-medium text-[var(--text)]">{level}</p>
                    <p className="text-xs text-[var(--taupe)] mt-0.5">{note}</p>
                  </div>
                  <span className="text-sm font-medium text-[var(--muted)] flex-shrink-0">{price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Registration */}
          <div className="bg-[var(--surface)] p-8 rounded-sm">
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)] mb-4">How to Register</h2>
            <div className="space-y-2 text-sm text-[var(--taupe)] leading-relaxed mb-6">
              <p>Contact us directly to register for any course. Classes fill quickly — reach out early to reserve your spot.</p>
              <ul className="space-y-2 mt-4">
                {[
                  'Call (404) 565-1079 to register and confirm availability',
                  'Email info@wellkneadedcare.com with your name and the course you\'re interested in',
                  'Payment is due at time of registration to hold your spot',
                  'Cancellations must be made 48 hours in advance for a full refund',
                ].map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--muted)] mt-1.5 flex-shrink-0" />{step}
                  </li>
                ))}
              </ul>
            </div>
            <BookingButton label="Contact Us to Register" location="main" />
          </div>

        </div>
      </section>
    </>
  );
}
