import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

export function TextField({ label, required, className, ...props }: FieldProps) {
  return (
    <label className="space-y-1 text-sm font-semibold text-slate-800">
      <span>{label}</span>
      <input
        {...props}
        required={required}
        className={clsx(
          'w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/30',
          className,
        )}
      />
    </label>
  );
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  required?: boolean;
}

export function TextAreaField({ label, required, className, ...props }: TextAreaProps) {
  return (
    <label className="space-y-1 text-sm font-semibold text-slate-800">
      <span>{label}</span>
      <textarea
        {...props}
        required={required}
        className={clsx(
          'w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/30',
          className,
        )}
      />
    </label>
  );
}

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
}

export function SelectField({ label, options, required, className, ...props }: SelectProps) {
  return (
    <label className="space-y-1 text-sm font-semibold text-slate-800">
      <span>{label}</span>
      <select
        {...props}
        required={required}
        className={clsx(
          'w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/30',
          className,
        )}
      >
        <option value="">Select...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}
