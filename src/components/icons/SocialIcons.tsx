import type { SVGProps } from "react";

/** lucide-react removed brand/logo icons; these are minimal local substitutes. */

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.5c0-.87.24-1.46 1.49-1.46H16.5V4.35C16.2 4.31 15.19 4.22 14 4.22c-2.4 0-4.05 1.47-4.05 4.16V10.5H7.5v3h2.45V21h3.55Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H4.06V20h2.88V8.5ZM5.5 4a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 5.5 4ZM20 20h-2.88v-5.9c0-1.41-.5-2.37-1.75-2.37-.96 0-1.53.65-1.78 1.27-.09.22-.11.53-.11.84V20H10.6s.04-9.86 0-10.88h2.88v1.54c.38-.59 1.07-1.44 2.6-1.44 1.9 0 3.32 1.24 3.32 3.9V20Z" />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 7.2s-.21-1.5-.86-2.16c-.82-.87-1.74-.87-2.16-.92C15.6 4 12 4 12 4h-.01s-3.6 0-6.58.12c-.42.05-1.34.05-2.16.92C2.6 5.7 2.4 7.2 2.4 7.2S2.18 8.96 2.18 10.72v1.55C2.18 14.03 2.4 15.8 2.4 15.8s.2 1.5.85 2.16c.82.87 1.9.84 2.38.93 1.72.17 7.37.22 7.37.22s3.6-.01 6.58-.13c.42-.06 1.34-.06 2.16-.93.65-.66.86-2.16.86-2.16s.22-1.76.22-3.53v-1.55c0-1.76-.22-3.52-.22-3.52ZM9.94 14.5v-5.8l5.4 2.91-5.4 2.89Z" />
    </svg>
  );
}
