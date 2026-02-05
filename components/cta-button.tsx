import Link from 'next/link';
import { ArrowRight } from './icons';
import { ReactNode } from 'react';
import clsx from 'clsx';

type Props = {
  href?: string;
  label: string;
  variant?: 'primary' | 'secondary';
  icon?: ReactNode;
  onClick?: () => void;
};

export default function CTAButton({ href, label, variant = 'primary', icon = <ArrowRight />, onClick }: Props) {
  const classes = clsx({
    'btn-primary': variant === 'primary',
    'btn-secondary': variant === 'secondary',
  });

  const content = (
    <span className="flex items-center gap-2">
      <span>{label}</span>
      {icon}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
