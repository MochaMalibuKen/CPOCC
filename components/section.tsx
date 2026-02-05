import { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  background?: 'default' | 'muted' | 'panel';
  id?: string;
  className?: string;
}

export default function Section({ children, title, subtitle, background = 'default', id, className }: SectionProps) {
  return (
    <section
      id={id}
      className={clsx('py-12 md:py-16', className, {
        'bg-brand-neutral/70': background === 'muted',
        'bg-white': background === 'panel',
      })}
    >
      <div className="mx-auto max-w-6xl px-4 space-y-6 fade-in">
        {(title || subtitle) && (
          <header className="space-y-2">
            {subtitle && <p className="text-sm uppercase tracking-[0.2em] text-brand-gold">{subtitle}</p>}
            {title && <h2 className="section-title">{title}</h2>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
