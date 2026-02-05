'use client';

import { useState } from 'react';
import CTAButton from '@/components/cta-button';
import { SelectField, TextAreaField, TextField } from './FormField';
import FormPanel from './FormPanel';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
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
      title="General inquiry"
      subtitle="We route to the right team"
      success={status === 'success' ? 'Thank you for your inquiry. A member of our team will follow up shortly.' : undefined}
      error={status === 'error' ? 'Something went wrong. Please try again.' : undefined}
    >
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField name="name" label="Full name" required />
          <TextField name="email" type="email" label="Email" required />
          <TextField name="phone" type="tel" label="Phone" />
          <SelectField
            name="topic"
            label="Topic"
            required
            options={[
              { value: 'office-leasing', label: 'Office leasing' },
              { value: 'lily-event', label: 'Lily event' },
              { value: 'business-lab', label: 'Business Lab membership' },
              { value: 'general', label: 'General question' },
            ]}
          />
        </div>
        <TextAreaField name="message" label="How can we help?" rows={4} required />
        <CTAButton label={status === 'loading' ? 'Sending...' : 'Request Information'} icon={null} />
      </form>
    </FormPanel>
  );
}
