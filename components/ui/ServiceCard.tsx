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
        <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[var(--text)] mb-3 group-hover:text-[var(--muted)] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-[var(--taupe)] leading-relaxed">{description}</p>
      </div>
    </Link>
  );
}
