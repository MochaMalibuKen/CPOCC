import { ReactNode } from 'react';
import Card from '@/components/card';

interface FormPanelProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  success?: string;
  error?: string;
}

export default function FormPanel({ title, subtitle, children, success, error }: FormPanelProps) {
  return (
    <Card title={title} eyebrow={subtitle}>
      <div className="space-y-4">
        {success && <p className="rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-700">{success}</p>}
        {error && <p className="rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700">{error}</p>}
        {children}
      </div>
    </Card>
  );
}
