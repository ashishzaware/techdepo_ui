export function isValidName(value: string): boolean {
  return value.trim().length >= 2;
}

/** Accepts Indian mobile numbers, optionally with +91/91 prefix or spaces. */
export function isValidMobile(value: string): boolean {
  const digits = value.replace(/[\s-]/g, "");
  return /^(?:\+?91)?[6-9]\d{9}$/.test(digits);
}

export function isValidEmail(value: string): boolean {
  if (!value) return true; // email is optional in most forms
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isNonEmpty(value: string): boolean {
  return value.trim().length > 0;
}

export function normalizeMobile(value: string): string {
  const digits = value.replace(/[\s-]/g, "").replace(/^\+?91/, "");
  return digits;
}
