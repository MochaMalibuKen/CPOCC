import Section from '@/components/section';
import ContactForm from '@/components/forms/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact CPOCC',
  description: 'Get in touch with CPOCC for office leasing, Lily Event Center bookings, Business Lab memberships, or general questions.',
};

export default function ContactPage() {
  return (
    <Section title="Contact CPOCC" subtitle="We will route your request" background="muted">
      <p className="lead max-w-3xl mb-6">Have a question or want to learn more about offices, events, or the Business Development Lab? Submit an inquiry and we’ll route it to the appropriate team.</p>
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] max-w-6xl">
        <div className="max-w-4xl">
          <ContactForm />
        </div>
        <div className="card-surface p-5 space-y-2 text-sm text-slate-700">
          <p className="text-base font-semibold text-brand-navy">Contact us</p>
          <p>Email: <a href="mailto:info@citizensparkocc.com" className="underline">info@citizensparkocc.com</a></p>
          <p>Phone: <a href="tel:18032260504" className="underline">803-226-0504</a></p>
          <p>Fax: 803-226-0482</p>
          <p>Address<br />640 Old Airport Rd<br />Aiken, SC 29801</p>
        </div>
      </div>
    </Section>
  );
}
