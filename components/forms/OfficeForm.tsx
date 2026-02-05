'use client';

import { useState } from 'react';
import CTAButton from '@/components/cta-button';
import { TextAreaField, TextField } from './FormField';
import FormPanel from './FormPanel';

export default function OfficeForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus('loading');

    try {
      const res = await fetch('/api/leasing', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  }

  return (
    <FormPanel
      title="Office leasing inquiry"
      subtitle="Tell us about your needs"
      success={status === 'success' ? 'We received your request and will contact you shortly.' : undefined}
      error={status === 'error' ? 'There was an issue submitting. Please retry.' : undefined}
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField name="name" label="Full name" required />
          <TextField name="company" label="Company" />
          <TextField name="email" type="email" label="Email" required />
          <TextField name="phone" type="tel" label="Phone" />
          <TextField name="teamSize" label="Team size" placeholder="e.g., 2-3 people" />
          <TextField name="moveIn" label="Target move-in" placeholder="e.g., Q2 2026" />
        </div>
        <TextAreaField name="requirements" label="Requirements" rows={4} placeholder="Suite preference, parking, bandwidth, etc." />
        <CTAButton label={status === 'loading' ? 'Sending...' : 'Submit inquiry'} icon={null} />
      </form>
    </FormPanel>
  );
}
