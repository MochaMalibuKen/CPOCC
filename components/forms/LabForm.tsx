'use client';

import { useState } from 'react';
import CTAButton from '@/components/cta-button';
import { SelectField, TextAreaField, TextField } from './FormField';
import FormPanel from './FormPanel';

const membershipOptions = [
  'Day Pass',
  'Part-Time',
  'Full-Time',
  'Dedicated Desk',
  'Private Office',
];

export default function LabForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus('loading');

    try {
      const res = await fetch('/api/business-lab', {
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
      title="Business Lab inquiry"
      subtitle="Membership & tours"
      success={status === 'success' ? 'Thank you—our team will confirm tour times or membership next steps.' : undefined}
      error={status === 'error' ? 'Could not submit. Please try again.' : undefined}
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField name="name" label="Full name" required />
          <TextField name="email" type="email" label="Email" required />
          <TextField name="phone" type="tel" label="Phone" />
          <SelectField
            name="interest"
            label="Membership interest"
            required
            options={membershipOptions.map((o) => ({ value: o.toLowerCase().replace(/\s+/g, '-'), label: o }))}
          />
          <TextField name="company" label="Business name" />
          <TextField name="timeline" label="Timeline" placeholder="e.g., starting in March" />
        </div>
        <TextAreaField name="goals" label="Goals" rows={4} placeholder="What you need from the Lab—workspace, training, resources." />
        <CTAButton label={status === 'loading' ? 'Sending...' : 'Submit inquiry'} icon={null} />
      </form>
    </FormPanel>
  );
}
