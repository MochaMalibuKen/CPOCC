import { ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps {
  children: ReactNode;
  title?: string;
  eyebrow?: string;
  actions?: ReactNode;
  className?: string;
}

export default function Card({ children, title, eyebrow, actions, className }: CardProps) {
  return (
    <div className={clsx('card-surface p-6 space-y-3', className)}>
      {(title || eyebrow || actions) && (
        <div className="flex items-start justify-between gap-3">
          <div>
            {eyebrow && <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">{eyebrow}</p>}
            {title && <h3 className="text-xl font-semibold text-brand-navy">{title}</h3>}
          </div>
          {actions}
        </div>
      )}
      <div className="text-slate-700 leading-relaxed space-y-2">{children}</div>
    </div>
  );
}
