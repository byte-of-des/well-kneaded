'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { MenuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { NAV } from '@/lib/constants';
import { cn } from '@/lib/utils';

const BOOKING_URL = 'https://www.massagebook.com/therapists/WellKneadedBodyWorkandMassage?src=external';

export default function Navigation() {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--white)] border-b border-[var(--surface)] shadow-sm">
      {/* Announcement Bar */}
      <div className="bg-[var(--text)] text-white/75 text-[11px] py-2 px-6 flex items-center justify-center gap-3">
        <span className="bg-[var(--accent)] text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full flex-shrink-0">New Clients</span>
        <span className="hidden sm:inline">Mention this offer when booking for a complimentary wellness consultation</span>
        <span className="sm:hidden">Complimentary wellness consultation for new clients</span>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] font-semibold hover:text-white transition-colors flex-shrink-0">Book →</a>
      </div>

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="/images/logo2.png"
            alt="Well Kneaded logo"
            width={80}
            height={80}
            className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] object-contain flex-shrink-0"
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[var(--text)]" style={{ letterSpacing: '0.25em' }}>
              Well Kneaded
            </span>
            <span className="hidden lg:block text-[9px] tracking-widest text-[var(--muted)] uppercase">
              Massage · Wellness · Skincare · Decatur, GA
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {NAV.map((item) =>
              item.children ? (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuTrigger
                    className="text-sm text-[var(--text)] bg-transparent hover:bg-[var(--surface)] data-[state=open]:bg-[var(--surface)] h-9"
                  >
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-56 p-1.5">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={child.href}
                              className="block rounded-sm px-3 py-2 text-sm text-[var(--text)] hover:bg-[var(--surface)] hover:text-[var(--muted)] transition-colors"
                            >
                              {child.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'text-sm text-[var(--text)] bg-transparent hover:bg-[var(--surface)] h-9',
                      )}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center px-4 py-2 bg-[var(--text)] text-white text-sm rounded-sm hover:bg-[var(--muted)] transition-colors flex-shrink-0"
        >
          Book Now
        </a>

        {/* Mobile Book Now + hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-[var(--text)] text-white text-[11px] font-semibold rounded-sm tracking-wide"
          >
            Book
          </a>
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="border-[var(--surface)] bg-transparent">
              <MenuIcon className="h-4 w-4 text-[var(--text)]" />
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="max-h-[90dvh] overflow-auto bg-[var(--white)] border-[var(--surface)]">
            <SheetHeader className="text-left pb-2">
              <SheetTitle asChild>
                <Link
                  href="/"
                  className="flex items-center gap-3"
                  onClick={() => setSheetOpen(false)}
                >
                  <Image
                    src="/images/logo2.png"
                    alt="Well Kneaded logo"
                    width={63}
                    height={63}
                    className="w-[63px] h-[63px] object-contain"
                  />
                  <div className="flex flex-col leading-tight">
                    <span className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[var(--text)]">
                      Well Kneaded
                    </span>
                    <span className="text-[9px] tracking-widest text-[var(--muted)] uppercase">
                      Massage Therapies + Holistic Health + Skin Care
                    </span>
                  </div>
                </Link>
              </SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col px-1 pb-6 mt-2">
              {NAV.map((item) =>
                item.children ? (
                  <Accordion key={item.href} type="single" collapsible>
                    <AccordionItem value={item.href} className="border-b border-[var(--surface)]">
                      <AccordionTrigger className="text-sm font-normal text-[var(--text)] hover:no-underline py-3 px-2">
                        {item.label}
                      </AccordionTrigger>
                      <AccordionContent className="pb-0">
                        <div className="flex flex-col pl-3 pb-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="text-sm text-[var(--taupe)] py-2 hover:text-[var(--text)] transition-colors"
                              onClick={() => setSheetOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-[var(--text)] py-3 px-2 border-b border-[var(--surface)] hover:text-[var(--muted)] transition-colors"
                    onClick={() => setSheetOpen(false)}
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full inline-flex items-center justify-center px-4 py-3 bg-[var(--text)] text-white text-sm rounded-sm hover:bg-[var(--muted)] transition-colors"
              >
                Book Now
              </a>
            </nav>
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </header>
  );
}
