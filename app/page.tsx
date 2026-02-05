import Section from '@/components/section';
import CTAButton from '@/components/cta-button';
import Card from '@/components/card';
import Badge from '@/components/badge';
import Link from 'next/link';
import Image from 'next/image';

const chooser = [
  { title: 'Book an Event', copy: 'Venue rentals at the Lily Event Center.', href: '/lily' },
  { title: 'Find Office Space', copy: 'Traditional offices and suites ready for move-in.', href: '/offices' },
  { title: 'Grow My Business', copy: 'Membership-based support through the Business Development Lab.', href: '/business-lab' },
];

const credibilityCopy =
  'CPOCC brings together professionals, organizations, and the community in a space designed for clarity, focus, and long-term use. Whether you are hosting an event, leasing an office, or developing your business, CPOCC offers a setting that is intentional, professional, and accessible.';

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Section background="muted">
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Badge tone="warning">Now Leasing</Badge>
              <Badge tone="warning">Booking Events</Badge>
              <Badge tone="warning">Accepting Membership Inquiries</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading text-brand-navy leading-tight">A Home for Business, Meetings, and Community Growth</h1>
            <p className="lead max-w-2xl">
              Citizens Park Office & Conference Center provides professional office space, meeting rooms, event facilities, and business support programs in a well-managed, centrally located setting in Aiken.
            </p>
            <div className="flex flex-wrap gap-3">
              <CTAButton href="/lily" label="Book an Event" />
              <CTAButton href="/offices" label="Explore Office Space" variant="secondary" />
              <CTAButton href="/business-lab" label="Visit the Business Lab" variant="secondary" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="card-surface relative overflow-hidden p-6 md:p-8 shadow-soft">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-neutral/60 via-white to-brand-gold/10" aria-hidden />
              <div className="relative z-10 grid gap-6 md:grid-cols-[1fr_auto] items-center">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">CPOCC campus</p>
                  <h3 className="text-2xl font-heading text-brand-navy">Offices, events, and the Business Development Lab</h3>
                  <p className="text-sm text-slate-700 max-w-xl">
                    One address for professional offices, meeting space, and programs that help local businesses launch and grow.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 border border-slate-200 shadow-sm">Lease offices and suites</span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 border border-slate-200 shadow-sm">Book events and meetings</span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 border border-slate-200 shadow-sm">Join the Business Lab</span>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-white/90 border border-slate-200 rounded-2xl p-4 shadow-soft">
                  <div className="relative h-24 w-36 sm:h-28 sm:w-40">
                    <Image src="/cpocc-logo.png" alt="CPOCC primary logo" fill className="object-contain drop-shadow" sizes="(min-width: 768px) 160px, 140px" priority />
                  </div>
                </div>
              </div>
            </div>

            <div className="card-surface p-6 space-y-4">
              <p className="text-sm font-semibold text-brand-navy uppercase tracking-[0.2em]">What brings you here today?</p>
              <div className="grid-auto-fit">
                {chooser.map((item) => (
                  <Link key={item.href} href={item.href} className="block card-surface p-4 hover:-translate-y-1 transition transform">
                    <p className="text-sm uppercase tracking-[0.15em] text-brand-gold">{item.title}</p>
                    <p className="text-base font-semibold text-brand-navy">{item.copy}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Programs within one campus" subtitle="CPOCC" background="panel">
        <Card>
          <p>{credibilityCopy}</p>
        </Card>
      </Section>

      <Section title="Campus snapshots" background="muted">
        <div className="grid gap-4 sm:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="placeholder-img aspect-[4/3]">Image placeholder {i}</div>
          ))}
        </div>
      </Section>

      <Section title="From Instagram" subtitle="@citizensparkocc" background="panel">
        <div className="grid gap-6 md:grid-cols-[1fr_0.65fr] items-start">
          <div className="card-surface p-6 space-y-3 border border-slate-200/80">
            <p className="lead text-brand-navy">See recent campus moments, event setups, and Business Lab highlights.</p>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 bg-white">
              <iframe
                src="https://www.instagram.com/citizensparkocc/embed"
                title="CPOCC Instagram feed"
                className="h-full w-full"
                allowTransparency
                loading="lazy"
              />
            </div>
            <div className="flex gap-3 flex-wrap">
              <CTAButton href="https://www.instagram.com/citizensparkocc/" label="Follow on Instagram" />
              <CTAButton href="/contact" label="Book a tour" variant="secondary" />
            </div>
          </div>
          <div className="card-surface p-6 border border-slate-200/80 space-y-2">
            <p className="text-sm uppercase tracking-[0.2em] text-brand-gold">Stay connected</p>
            <p className="text-slate-700">We post availability updates, event looks, and Business Lab programming.</p>
            <p className="text-sm text-slate-600">If the feed doesn’t load in your browser, use the follow button to view on Instagram.</p>
          </div>
        </div>
      </Section>

      <Section background="panel" className="py-12">
        <div className="card-surface p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-heading text-brand-navy">Schedule a tour or planning call</h3>
            <p className="text-slate-700">Tell us whether you need offices, event space, or membership; we will route you directly.</p>
          </div>
          <div className="flex gap-3">
            <CTAButton href="/contact" label="Schedule a Tour" />
            <CTAButton href="/offices" label="View Available Offices" variant="secondary" />
          </div>
        </div>
      </Section>
    </div>
  );
}
