import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

function FieldWrapper({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-brand-950">
        {label}
        {required && <span className="text-accent-700"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

const inputBase =
  "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-brand-950 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";

export function TextField({
  id,
  label,
  required,
  error,
  className,
  ...props
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <FieldWrapper id={id} label={label} required={required} error={error}>
      <input
        id={id}
        name={id}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(inputBase, error && "border-red-400 focus:border-red-500 focus:ring-red-500/20", className)}
        {...props}
      />
    </FieldWrapper>
  );
}

export function TextAreaField({
  id,
  label,
  required,
  error,
  className,
  ...props
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <FieldWrapper id={id} label={label} required={required} error={error}>
      <textarea
        id={id}
        name={id}
        required={required}
        rows={4}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(inputBase, "resize-y", error && "border-red-400 focus:border-red-500 focus:ring-red-500/20", className)}
        {...props}
      />
    </FieldWrapper>
  );
}

export function SelectField({
  id,
  label,
  required,
  error,
  options,
  className,
  ...props
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  options: readonly string[];
  className?: string;
} & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <FieldWrapper id={id} label={label} required={required} error={error}>
      <select
        id={id}
        name={id}
        required={required}
        defaultValue=""
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(inputBase, error && "border-red-400 focus:border-red-500 focus:ring-red-500/20", className)}
        {...props}
      >
        <option value="" disabled>
          Select {label.toLowerCase()}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
}
