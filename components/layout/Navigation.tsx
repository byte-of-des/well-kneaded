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
        <Link href="/" className="font-[family-name:var(--font-cormorant)] text-xl font-semibold tracking-wide text-[var(--text)]">
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
