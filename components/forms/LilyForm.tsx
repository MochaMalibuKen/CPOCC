'use client';

import { useState } from 'react';
import CTAButton from '@/components/cta-button';
import { SelectField, TextAreaField, TextField } from './FormField';
import FormPanel from './FormPanel';

const eventTypes = [
  'Corporate meeting',
  'Training',
  'Community event',
  'Celebration',
  'Other',
];

export default function LilyForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus('loading');

    try {
      const res = await fetch('/api/lily', {
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
      title="Lily event inquiry"
      subtitle="Check availability"
      success={status === 'success' ? 'Thanks—our events team will follow up with availability.' : undefined}
      error={status === 'error' ? 'Submission failed. Please retry.' : undefined}
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField name="name" label="Full name" required />
          <TextField name="email" type="email" label="Email" required />
          <TextField name="phone" type="tel" label="Phone" />
          <TextField name="date" type="date" label="Preferred date" required />
          <SelectField
            name="eventType"
            label="Event type"
            required
            options={eventTypes.map((t) => ({ value: t.toLowerCase(), label: t }))}
          />
          <TextField name="guests" label="Estimated guest count" />
        </div>
        <TextAreaField name="message" label="Details" rows={4} placeholder="Schedule, AV needs, room setup." />
        <CTAButton label={status === 'loading' ? 'Sending...' : 'Check availability'} icon={null} />
      </form>
    </FormPanel>
  );
}
