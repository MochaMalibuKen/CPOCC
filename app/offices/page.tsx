import Section from '@/components/section';
import Card from '@/components/card';
import CTAButton from '@/components/cta-button';
import OfficeForm from '@/components/forms/OfficeForm';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Offices for Lease | CPOCC',
  description: 'Professional office suites for lease at CPOCC in Aiken, SC. Quiet, traditional offices with parking and internet included.',
};

const listings = [
  {
    name: 'Office 101 – Private Suite',
    size: 'Approximately 150–200 sq ft',
    ideal: 'Ideal for solo professionals or small teams',
    price: 'Monthly pricing available upon inquiry',
    features: ['Utilities and internet included', 'Access to shared conference rooms and common areas'],
  },
  {
    name: 'Office 102 – Corner Suite',
    size: 'Approximately 180–220 sq ft',
    ideal: 'Ideal for 1–2 people',
    price: 'Monthly pricing available upon inquiry',
    features: ['Utilities and internet included', 'Access to shared conference rooms and common areas'],
  },
  {
    name: 'Office 201 – Windowed Suite',
    size: 'Approximately 200–260 sq ft',
    ideal: 'Ideal for small teams',
    price: 'Monthly pricing available upon inquiry',
    features: ['Utilities and internet included', 'Access to shared conference rooms and common areas'],
  },
];

export default function OfficesPage() {
  return (
    <div>
      <Section title="Professional Office Suites at CPOCC" subtitle="Now leasing" background="muted">
        <div className="card-surface border border-office-mist/80 overflow-hidden shadow-soft">
          <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr] items-center bg-gradient-to-br from-white via-office-mist/70 to-white px-6 py-6 md:px-8 md:py-8">
            <div className="space-y-4">
              <p className="lead max-w-4xl text-brand-navy">
                Private, traditional offices with reliable internet, parking, and on-site management. Quiet space for firms, clinicians, and professionals who need a stable address without shared-desk distractions.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-slate-700">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 border border-office-mist/90 shadow-sm">Utilities & internet included</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 border border-office-mist/90 shadow-sm">Conference rooms on campus</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 border border-office-mist/90 shadow-sm">Ample parking</span>
              </div>
            </div>
            <div className="relative h-56 w-full md:h-64 rounded-2xl overflow-hidden border border-office-mist/80 bg-white">
              <Image
                src="/cpocc-office-add.jpg"
                alt="CPOCC office space"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 460px, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </Section>

      <Section background="panel">
        <div className="grid-auto-fit">
          {listings.map((suite) => (
            <Card
              key={suite.name}
              title={suite.name}
              eyebrow={`${suite.size} · ${suite.ideal}`}
              className="border border-office-mist/80 bg-white"
              actions={<CTAButton href="#lease-form" label="Inquire About This Office" variant="secondary" icon={null} />}
            >
              <p className="text-brand-navy font-semibold">{suite.price}</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-700">
                {suite.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="lease-form" title="Office Leasing Inquiry" subtitle="Tell us what you need" background="muted">
        <p className="text-sm text-slate-700 mb-4">Office leasing at CPOCC is distinct from Business Lab memberships and does not require program participation.</p>
        <div className="max-w-4xl">
          <OfficeForm />
        </div>
      </Section>
    </div>
  );
}
