import Section from '@/components/section';
import Card from '@/components/card';
import CTAButton from '@/components/cta-button';
import LabForm from '@/components/forms/LabForm';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Citizen’s Park Business Development Lab | CPOCC',
  description: 'Membership-based workspace and business support at the CPBDL within CPOCC. Flexible passes, meeting rooms, and resources.',
};

const memberships = [
  { name: 'Day Pass', detail: 'Access to shared workspace for a single day; reserve in advance.' },
  { name: 'Part-Time', detail: 'A set number of days per month with meeting room credits.' },
  { name: 'Full-Time', detail: 'Unlimited shared workspace access with extended hours.' },
  { name: 'Dedicated Desk', detail: 'Assigned desk plus storage within the Lab.' },
  { name: 'Private Office', detail: 'Limited availability; includes Lab programming access.' },
];

const benefits = [
  'Professional shared workspace',
  'Meeting and conference rooms',
  'High-speed internet',
  'Printing and administrative equipment',
  'Business address and mail handling',
  'Training and classroom spaces',
];

export default function BusinessLabPage() {
  return (
    <div>
      <Section
        title="Workspace, advisory, and meeting space built for local business"
        subtitle="Citizen’s Park Business Development Lab · A program of CPOCC"
        background="muted"
      >
        <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] items-start">
          <div className="card-surface overflow-hidden border border-lab-mist/70 shadow-soft">
            <div className="bg-gradient-to-br from-white via-lab-mist/60 to-white px-6 py-6 md:px-8 md:py-7 grid gap-6 md:grid-cols-[1.2fr_0.9fr] items-center">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.28em] text-lab-steel">Business Development Lab</p>
                <h3 className="text-2xl font-heading text-brand-navy">Professional space with built-in guidance</h3>
                <p className="text-sm text-slate-700 max-w-2xl">
                  Flexible work areas, private rooms, and advisory resources for small businesses, founders, and remote professionals in Aiken.
                </p>
              </div>
              <div className="relative mx-auto h-32 w-40 md:h-40 md:w-52 flex items-center justify-center bg-white rounded-2xl border border-lab-mist/70 shadow-soft">
                <Image
                  src="/bdl-logo.png"
                  alt="CPOCC Business Development Lab logo"
                  fill
                  className="object-contain p-4"
                  sizes="(min-width: 1024px) 208px, (min-width: 768px) 180px, 160px"
                  priority
                />
              </div>
            </div>
            <div className="px-6 pb-6 md:px-8 md:pb-8 space-y-5">
              <p className="lead">
                Build momentum without a long lease. Choose the access level that matches your workload and add meeting space, mail services, and programming as you grow.
              </p>
              <div className="grid-auto-fit">
                {benefits.map((b) => (
                  <Card key={b} title={b} className="bg-lab-mist/70 border border-lab-mist/60" />
                ))}
              </div>
              <p className="text-sm text-slate-650">The Lab operates within the CPOCC campus and is focused on business growth, not coworking for its own sake.</p>
              <Card title="Strategic partnership with USC Region SBDC" className="bg-white border border-lab-mist/80 shadow-soft">
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Joint training and workshops targeted to Lab members.</li>
                  <li>Direct referrals to SBDC advisors for technical assistance.</li>
                  <li>Shared clients remain clients of both organizations with coordinated follow-up.</li>
                  <li>Meeting space provided on campus for SBDC sessions as needed.</li>
                  <li>Regular promotion of SBDC programs to the Lab community.</li>
                </ul>
                <p className="text-xs text-slate-500 mt-2">Points of contact: Mary Allen (CPBDL Executive Director) and Paul Featheringill (USC Region SBDC Director).</p>
              </Card>
            </div>
          </div>
          <div className="card-surface p-6 space-y-4 border border-lab-gold/60 bg-white shadow-soft">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-lab-steel text-white flex items-center justify-center font-semibold shadow-soft">BL</div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-lab-gold">Memberships</p>
                <p className="text-lg font-semibold text-brand-navy">Choose your access</p>
              </div>
            </div>
            <div className="grid-auto-fit">
              {memberships.map((m) => (
                <Card key={m.name} title={m.name} className="border border-lab-mist/70 hover:border-lab-gold/70 transition">
                  <p>{m.detail}</p>
                </Card>
              ))}
            </div>
            <p className="text-sm text-slate-700">
              Every plan includes reliable workspace, private meeting options, high-speed internet, business address and mail handling, and access to programming. We align services to your stage and connect you to partners when needed.
            </p>
            <p className="text-sm text-slate-700">Ready to talk through fit and availability? Send a note and we will set up a tour or call.</p>
            <div className="flex gap-3 flex-wrap">
              <CTAButton href="#lab-form" label="Request Information" />
              <CTAButton href="/assets/pdfs/cpbdl-membership-handbook.pdf" label="Member Handbook (PDF)" variant="secondary" icon={null} />
            </div>
            {/* TODO: Replace placeholder PDF with final handbook file in /public/assets/pdfs/cpbdl-membership-handbook.pdf */}
          </div>
        </div>
      </Section>

      <Section title="Campus signage (preview)" subtitle="Look for our banners soon" background="panel">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="card-surface p-6 border border-lab-mist/70 shadow-soft">
            <p className="text-base text-slate-800">
              Feather banners will help with wayfinding at events and signal the Lab’s presence on campus. Membership and services remain the core offer; the banners are a friendly marker you’ll start seeing soon.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 mt-3">
              <li>Colors match the official BDL logo palette.</li>
              <li>Legible typography for outdoor setups and digital promos.</li>
              <li>Ready when you need quick visibility for workshops or tours.</li>
            </ul>
          </div>
          <div className="card-surface overflow-hidden border border-lab-mist/70 shadow-soft">
            <Image
              src="/feather-banner-bdl.png"
              alt="CPOCC Business Development Lab feather banner mockups"
              width={1024}
              height={1024}
              className="w-full h-full object-contain bg-white"
            />
          </div>
        </div>
      </Section>

      <Section id="lab-form" title="Business Lab Inquiry" subtitle="Membership & tours" background="panel">
        <div className="max-w-4xl">
          <LabForm />
        </div>
      </Section>
    </div>
  );
}
