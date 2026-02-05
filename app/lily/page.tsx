import Section from '@/components/section';
import Card from '@/components/card';
import CTAButton from '@/components/cta-button';
import LilyForm from '@/components/forms/LilyForm';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lily Event Center | CPOCC',
  description: 'Venue rentals at the Lily Event Center within CPOCC. Flexible rooms with AV, parking, and accessibility.',
};

const lilyPhotos = ['/lily/IMG_0948.jpg', '/lily/IMG_0949.jpg', '/lily/IMG_0950.jpg'];

const features = [
  'Flexible seating configurations',
  'Accessible parking',
  'Support spaces for vendors and organizers',
  'Convenient location adjacent to Citizen’s Park',
];

const packages = [
  { name: 'Weekday meeting', detail: 'Half- or full-day blocks with AV included' },
  { name: 'Evening event', detail: 'Receptions, celebrations, fundraisers with staffed support' },
  { name: 'Training series', detail: 'Recurring bookings with preferred partner rates' },
];

export default function LilyPage() {
  return (
    <div>
      <Section title="Lily Event Center at CPOCC" subtitle="Venue rentals" background="muted">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-5">
            <p className="lead">
              The Lily Event Center provides a flexible, professional venue for weddings, corporate gatherings, and community events. Located within Citizens Park Office & Conference Center, Lily offers a setting that balances warmth and professionalism.
            </p>
            <div className="grid-auto-fit">
              {features.map((f) => (
                <Card key={f} title={f} className="bg-lily-sage/50" />
              ))}
            </div>
            <p className="text-sm text-slate-600">Follow CPOCC on Instagram and Facebook for event highlights from the Lily Event Center.</p>
          </div>
          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-3">
              {lilyPhotos.map((src) => (
                <div key={src} className="relative aspect-[3/4] sm:aspect-[4/3] overflow-hidden rounded-xl border border-lily-sage/70 bg-white">
                  <Image src={src} alt="Lily Event Center" fill className="object-contain" sizes="(min-width: 1024px) 240px, 33vw" />
                </div>
              ))}
            </div>
            <div className="card-surface p-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-brand-gold">Check Availability</p>
                <p className="text-slate-700">To check availability or request pricing, submit an event inquiry below.</p>
              </div>
              <CTAButton href="#lily-form" label="Inquire About Availability" />
            </div>
            <div className="card-surface p-4 flex flex-col sm:flex-row items-center gap-4 border border-lily-sage/70">
              <div className="flex-1">
                <p className="text-sm uppercase tracking-[0.2em] text-brand-gold">Also on Eventective</p>
                <p className="text-slate-700">Prefer to review details on Eventective? You can view our listing and send an inquiry there as well.</p>
                <div className="mt-3 flex gap-3">
                  <CTAButton
                    href="https://www.eventective.com/aiken-sc/lilly-event-center-aiken-sc--661240.html"
                    label="View on Eventective"
                    variant="secondary"
                  />
                  <CTAButton href="#lily-form" label="Use our form" />
                </div>
              </div>
              <Link
                href="https://www.eventective.com/aiken-sc/lilly-event-center-aiken-sc--661240.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block shrink-0"
                title="Lilly Event Center (Aiken, SC)"
              >
                <Image
                  src="https://eventectivemedia.blob.core.windows.net/marketing/MediaKit/Featured_Logo_Eventective.png"
                  alt="Lilly Event Center featured on Eventective"
                  width={200}
                  height={200}
                  className="rounded-xl border border-lily-sage/70 shadow-soft object-contain bg-white"
                />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Packages" background="panel">
        <div className="grid-auto-fit">
          {packages.map((pkg) => (
            <Card key={pkg.name} title={pkg.name}>
              <p>{pkg.detail}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="lily-form" title="Lily Inquiry Form" subtitle="Tell us about your event" background="muted">
        <div className="max-w-4xl space-y-6">
          <LilyForm />
          <div className="card-surface p-4 border border-lily-sage/70 space-y-2">
            <p className="text-sm uppercase tracking-[0.2em] text-brand-gold">Eventective inquiry</p>
            <p className="text-slate-700">If you prefer to submit via Eventective, you can use the embedded form below.</p>
            <div className="border border-lily-sage/60 rounded-xl p-3 bg-white">
              <Script
                id="eventective-inquiry-form-widget"
                src="https://www.eventective.com/providerwidget/widget/widgetscriptinline.js?key=SWhEQ0tKTFhjcE13OC9KUU9wOXdETjNmWTdpVTJFWW4xMmYzdnRVZ0Y2M0JkNENuWnNQU2VJVDg0L0hBbndNMA"
                strategy="lazyOnload"
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
