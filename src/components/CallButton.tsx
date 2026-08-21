import type { ReactNode } from "react";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { AnchorButton } from "@/components/ui/Button";

export function CallButton({
  href = siteConfig.phoneHref,
  size = "md",
  variant = "outline",
  className,
  children = `Call ${siteConfig.phone}`,
}: {
  href?: string;
  size?: "md" | "lg";
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <AnchorButton href={href} variant={variant} size={size} className={className}>
      <Phone className="size-5" aria-hidden />
      {children}
    </AnchorButton>
  );
}
