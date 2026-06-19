// components/ui/PageHero.tsx
interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-[var(--surface)] py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-medium text-[var(--text)] mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[var(--taupe)] text-lg leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
