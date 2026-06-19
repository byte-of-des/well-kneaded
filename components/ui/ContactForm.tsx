// components/ui/ContactForm.tsx
'use client';
import { useState } from 'react';

interface ExtraField {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}

interface ContactFormProps {
  extraFields?: ExtraField[];
}

const inputClass = "w-full border border-[var(--surface)] bg-white px-4 py-3 text-sm text-[var(--text)] rounded-sm focus:outline-none focus:border-[var(--muted)] transition-colors";

export default function ContactForm({ extraFields = [] }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-10">
        <p className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--text)]">Thank you!</p>
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
          <label htmlFor={field.name} className="block text-xs text-[var(--taupe)] mb-1 uppercase tracking-wide">{field.label}</label>
          <input id={field.name} name={field.name} type={field.type || 'text'} required={field.required} className={inputClass} />
        </div>
      ))}
      <div>
        <label htmlFor="name" className="block text-xs text-[var(--taupe)] mb-1 uppercase tracking-wide">Your Name</label>
        <input id="name" name="name" type="text" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs text-[var(--taupe)] mb-1 uppercase tracking-wide">Email Address</label>
        <input id="email" name="email" type="email" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="subject" className="block text-xs text-[var(--taupe)] mb-1 uppercase tracking-wide">Subject</label>
        <input id="subject" name="subject" type="text" className={inputClass} />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs text-[var(--taupe)] mb-1 uppercase tracking-wide">Message</label>
        <textarea id="message" name="message" rows={5} required className={inputClass} />
      </div>
      <button type="submit" className="w-full px-6 py-3 bg-[var(--text)] text-white text-sm rounded-sm hover:bg-[var(--muted)] transition-colors">
        Send Message
      </button>
    </form>
  );
}
