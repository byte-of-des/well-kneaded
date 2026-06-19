# Well Kneaded Site — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Recreate the full Well Kneaded Massage Therapies & Skincare website as a modern Next.js site with a Soft Modern aesthetic, preserving all content from the existing site at wellkneadedcare.com.

**Architecture:** App Router layout with shared navigation and footer. All content is static (no CMS or DB). MassageBook booking links are preserved as external links/iframes. Pages are organized under clean URL slugs. Components are split by responsibility: layout, ui primitives, and page sections.

**Tech Stack:** Next.js 16 (App Router), TypeScript, Tailwind CSS v4

---

## Color & Type System

```
Background:  #f7f4f0  (warm off-white)
Surface:     #e8e0d8  (light warm grey — cards, sections)
Text:        #2c2c2c  (charcoal)
Muted:       #7a8c7e  (sage — accents, links)
Taupe:       #b8a99a  (warm taupe — secondary)
White:       #ffffff
CTA:         #2c2c2c  (dark button) / hover: #7a8c7e
```

Font: `Cormorant Garamond` (headings) + `Inter` (body) — add via `next/font/google`

---

## File Structure

```
app/
  layout.tsx                          # Root layout: nav + footer
  globals.css                         # Tailwind base + CSS vars
  page.tsx                            # Home
  schedule/page.tsx
  meet-the-team/
    page.tsx                          # Team overview
    founder/page.tsx
    staff/page.tsx
    careers/page.tsx
  services/
    page.tsx                          # Services overview
    therapeutic-massage/page.tsx
    stretch-therapy/page.tsx
    wellness-detox/page.tsx
    corporate/page.tsx
  nutrition-response-testing/page.tsx
  resources/
    page.tsx                          # Resources hub
    faq/page.tsx
    forms-policies/page.tsx
    community-services/page.tsx
    classes/page.tsx
    referral-network/page.tsx
  contact/page.tsx
  events/page.tsx
  privacy-policy/page.tsx

components/
  layout/
    Navigation.tsx                    # Top nav with dropdowns
    Footer.tsx                        # Footer: contact, hours, social
  ui/
    BookingButton.tsx                 # CTA button linking to MassageBook
    PageHero.tsx                      # Page title + subtitle banner
    ServiceCard.tsx                   # Card for service listing
    TestimonialCard.tsx               # Quote + name
    ContactForm.tsx                   # Name/email/subject/message form

lib/
  constants.ts                        # All site content: hours, locations, nav, socials, pricing
```

---

## Task 1: Foundation — Design Tokens + Constants

**Files:**
- Modify: `app/globals.css`
- Create: `lib/constants.ts`

- [ ] **Step 1: Update globals.css with CSS variables and font imports**

```css
/* app/globals.css */
@import "tailwindcss";

:root {
  --bg: #f7f4f0;
  --surface: #e8e0d8;
  --text: #2c2c2c;
  --muted: #7a8c7e;
  --taupe: #b8a99a;
  --white: #ffffff;
}

body {
  background-color: var(--bg);
  color: var(--text);
}
```

Fonts are loaded via `next/font/google` in `layout.tsx` (Task 2 Step 3) — not via CSS `@import` — to follow App Router convention and avoid flash of unstyled text.

- [ ] **Step 2: Create lib/constants.ts with all site data**

```typescript
// lib/constants.ts
export const SITE = {
  name: 'Well Kneaded Massage Therapies & Skincare',
  phone: '(404) 565-1079',
  email: 'info@wellkneadedcare.com',
  altEmail: 'wellkneadedcare@gmail.com',
  founded: 2014,
};

export const LOCATIONS = [
  {
    name: 'Main — McConnell Drive',
    address: '1270 McConnell Drive Suite B',
    city: 'Decatur, GA 30033',
    bookingUrl: 'https://www.massagebook.com/biz/WellKneadedMassage',
  },
  {
    name: 'Satellite — Church Street',
    address: '603 Church St (Lotus of Life)',
    city: 'Decatur, GA 30030',
    bookingUrl: 'https://www.massagebook.com/biz/WellKneadedMassageChurch',
  },
];

export const HOURS = [
  { day: 'Monday', hours: '8:30am – 7:00pm' },
  { day: 'Tuesday', hours: '9:30am – 9:00pm' },
  { day: 'Wednesday', hours: '9:30am – 6:00pm' },
  { day: 'Thursday', hours: '9:00am – 7:00pm' },
  { day: 'Friday', hours: '8:00am – 6:00pm' },
  { day: 'Saturday', hours: '10:00am – 6:00pm' },
  { day: 'Sunday', hours: '9:00am – 7:00pm (limited staff — by appt. only)' },
];

export const SOCIAL = {
  facebook: 'https://www.facebook.com/WellKneadedInc',
  instagram: 'https://www.instagram.com/wellkneadeddecatur',
};

export const NAV = [
  { label: 'Home', href: '/' },
  {
    label: 'Meet the WK Crew',
    href: '/meet-the-team',
    children: [
      { label: 'Meet Our Founder/CEO', href: '/meet-the-team/founder' },
      { label: 'Meet Our Staff', href: '/meet-the-team/staff' },
      { label: 'Career Opportunities', href: '/meet-the-team/careers' },
    ],
  },
  {
    label: 'Rates & Services',
    href: '/services',
    children: [
      { label: 'Therapeutic Massage', href: '/services/therapeutic-massage' },
      { label: 'Stretch-n-Flex Therapy', href: '/services/stretch-therapy' },
      { label: 'Wellness & Detox', href: '/services/wellness-detox' },
      { label: 'Corporate Chair Massage', href: '/services/corporate' },
    ],
  },
  { label: 'Nutrition Response Testing™', href: '/nutrition-response-testing' },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'FAQs', href: '/resources/faq' },
      { label: 'Forms & Policies', href: '/resources/forms-policies' },
      { label: 'Community Services', href: '/resources/community-services' },
      { label: 'Classes', href: '/resources/classes' },
      { label: 'Referral Network', href: '/resources/referral-network' },
    ],
  },
  { label: 'Contact', href: '/contact' },
  { label: 'Event Calendar', href: '/events' },
];

export const TESTIMONIALS = [
  { quote: 'Great deal and therapist listened and took note of problem areas and addressed them.', name: 'Aimee M.' },
  { quote: 'I had an excellent experience with Well Kneaded and recommend it highly.', name: 'Sherri J.' },
  { quote: 'I have been going to Well Kneaded regularly for massage for a long time.', name: 'Mary A.' },
  { quote: 'I had a fabulous experience doing a stretch session at well-kneaded.', name: 'Laurie D.' },
  { quote: 'This place is so amazing. When I tell you amazing service, super calm atmosphere.', name: 'Amanda J.' },
  { quote: 'Wonderful massage, with added benefit of an ion foot detoxification and infrared sauna experience.', name: 'Francie O.' },
];
```

