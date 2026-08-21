import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "outline" | "whatsapp" | "ghost";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  // Dark text on amber: white text on accent-500/600 fails WCAG AA contrast.
  primary:
    "bg-accent-500 text-brand-950 hover:bg-accent-600 focus-visible:bg-accent-600",
  secondary:
    "bg-brand-900 text-white hover:bg-brand-800 focus-visible:bg-brand-800",
  outline:
    "border-2 border-brand-900 text-brand-900 hover:bg-brand-900 hover:text-white",
  whatsapp: "bg-whatsapp text-white hover:bg-whatsapp-dark",
  ghost: "text-brand-900 hover:bg-slate-100",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-150 disabled:opacity-60 disabled:pointer-events-none";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  "aria-label": ariaLabel,
}: CommonProps & {
  href: string;
  "aria-label"?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(base, variantClasses[variant], sizeClasses[size], className)}
    >
      {children}
    </Link>
  );
}

/** For external URLs, tel:, mailto:, and wa.me links — plain anchor, not next/link. */
export function AnchorButton({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  target,
  rel,
  "aria-label": ariaLabel,
}: CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={cn(base, variantClasses[variant], sizeClasses[size], className)}
    >
      {children}
    </a>
  );
}
