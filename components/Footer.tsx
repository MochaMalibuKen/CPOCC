import Link from 'next/link';
import { MapPin } from './icons';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Offices for Lease', href: '/offices' },
  { label: 'Lily Event Center', href: '/lily' },
  { label: 'Business Lab', href: '/business-lab' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-10 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-brand-navy text-white flex items-center justify-center font-semibold">C</div>
            <div>
              <p className="font-semibold text-brand-navy">CPOCC</p>
              <p className="text-sm text-slate-600">Citizens Park Office & Conference Center</p>
            </div>
          </div>
          <p className="text-sm text-slate-600">A professional home for business, events, and community growth in Aiken.</p>
          <p className="text-sm text-slate-600 flex items-start gap-2">
            <MapPin />
            640 Old Airport Rd<br />
            Aiken, SC 29801
          </p>
          <div className="text-sm text-slate-700 space-y-1">
            <div>Email: <a href="mailto:info@citizensparkocc.com" className="underline">info@citizensparkocc.com</a></div>
            <div>Phone: <a href="tel:18032260504" className="underline">803-226-0504</a></div>
            <div>Fax: 803-226-0482</div>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-700">
            <Link href="https://www.instagram.com/citizensparkocc/" target="_blank" rel="noopener noreferrer" className="underline">
              Instagram
            </Link>
            <Link href="https://www.facebook.com/CitizenparkConference" target="_blank" rel="noopener noreferrer" className="underline">
              Facebook
            </Link>
          </div>
          <p className="text-xs text-slate-500">Citizens Park Office & Conference Center is home to professional offices, event space, and the Citizen’s Park Business Development Lab.</p>
        </div>

        <div>
          <h4 className="font-semibold text-brand-navy mb-3">Quick Links</h4>
          <div className="grid gap-2 text-sm text-slate-700">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-brand-gold">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-brand-navy mb-3">Programs & Venues</h4>
          <div className="grid gap-2 text-sm text-slate-700">
            <Link href="/lily" className="hover:text-brand-gold">Lily Event Center</Link>
            <Link href="/business-lab" className="hover:text-brand-gold">Business Development Lab</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-brand-navy mb-3">Stay Connected</h4>
          <p className="text-sm text-slate-700">Schedule a visit or send an inquiry—we respond within one business day.</p>
          <Link href="/contact" className="btn-primary mt-3 inline-flex">Contact us</Link>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} CPOCC. All rights reserved.</div>
    </footer>
  );
}
