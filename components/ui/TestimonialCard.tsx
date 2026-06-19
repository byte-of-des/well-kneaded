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