- [ ] **Step 3: Commit**

```bash
git add app/globals.css lib/constants.ts
git commit -m "feat: add design tokens, CSS vars, and site constants"
```

---

## Task 2: Shared Components — Navigation + Footer

**Files:**
- Create: `components/layout/Navigation.tsx`
- Create: `components/layout/Footer.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Create Navigation.tsx**

```tsx
// components/layout/Navigation.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { NAV } from '@/lib/constants';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-[var(--white)] border-b border-[var(--surface)] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="font-['Cormorant_Garamond'] text-xl font-semibold tracking-wide text-[var(--text)]">
          Well Kneaded
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className="text-sm text-[var(--text)] hover:text-[var(--muted)] transition-colors"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-[var(--surface)] shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-[var(--text)] hover:bg-[var(--bg)] hover:text-[var(--muted)] transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/schedule"
            className="ml-2 px-4 py-2 bg-[var(--text)] text-white text-sm rounded-sm hover:bg-[var(--muted)] transition-colors"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-[var(--text)] mb-1.5" />
          <span className="block w-6 h-0.5 bg-[var(--text)] mb-1.5" />
          <span className="block w-6 h-0.5 bg-[var(--text)]" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[var(--surface)] px-6 py-4 space-y-2">
          {NAV.map((item) => (
            <div key={item.href}>
              <button
                className="flex items-center justify-between w-full text-sm text-[var(--text)] py-2"
                onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
              >
                {item.label}
                {item.children && <span>{openDropdown === item.label ? '−' : '+'}</span>}
              </button>
              {item.children && openDropdown === item.label && (
                <div className="pl-4 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block text-sm text-[var(--muted)] py-1.5"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/schedule"
            className="block mt-4 px-4 py-2 bg-[var(--text)] text-white text-sm text-center rounded-sm"
            onClick={() => setMobileOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}
```

- [ ] **Step 2: Create Footer.tsx**

```tsx
// components/layout/Footer.tsx
import Link from 'next/link';
import { SITE, LOCATIONS, HOURS, SOCIAL } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-[var(--text)] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="font-['Cormorant_Garamond'] text-xl mb-4">Well Kneaded</h3>
          <p className="text-sm text-white/70 leading-relaxed">
            Holistic massage therapies, skincare, and pain management solutions in Decatur, GA. Established {SITE.founded}.
          </p>
          <div className="flex gap-4 mt-6">
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm transition-colors">Facebook</a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm transition-colors">Instagram</a>
          </div>
        </div>

        {/* Locations */}
        <div>
          <h4 className="text-sm font-medium uppercase tracking-widest text-white/50 mb-4">Locations</h4>
          <div className="space-y-4">
            {LOCATIONS.map((loc) => (
              <div key={loc.name}>
                <p className="text-sm font-medium">{loc.name}</p>
                <p className="text-sm text-white/60">{loc.address}</p>
                <p className="text-sm text-white/60">{loc.city}</p>
              </div>
            ))}
            <div className="pt-2 text-sm text-white/60 space-y-0.5">
              <p>{SITE.phone}</p>
              <p>{SITE.email}</p>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-sm font-medium uppercase tracking-widest text-white/50 mb-4">Hours</h4>
          <div className="space-y-1.5">
            {HOURS.map(({ day, hours }) => (
              <div key={day} className="flex justify-between text-sm">
                <span className="text-white/60 w-28">{day}</span>
                <span className="text-white/90">{hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-xs text-white/40">
        <span>© {SITE.founded}–{new Date().getFullYear()} {SITE.name}</span>
        <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Update app/layout.tsx**

```tsx
// app/layout.tsx
import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-cormorant',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Well Kneaded Massage Therapies & Skincare | Decatur, GA',
  description: 'Holistic massage therapy, skincare, and pain management in Decatur, GA. Therapeutic massage, stretch therapy, wellness & detox. Book online today.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-[var(--font-inter)]">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

> **Note for implementer:** Also update globals.css font references from `font-family: 'Cormorant Garamond'` to `font-family: var(--font-cormorant)` and `font-family: var(--font-inter)`, and update all Tailwind `font-['Cormorant_Garamond']` classes in components to `font-[family-name:var(--font-cormorant)]`.

- [ ] **Step 4: Run dev server and verify nav + footer render**

```bash
npm run dev
```
Open http://localhost:3000 — confirm sticky nav with dropdowns and footer with hours/locations appear.

- [ ] **Step 5: Commit**

```bash
git add components/ app/layout.tsx
git commit -m "feat: add navigation and footer with full site constants"
```

---

## Task 3: UI Primitives

**Files:**
- Create: `components/ui/PageHero.tsx`
- Create: `components/ui/BookingButton.tsx`
- Create: `components/ui/ServiceCard.tsx`
- Create: `components/ui/TestimonialCard.tsx`
- Create: `components/ui/ContactForm.tsx`

- [ ] **Step 1: Create PageHero.tsx**

```tsx
// components/ui/PageHero.tsx
interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-[var(--surface)] py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-medium text-[var(--text)] mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[var(--taupe)] text-lg leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create BookingButton.tsx**

```tsx
// components/ui/BookingButton.tsx
import { LOCATIONS } from '@/lib/constants';

interface BookingButtonProps {
  label?: string;
  location?: 'main' | 'satellite' | 'both';
  className?: string;
}

export default function BookingButton({ label = 'Book Now', location = 'main', className = '' }: BookingButtonProps) {
  if (location === 'both') {
    return (
      <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
        {LOCATIONS.map((loc) => (
          <a
            key={loc.name}
            href={loc.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[var(--text)] text-white text-sm text-center rounded-sm hover:bg-[var(--muted)] transition-colors"
          >
            Book — {loc.name}
          </a>
        ))}
      </div>
    );
  }

  const loc = location === 'satellite' ? LOCATIONS[1] : LOCATIONS[0];
  return (
    <a
      href={loc.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block px-6 py-3 bg-[var(--text)] text-white text-sm rounded-sm hover:bg-[var(--muted)] transition-colors ${className}`}
    >
      {label}
    </a>
  );
}
```

- [ ] **Step 3: Create ServiceCard.tsx**

```tsx
// components/ui/ServiceCard.tsx
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="bg-[var(--surface)] p-8 rounded-sm hover:shadow-md transition-shadow h-full">
        <h3 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[var(--text)] mb-3 group-hover:text-[var(--muted)] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-[var(--taupe)] leading-relaxed">{description}</p>
      </div>
    </Link>
  );
}
```

- [ ] **Step 4: Create TestimonialCard.tsx**

```tsx
// components/ui/TestimonialCard.tsx
interface TestimonialCardProps {
  quote: string;
  name: string;
}

export default function TestimonialCard({ quote, name }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-sm border border-[var(--surface)]">
      <p className="text-[var(--text)] text-sm leading-relaxed mb-4 italic">"{quote}"</p>
      <p className="text-[var(--muted)] text-xs font-medium uppercase tracking-widest">— {name}</p>
    </div>
  );
}
```

- [ ] **Step 5: Create ContactForm.tsx**

```tsx
// components/ui/ContactForm.tsx
'use client';
import { useState } from 'react';

interface ContactFormProps {
  extraFields?: { name: string; label: string; type?: string; required?: boolean }[];
}

export default function ContactForm({ extraFields = [] }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const inputClass = "w-full border border-[var(--surface)] bg-white px-4 py-3 text-sm text-[var(--text)] rounded-sm focus:outline-none focus:border-[var(--muted)] transition-colors";

  if (submitted) {
    return (
      <div className="text-center py-10">
        <p className="font-['Cormorant_Garamond'] text-2xl text-[var(--text)]">Thank you!</p>
        <p className="text-sm text-[var(--taupe)] mt-2">We'll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="space-y-4"
    >
      {extraFields.map((field) => (
        <div key={field.name}>
          <label className="block text-xs text-[var(--taupe)] mb-1 uppercase tracking-wide">{field.label}</label>
          <input name={field.name} type={field.type || 'text'} required={field.required} className={inputClass} />
        </div>
      ))}
      <div>
        <label className="block text-xs text-[var(--taupe)] mb-1 uppercase tracking-wide">Your Name</label>
        <input name="name" type="text" required className={inputClass} />
      </div>
      <div>
        <label className="block text-xs text-[var(--taupe)] mb-1 uppercase tracking-wide">Email Address</label>
        <input name="email" type="email" required className={inputClass} />
      </div>
      <div>
        <label className="block text-xs text-[var(--taupe)] mb-1 uppercase tracking-wide">Subject</label>
        <input name="subject" type="text" className={inputClass} />
      </div>
      <div>
        <label className="block text-xs text-[var(--taupe)] mb-1 uppercase tracking-wide">Message</label>
        <textarea name="message" rows={5} required className={inputClass} />
      </div>
      <button type="submit" className="w-full px-6 py-3 bg-[var(--text)] text-white text-sm rounded-sm hover:bg-[var(--muted)] transition-colors">
        Send Message
      </button>
    </form>
  );
}
```

- [ ] **Step 6: Commit**

```bash
git add components/ui/
git commit -m "feat: add UI primitives — PageHero, BookingButton, ServiceCard, TestimonialCard, ContactForm"
```

---

## Task 4: Homepage

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Write Homepage**

```tsx
// app/page.tsx
import Link from 'next/link';
import BookingButton from '@/components/ui/BookingButton';
import ServiceCard from '@/components/ui/ServiceCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { TESTIMONIALS } from '@/lib/constants';

const SERVICES = [
  { title: 'Therapeutic Massage', description: 'Deep tissue, Swedish, sports, pregnancy massage, and more — tailored to your body and pain points.', href: '/services/therapeutic-massage' },
  { title: 'Stretch-n-Flex Therapy', description: '1-on-1 assisted stretching sessions to increase range of motion and reduce muscle tension.', href: '/services/stretch-therapy' },
  { title: 'Wellness & Detox', description: 'Ionic foot detox, infrared sauna, red light therapy, and yoni steams for full-body restoration.', href: '/services/wellness-detox' },
  { title: 'Corporate Chair Massage', description: 'Bring the benefits of massage to your team. Healthy employees are productive employees.', href: '/services/corporate' },
];

const PAIN_POINTS = [
  'Sleepless nights from shoulder pain',
  'Neck aches from long days at the desk',
  'Migraines that won't respond to medication',
  'Post-surgery stiffness and recovery',
  'Chronic low back or hip pain',
  'Athletic injury and muscle tension',
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--surface)] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-4">Decatur, Georgia · Est. 2014</p>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-medium text-[var(--text)] mb-6 leading-tight">
            Pain Management.<br />Natural Solutions.
          </h1>
          <p className="text-[var(--taupe)] text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Affordable, comfortable, and therapeutic experiences that deliver real results — naturally. Specializing in post-surgery relief, chronic conditions, and injury recovery.
          </p>
          <BookingButton label="Schedule Your Appointment" location="both" />
        </div>
      </section>

      {/* Welcome */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-medium text-[var(--text)] mb-6">
            Welcome to Well Kneaded
          </h2>
          <p className="text-[var(--taupe)] leading-relaxed">
            Established in 2014 to address the overwhelming demand for an affordable, comfortable, therapeutic experience that delivers results — Naturally! We are on a mission to provide quality pain relief for people who suffer from chronic conditions through research-based treatments and natural healing.
          </p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-[var(--surface)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Cormorant_Garamond'] text-3xl font-medium text-[var(--text)] text-center mb-4">
            Sound familiar?
          </h2>
          <p className="text-center text-[var(--taupe)] mb-12">You don't have to keep living with it.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PAIN_POINTS.map((point) => (
              <div key={point} className="bg-white p-6 rounded-sm border border-[var(--surface)]">
                <p className="text-sm text-[var(--text)]">{point}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <BookingButton label="Book Your First Session" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Cormorant_Garamond'] text-3xl font-medium text-[var(--text)] text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[var(--surface)] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Cormorant_Garamond'] text-3xl font-medium text-[var(--text)] text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-['Cormorant_Garamond'] text-3xl font-medium text-[var(--text)] mb-6">
            Ready to feel better?
          </h2>
          <BookingButton label="Book Now" location="both" />
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Verify in browser**

Open http://localhost:3000 — confirm hero, services grid, testimonials, pain points section, and dual booking buttons all render correctly.

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: homepage with hero, services, pain points, testimonials"
```

---

## Task 5: Schedule Page

**Files:**
- Create: `app/schedule/page.tsx`

- [ ] **Step 1: Write Schedule page**

```tsx
// app/schedule/page.tsx
import PageHero from '@/components/ui/PageHero';
import BookingButton from '@/components/ui/BookingButton';
import Link from 'next/link';

export const metadata = {
  title: 'Schedule an Appointment | Well Kneaded',
};

export default function SchedulePage() {
  return (
    <>
      <PageHero
        title="Schedule an Appointment"
        subtitle="Choose a location below to book online through MassageBook."
      />
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <p className="text-[var(--taupe)]">
            Please{' '}
            <Link href="/resources/forms-policies" className="text-[var(--muted)] underline underline-offset-2">
              review our policies
            </Link>{' '}
            prior to your first appointment.
          </p>
          <BookingButton location="both" />
          <p className="text-xs text-[var(--taupe)]">
            Appointments only. Walk-ins are not currently available.
          </p>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/schedule/
git commit -m "feat: schedule page with dual booking buttons"
```

---

## Task 6: Meet the Team Pages

**Files:**
- Create: `app/meet-the-team/page.tsx`
- Create: `app/meet-the-team/founder/page.tsx`
- Create: `app/meet-the-team/staff/page.tsx`
- Create: `app/meet-the-team/careers/page.tsx`

- [ ] **Step 1: Team overview page**

```tsx
// app/meet-the-team/page.tsx
import PageHero from '@/components/ui/PageHero';
import Link from 'next/link';

export const metadata = { title: 'Meet the WK Crew | Well Kneaded' };

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
              <h3 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[var(--text)] mb-3 group-hover:text-[var(--muted)] transition-colors">{item.label}</h3>
              <p className="text-sm text-[var(--taupe)]">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Founder page**

```tsx
// app/meet-the-team/founder/page.tsx
import PageHero from '@/components/ui/PageHero';
import BookingButton from '@/components/ui/BookingButton';

export const metadata = { title: 'Meet Our Founder | Well Kneaded' };

const CREDENTIALS = [
  'Licensed Massage Therapist',
  'Massage Instructor',
  'Basic Life Support & CPR Instructor',
  'Stretch Therapist',
  'Business Mentor',
  'Burn Survivor Therapist',
  'Alternative Medicine Advocate',
  'Integrative Massage Reflexologist',
  'Manual Lymphatic Therapist',
  'Aromatherapist',
];

export default function FounderPage() {
  return (
    <>
      <PageHero title="Meet Our Founder & CEO" subtitle="Shanese Armstrong, LMT" />
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <h2 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[var(--text)] mb-4">Our Mission</h2>
            <p className="text-[var(--taupe)] leading-relaxed">
              "MAKE LIFE EASIER FOR Everyday People who have muscle discomfort or tension and pain from post surgeries, injuries, and chronic conditions."
            </p>
          </div>

          <div>
            <h2 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[var(--text)] mb-4">Background</h2>
            <p className="text-[var(--taupe)] leading-relaxed mb-4">
              Shanese has been an educator since 2002 and a massage therapist since 2012. She founded Well Kneaded LLC in 2013, driven by her own personal experience with hip dysplasia and chronic pain from childhood into adulthood.
            </p>
            <p className="text-[var(--taupe)] leading-relaxed">
              Nothing makes her happier than helping clients feel better and get through their day with less pain and discomfort. Well Kneaded specializes in cases others avoid — offering pain management, pain education, and self-care options for complicated chronic conditions. Chiropractors, pain doctors, physical therapists, psychologists, and other health professionals refer their patients with confidence.
            </p>
          </div>

          <div>
            <h2 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[var(--text)] mb-4">Credentials</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {CREDENTIALS.map((c) => (
                <li key={c} className="text-sm text-[var(--taupe)] flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[var(--muted)] inline-block flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[var(--text)] mb-4">By the Numbers</h2>
            <div className="grid grid-cols-3 gap-6 text-center">
              {[['2014', 'Year Founded'], ['1,000+', 'Clients Served'], ['99%', 'Satisfaction Rate']].map(([stat, label]) => (
                <div key={label} className="bg-[var(--surface)] p-6 rounded-sm">
                  <p className="font-['Cormorant_Garamond'] text-3xl font-medium text-[var(--text)]">{stat}</p>
                  <p className="text-xs text-[var(--taupe)] mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <BookingButton label="Book with Our Team" className="block text-center" />
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Staff page**

```tsx
// app/meet-the-team/staff/page.tsx
import PageHero from '@/components/ui/PageHero';
import BookingButton from '@/components/ui/BookingButton';

export const metadata = { title: 'Our Staff | Well Kneaded' };

export default function StaffPage() {
  return (
    <>
      <PageHero title="Meet Our Staff" subtitle="Licensed therapists and wellness practitioners." />
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-[var(--taupe)] leading-relaxed">
            Our team of licensed massage therapists brings expertise, care, and a genuine commitment to helping you feel your best. Ready to find the right match for your needs?
          </p>
          <BookingButton label="Book Us" location="both" />
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 4: Careers page**

```tsx
// app/meet-the-team/careers/page.tsx
import PageHero from '@/components/ui/PageHero';
import ContactForm from '@/components/ui/ContactForm';

export const metadata = { title: 'Career Opportunities | Well Kneaded' };

const EXTRA_FIELDS = [
  { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
  { name: 'address', label: 'Street Address', required: true },
  { name: 'city', label: 'City', required: true },
  { name: 'state', label: 'State or Province', required: true },
];

export default function CareersPage() {
  return (
    <>
      <PageHero title="Join the WK Team!" subtitle="Find your next opportunity at Well Kneaded." />
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-[var(--taupe)] mb-10 leading-relaxed">
            Welcome! Here you'll find various employment options available in our office. Fill out the form below or contact us directly to learn more.
          </p>
          <ContactForm extraFields={EXTRA_FIELDS} />
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 5: Commit**

```bash
git add app/meet-the-team/
git commit -m "feat: meet the team pages — overview, founder, staff, careers"
```

---

## Task 7: Services Pages

**Files:**
- Create: `app/services/page.tsx`
- Create: `app/services/therapeutic-massage/page.tsx`
- Create: `app/services/stretch-therapy/page.tsx`
- Create: `app/services/wellness-detox/page.tsx`
- Create: `app/services/corporate/page.tsx`

- [ ] **Step 1: Services overview**

```tsx
// app/services/page.tsx
import PageHero from '@/components/ui/PageHero';
import ServiceCard from '@/components/ui/ServiceCard';

export const metadata = { title: 'Rates & Services | Well Kneaded' };

const SERVICES = [
  { title: 'Therapeutic Massage', description: 'Swedish, deep tissue, sports, pregnancy, reflexology, cupping, hot stone, and more.', href: '/services/therapeutic-massage' },
  { title: 'Stretch-n-Flex Therapy', description: '1-on-1 assisted stretching using PNF, active isolated, static, and dynamic techniques.', href: '/services/stretch-therapy' },
  { title: 'Wellness & Detox', description: 'Ionic foot detox, infrared sauna, red light therapy, yoni steams, and whole foods supplements.', href: '/services/wellness-detox' },
  { title: 'Corporate Chair Massage', description: 'Workplace massage programs for teams of any size. Starting at $15/employee.', href: '/services/corporate' },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Rates & Services" subtitle="We meet you where you are physically and help you get to where you want to be — with less pain and more balance." />
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((s) => <ServiceCard key={s.href} {...s} />)}
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Therapeutic Massage page**

```tsx
// app/services/therapeutic-massage/page.tsx
import PageHero from '@/components/ui/PageHero';
import BookingButton from '@/components/ui/BookingButton';

export const metadata = { title: 'Therapeutic Massage | Well Kneaded' };

const MODALITIES = [
  { name: 'Swedish / Relaxation', desc: 'Long, flowing strokes to improve circulation, relieve tension, and promote relaxation.' },
  { name: 'Deep Tissue', desc: 'Targets deeper muscle layers and connective tissue for chronic tension in neck, back, and shoulders.' },
  { name: 'Neuromuscular Therapy', desc: 'Pressure applied to trigger points to release specific areas of skeletal muscle tension.' },
  { name: 'Hot Stone Therapy', desc: 'Smooth heated basalt stones relax muscles, increase circulation, and aid toxin removal.' },
  { name: 'Sports Massage', desc: 'Designed for active individuals — prevents injury, enhances performance, and uses PNF stretching.' },
  { name: 'Pregnancy / Prenatal', desc: 'Customized sessions to reduce stress, decrease swelling, and relieve aches in expectant mothers.' },
  { name: 'Aromatherapy', desc: 'Incorporates essential oils for relaxation, energy, stress reduction, or emotional balance.' },
  { name: 'Table Top Thai', desc: 'Combines stretching with deep rhythmic pressing — a blend of massage and assisted flexibility.' },
  { name: 'Reflexology', desc: 'Pressure applied to specific foot and hand points corresponding to organs and body systems.' },
  { name: 'Manual Lymphatic Drainage (MLD)', desc: 'Very light pressure to flush toxins and support the lymphatic system. Often done in a series.' },
  { name: 'Cupping', desc: 'Silicone cups create negative pressure to loosen muscles, reduce pain, and improve circulation.' },
];

const PRICING_NOTES = [
  '30, 60, or 90-minute sessions available',
  '60-minute session: $90 | 90-minute session: $135',
  'Monthly memberships available — contact us for rates',
  'SPOT Packages: 5, 8, or 12 sessions prepaid',
  'HSA / FSA cards accepted',
  'Physician referrals receive approved discounted rates',
];

export default function TherapeuticMassagePage() {
  return (
    <>
      <PageHero title="Therapeutic Massage" subtitle="Specializing in post-surgery relief, injuries, and chronic conditions." />
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Modalities */}
          <div>
            <h2 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[var(--text)] mb-8">Modalities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MODALITIES.map(({ name, desc }) => (
                <div key={name} className="bg-[var(--surface)] p-6 rounded-sm">
                  <h3 className="font-medium text-[var(--text)] mb-2">{name}</h3>
                  <p className="text-sm text-[var(--taupe)] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div>
            <h2 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[var(--text)] mb-6">Rates & Options</h2>
            <ul className="space-y-3">
              {PRICING_NOTES.map((note) => (
                <li key={note} className="flex items-start gap-3 text-sm text-[var(--taupe)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--muted)] mt-1.5 flex-shrink-0" />
                  {note}
                </li>
              ))}
            </ul>
          </div>

          <BookingButton label="Book a Session" location="both" />
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Stretch-n-Flex page**

```tsx
// app/services/stretch-therapy/page.tsx
import PageHero from '@/components/ui/PageHero';
import BookingButton from '@/components/ui/BookingButton';

export const metadata = { title: 'Stretch-n-Flex Therapy | Well Kneaded' };

export default function StretchTherapyPage() {
  return (
    <>
      <PageHero title="Stretch-n-Flex Therapy" subtitle="1-on-1 assisted stretching to increase flexibility and reduce pain." />
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          <p className="text-[var(--taupe)] leading-relaxed">
            A customized 1-on-1 assisted stretch session that incorporates active isolated stretching, Proprioceptive Neuromuscular Facilitation (PNF), static and dynamic stretching to increase range of motion and maximize soft tissue movement throughout the body.
          </p>

          <div>
            <h2 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[var(--text)] mb-4">Benefits</h2>
            <ul className="space-y-2">
              {['Increase joint range of motion', 'Reduce pain and muscle discomfort', 'Enhance flexibility', 'Correct muscle imbalances', 'Improve athletic performance'].map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-[var(--taupe)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--muted)] flex-shrink-0" />{b}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[var(--text)] mb-4">Packages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['4 Sessions', '6 Sessions', '8 Sessions'].map((pkg) => (
                <div key={pkg} className="bg-[var(--surface)] p-6 text-center rounded-sm">
                  <p className="font-['Cormorant_Garamond'] text-xl font-medium text-[var(--text)]">{pkg}</p>
                  <p className="text-xs text-[var(--taupe)] mt-1">30 or 60-minute sessions</p>
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
```

- [ ] **Step 4: Wellness & Detox page**

```tsx
// app/services/wellness-detox/page.tsx
import PageHero from '@/components/ui/PageHero';
import BookingButton from '@/components/ui/BookingButton';

export const metadata = { title: 'Wellness & Detox | Well Kneaded' };

const SERVICES = [
  { name: 'Ionic Foot Detox', duration: '30 min', desc: 'Facilitates body alkalization through ionization, removing free radicals and increasing pH levels. Continues alkalizing for up to 48 hours post-treatment.' },
  { name: 'Infrared Sauna', duration: '30 or 45 min · $30 add-on', desc: 'Eliminates 7× more toxins than traditional saunas. Reduces inflammation, improves circulation, burns calories, and relieves muscle and joint pain.' },
  { name: 'Red Light Therapy', duration: '$30 add-on', desc: 'Non-invasive, painless treatment using low-intensity red and near-infrared light. Addresses acne, hair growth, wound healing, inflammation, and collagen production.' },
  { name: 'Yoni Steams', duration: 'By appointment', desc: 'Herbal vaginal steaming with mugwort, rosemary, wormwood, and basil. Supports pH balance, menstrual regulation, fertility, and postpartum recovery.' },
  { name: 'Whole Foods Supplements', duration: 'Ongoing', desc: 'Nutritional supplements from whole food sources to address deficiencies and support overall health.' },
];

export default function WellnessDetoxPage() {
  return (
    <>
      <PageHero title="Wellness & Detox" subtitle="Up to 85% of all illness is created by toxins. We help your body restore balance." />
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {SERVICES.map(({ name, duration, desc }) => (
            <div key={name} className="bg-[var(--surface)] p-8 rounded-sm">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
                <h3 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[var(--text)]">{name}</h3>
                <span className="text-xs text-[var(--muted)] uppercase tracking-wide mt-1 sm:mt-0">{duration}</span>
              </div>
              <p className="text-sm text-[var(--taupe)] leading-relaxed">{desc}</p>
            </div>
          ))}
          <BookingButton label="Book a Wellness Session" location="both" />
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 5: Corporate page**

```tsx
// app/services/corporate/page.tsx
import PageHero from '@/components/ui/PageHero';
import { SITE } from '@/lib/constants';

export const metadata = { title: 'Corporate Chair Massage | Well Kneaded' };

const BENEFITS = [
  { title: 'Decreases Employee Stress', desc: 'Stress-related turnover and absenteeism cost companies an estimated $200 billion annually. Massage lowers anxiety and hostility.' },
  { title: 'Increases Productivity', desc: 'Revitalized minds become more productive. Your team leaves energized and focused.' },
  { title: 'Keeps Employees Healthy', desc: 'Reduces blood pressure, relieves arthritis, and improves neck/back pain from excessive sitting and computer use.' },
  { title: 'Boosts Morale', desc: 'Position massage as a meaningful employee benefit. 90% of employees will participate in a chair massage program.' },
  { title: 'Cost-Efficient', desc: 'Pricing begins as little as $15 per employee — often cheaper than providing free coffee.' },
  { title: 'Same-Day Results', desc: 'Noticeable results that last for weeks, delivered in a single session.' },
];

export default function CorporatePage() {
  return (
    <>
      <PageHero title="Corporate Chair Massage" subtitle="Healthy employees are productive employees." />
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BENEFITS.map(({ title, desc }) => (
              <div key={title} className="bg-[var(--surface)] p-6 rounded-sm">
                <h3 className="font-medium text-[var(--text)] mb-2">{title}</h3>
                <p className="text-sm text-[var(--taupe)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center bg-[var(--surface)] py-12 px-8 rounded-sm">
            <h2 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[var(--text)] mb-4">Get a Quote</h2>
            <p className="text-[var(--taupe)] mb-6">Starting at $15 per employee. Packages available for any team size or event.</p>
            <a href={`tel:${SITE.phone.replace(/\D/g, '')}`} className="inline-block px-6 py-3 bg-[var(--text)] text-white text-sm rounded-sm hover:bg-[var(--muted)] transition-colors">
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 6: Commit**

```bash
git add app/services/
git commit -m "feat: all services pages — overview, massage, stretch, wellness, corporate"
```

---

## Task 8: Nutrition Response Testing + Resources Pages

**Files:**
- Create: `app/nutrition-response-testing/page.tsx`
- Create: `app/resources/page.tsx`
- Create: `app/resources/faq/page.tsx`
- Create: `app/resources/forms-policies/page.tsx`
- Create: `app/resources/community-services/page.tsx`
- Create: `app/resources/classes/page.tsx`
- Create: `app/resources/referral-network/page.tsx`

- [ ] **Step 1: Nutrition Response Testing page**

```tsx
// app/nutrition-response-testing/page.tsx
import PageHero from '@/components/ui/PageHero';
import { SITE } from '@/lib/constants';

export const metadata = { title: 'Nutrition Response Testing™ | Well Kneaded' };

const BENEFITS = [
  'Skin issue resolution', 'Reduced or eliminated headaches and migraines',
  'Weight loss', 'Vision restoration', 'Enhanced sleep quality',
  'Improved emotional wellbeing', 'Increased energy levels',
  'Easier menstrual cycles', 'Chronic neck and knee pain relief',
  'Seizure cessation', 'Digestive problem correction',
];

export default function NRTPage() {
  return (
    <>
      <PageHero title="Nutrition Response Testing™" subtitle="A non-invasive system for determining the underlying causes of ill health." />
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <h2 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[var(--text)] mb-4">What is NRT?</h2>
            <p className="text-[var(--taupe)] leading-relaxed">
              Nutrition Response Testing™, developed by Dr. Freddy Ulan, DC, is a non-invasive system of analyzing the body to determine underlying causes of ill or non-optimal health through neurological reflex testing. Based on results, we recommend personalized whole-food or homeopathic supplements to support natural healing.
            </p>
          </div>
          <div>
            <h2 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[var(--text)] mb-4">Reported Client Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {BENEFITS.map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-[var(--taupe)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--muted)] flex-shrink-0" />{b}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[var(--surface)] p-8 rounded-sm text-center">
            <h2 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[var(--text)] mb-4">Free Consultation</h2>
            <p className="text-sm text-[var(--taupe)] mb-6">Contact our office for a free Nutrition Response Testing consultation today.</p>
            <a href={`tel:${SITE.phone.replace(/\D/g, '')}`} className="inline-block px-6 py-3 bg-[var(--text)] text-white text-sm rounded-sm hover:bg-[var(--muted)] transition-colors">
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Resources hub**

```tsx
// app/resources/page.tsx
import PageHero from '@/components/ui/PageHero';
import Link from 'next/link';

export const metadata = { title: 'Resources | Well Kneaded' };

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
              <h3 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[var(--text)] mb-3 group-hover:text-[var(--muted)] transition-colors">{label}</h3>
              <p className="text-sm text-[var(--taupe)]">{desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: FAQ page**

```tsx
// app/resources/faq/page.tsx
import PageHero from '@/components/ui/PageHero';

export const metadata = { title: 'FAQs | Well Kneaded' };

const FAQS = [
  { q: 'How often should I get a massage?', a: 'We recommend starting with one or two sessions weekly for the first four to six weeks depending on your needs, then gradually increasing time between sessions as symptoms improve. For preventative care or daily stress management, one session per month is common.' },
  { q: 'What is included in the session time?', a: 'The session includes treatment time, time to get on and off the table, and time to communicate before and after with your therapist to truly customize your experience.' },
  { q: 'How much should I tip?', a: 'We recommend tipping 15%, 18%, or 20%+ based on the full price of a regular session (60 min: $90 / 90 min: $135).' },
  { q: 'Do I need to undress completely?', a: 'You should undress to your desired level of comfort. About half our clients prefer to be completely undressed (but fully draped), while others prefer to keep undergarments on.' },
  { q: 'Will I be covered during the session?', a: 'You will be properly draped (covered) at all times to keep you warm and comfortable.' },
  { q: 'What should I expect on my first visit?', a: 'Your therapist will complete a health history form and ask about desired focus areas and any health concerns before beginning your session.' },
  { q: 'Will massage hurt?', a: 'Massage should not hurt. Deep tissue work may cause some discomfort — on a scale of 1–10 you may experience up to a 7. Always communicate with your therapist about pressure.' },
  { q: 'Can I get a massage while pregnant?', a: 'Yes! We have therapists who specialize in pregnancy (prenatal) massage.' },
  { q: 'Can massages help with headaches and migraines?', a: 'Yes! Getting relief doesn\'t have to mean only medication or sitting in the dark. Massage can be a powerful tool for migraine management.' },
];

export default function FAQPage() {
  return (
    <>
      <PageHero title="Frequently Asked Questions" subtitle="This is your session. Speak up — we're here to help." />
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {FAQS.map(({ q, a }) => (
            <div key={q} className="bg-[var(--surface)] p-8 rounded-sm">
              <h3 className="font-medium text-[var(--text)] mb-3">{q}</h3>
              <p className="text-sm text-[var(--taupe)] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 4: Forms & Policies page**

```tsx
// app/resources/forms-policies/page.tsx
import PageHero from '@/components/ui/PageHero';

export const metadata = { title: 'Forms & Policies | Well Kneaded' };

export default function FormsPoliciesPage() {
  return (
    <>
      <PageHero title="Forms & Policies" subtitle="Please complete the relevant forms before your first appointment." />
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[var(--text)] mb-4">Intake Forms</h2>
            <p className="text-[var(--taupe)] mb-6 text-sm">Please click the links and fill out the forms below prior to your first appointment.</p>
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
            <h2 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[var(--text)] mb-4">Financial Policy</h2>
            <div className="space-y-4 text-sm text-[var(--taupe)] leading-relaxed">
              <p>Full payment is due at the time of your appointment. We accept cash, checks (with ID), major credit cards, HSA, and FSA.</p>
              <p>A $50 fee applies to returned checks. A credit card on file is required at booking; it is charged only for no-shows or late cancellations with less than 4-hour notice.</p>
              <p>A $25 no-show/late cancellation fee applies to all steam services.</p>
            </div>
          </div>

          <div>
            <h2 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[var(--text)] mb-4">Clinic Waiver</h2>
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
```

- [ ] **Step 5: Community Services page**

```tsx
// app/resources/community-services/page.tsx
import PageHero from '@/components/ui/PageHero';
import { SITE } from '@/lib/constants';

export const metadata = { title: 'Community Services | Well Kneaded' };

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
              <h3 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[var(--text)] mb-3">{title}</h3>
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
```

- [ ] **Step 6: Classes page**

```tsx
// app/resources/classes/page.tsx
import PageHero from '@/components/ui/PageHero';
import ContactForm from '@/components/ui/ContactForm';

export const metadata = { title: 'Classes | Well Kneaded' };

const CPR_PRICING = [
  { level: 'Healthcare Professionals (BLS)', price: '$85', note: 'Book sold separately for $15' },
  { level: 'Family & Friends CPR', price: '$55/person', note: 'Groups of 4+. Book sold separately for $5' },
  { level: 'CPR (Adult & Child)', price: '$55', note: 'Massage/Bodywork Student pricing. Book sold separately for $5' },
  { level: 'Babysitter / Youth CPR (ages 8+)', price: '$45', note: 'Book sold separately for $5' },
];

export default function ClassesPage() {
  return (
    <>
      <PageHero title="Classes" subtitle="Educational events, CPR certification, and workshops throughout the year." />
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[var(--text)] mb-2">CPR Certification</h2>
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
          <div>
            <h2 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[var(--text)] mb-6">Sign Up for a Class</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 7: Referral Network page**

```tsx
// app/resources/referral-network/page.tsx
import PageHero from '@/components/ui/PageHero';
import ContactForm from '@/components/ui/ContactForm';

export const metadata = { title: 'Referral Network | Well Kneaded' };

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
```

- [ ] **Step 8: Commit**

```bash
git add app/nutrition-response-testing/ app/resources/
git commit -m "feat: NRT page and all resources sub-pages"
```

---

## Task 9: Contact, Events, Privacy Policy Pages

**Files:**
- Create: `app/contact/page.tsx`
- Create: `app/events/page.tsx`
- Create: `app/privacy-policy/page.tsx`

- [ ] **Step 1: Contact page**

```tsx
// app/contact/page.tsx
import PageHero from '@/components/ui/PageHero';
import ContactForm from '@/components/ui/ContactForm';
import { SITE, LOCATIONS, HOURS, SOCIAL } from '@/lib/constants';

export const metadata = { title: 'Contact | Well Kneaded' };

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" subtitle="We'd love to hear from you." />
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="font-['Cormorant_Garamond'] text-xl font-medium text-[var(--text)] mb-3">Get in Touch</h2>
              <p className="text-sm text-[var(--taupe)]">{SITE.phone}</p>
              <p className="text-sm text-[var(--taupe)]">{SITE.email}</p>
              <div className="flex gap-4 mt-3">
                <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--muted)] hover:underline">Facebook</a>
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--muted)] hover:underline">Instagram</a>
              </div>
            </div>
            <div>
              <h2 className="font-['Cormorant_Garamond'] text-xl font-medium text-[var(--text)] mb-3">Locations</h2>
              <div className="space-y-4">
                {LOCATIONS.map((loc) => (
                  <div key={loc.name}>
                    <p className="text-sm font-medium text-[var(--text)]">{loc.name}</p>
                    <p className="text-sm text-[var(--taupe)]">{loc.address}</p>
                    <p className="text-sm text-[var(--taupe)]">{loc.city}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-['Cormorant_Garamond'] text-xl font-medium text-[var(--text)] mb-3">Hours</h2>
              <div className="space-y-1.5">
                {HOURS.map(({ day, hours }) => (
                  <div key={day} className="flex gap-4 text-sm">
                    <span className="text-[var(--taupe)] w-24 flex-shrink-0">{day}</span>
                    <span className="text-[var(--text)]">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Events page**

```tsx
// app/events/page.tsx
import PageHero from '@/components/ui/PageHero';

export const metadata = { title: 'Event Calendar | Well Kneaded' };

const PAST_EVENTS = [
  {
    date: 'February 16, 2024',
    title: 'Couples Massage Class',
    time: '6:30pm – 9:30pm',
    location: '1270 McConnell Drive, Suite B, Decatur GA',
    desc: 'Plan something new this Valentine\'s Day. Learn awesome massage techniques to show your loved one!',
  },
  {
    date: 'August 22, 2022',
    title: 'Customer Appreciation / Open House',
    time: '12:00pm – 3:00pm',
    location: 'Decatur, GA',
    desc: 'Games, food, and prizes. A celebration of our community.',
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero title="Event Calendar" subtitle="Classes, workshops, and community events." />
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center bg-[var(--surface)] py-12 px-8 rounded-sm">
            <p className="font-['Cormorant_Garamond'] text-2xl font-medium text-[var(--text)]">No upcoming events</p>
            <p className="text-sm text-[var(--taupe)] mt-2">Check back soon or follow us on social media for announcements.</p>
          </div>
          <div>
            <h2 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[var(--text)] mb-6">Past Events</h2>
            <div className="space-y-6">
              {PAST_EVENTS.map(({ date, title, time, location, desc }) => (
                <div key={title} className="bg-[var(--surface)] p-6 rounded-sm">
                  <p className="text-xs text-[var(--muted)] uppercase tracking-wide mb-2">{date} · {time}</p>
                  <h3 className="font-medium text-[var(--text)] mb-1">{title}</h3>
                  <p className="text-xs text-[var(--taupe)] mb-2">{location}</p>
                  <p className="text-sm text-[var(--taupe)]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Privacy Policy page**

```tsx
// app/privacy-policy/page.tsx
import PageHero from '@/components/ui/PageHero';
import { SITE } from '@/lib/constants';

export const metadata = { title: 'Privacy Policy | Well Kneaded' };

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto prose prose-sm text-[var(--taupe)] space-y-6 leading-relaxed">
          <p>At Well Kneaded Massage Therapies and Skincare, we are strongly committed to protecting your privacy and providing a safe, high-quality online experience for all visitors.</p>
          <p>We have developed this Privacy Policy to inform you of our policies regarding the collection, use, and disclosure of information we receive from users of this website. This site is operated by {SITE.name}.</p>
          <p>Our Privacy Policy, along with our Terms & Conditions, governs your use of this site. By accessing wellkneadedcare.com or accepting Terms of Use, you consent to these policies.</p>
          <p>Customers may access and modify personal information via website instructions or by emailing {SITE.altEmail}. Marketing communications can be managed through unsubscribe links in emails, though transactional emails cannot be opted out of.</p>
          <p>We will try to accommodate any requests related to the management of personal information in a timely manner. Complete removal isn't always possible due to legal retention requirements.</p>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add app/contact/ app/events/ app/privacy-policy/
git commit -m "feat: contact, events, and privacy policy pages"
```

---

## Task 10: Final QA + Production Deploy

- [ ] **Step 1: Run build to catch TypeScript and compilation errors**

```bash
npm run build
```
Expected: clean build with no errors.

- [ ] **Step 2: Test all routes in browser**

Start dev server (`npm run dev`) and verify each route loads:
- `/` — homepage
- `/schedule`
- `/meet-the-team`, `/meet-the-team/founder`, `/meet-the-team/staff`, `/meet-the-team/careers`
- `/services`, `/services/therapeutic-massage`, `/services/stretch-therapy`, `/services/wellness-detox`, `/services/corporate`
- `/nutrition-response-testing`
- `/resources`, `/resources/faq`, `/resources/forms-policies`, `/resources/community-services`, `/resources/classes`, `/resources/referral-network`
- `/contact`
- `/events`
- `/privacy-policy`

- [ ] **Step 3: Check nav dropdowns on desktop + mobile menu**

Resize browser to mobile width and confirm hamburger menu opens, dropdowns work, and all links navigate correctly.

- [ ] **Step 4: Deploy to Vercel production**

```bash
vercel --prod --scope destinys-projects-4222d816
```

- [ ] **Step 5: Verify live URL**

Open https://well-kneaded.vercel.app and confirm the production site loads correctly.

- [ ] **Step 6: Final commit**

```bash
git add .
git commit -m "chore: production build verified"
git push origin main
```
