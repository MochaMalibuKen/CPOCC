'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import CTAButton from './cta-button';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/offices', label: 'Offices for Lease' },
  { href: '/lily', label: 'Lily Event Center' },
  { href: '/business-lab', label: 'Business Lab', highlight: true },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 backdrop-blur bg-white/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-[150px]">
            <Image
              src="/cpocc-logo-dark.jpg"
              alt="CPOCC logo"
              fill
              className="object-contain"
              sizes="180px"
              priority
            />
          </div>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-semibold text-slate-800 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx('relative transition-colors hover:text-brand-gold', {
                'text-brand-navy': pathname === item.href,
                'text-slate-700': pathname !== item.href,
              })}
            >
              {item.label}
              {item.highlight && <span className="absolute -right-2 -top-2 inline-flex items-center rounded-full bg-lab-steel px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white">Lab</span>}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <CTAButton href="/contact" label="Schedule a tour" />
        </div>
      </div>
    </header>
  );
}
