import clsx from 'clsx';
import { ReactNode } from 'react';

type BadgeTone = 'success' | 'info' | 'warning';

const toneStyles: Record<BadgeTone, string> = {
  success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  info: 'bg-lab-mist text-lab-steel border-lab-mist/80',
  warning: 'bg-brand-neutral text-brand-navy border-brand-gold/60',
};

export default function Badge({ tone = 'info', children }: { tone?: BadgeTone; children: ReactNode }) {
  return <span className={clsx('badge border', toneStyles[tone])}>{children}</span>;
}
