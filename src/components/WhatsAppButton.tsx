import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, whatsappMessages } from "@/config/site";
import { cn } from "@/lib/cn";
import { AnchorButton } from "@/components/ui/Button";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={buildWhatsAppUrl(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with TechDepo on WhatsApp"
      className={cn(
        "fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full",
        "bg-whatsapp text-white shadow-lg shadow-black/20 transition-transform hover:scale-105",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500",
      )}
    >
      <MessageCircle className="size-7" fill="currentColor" strokeWidth={0} aria-hidden />
    </a>
  );
}

export function WhatsAppButton({
  message = whatsappMessages.general,
  size = "md",
  className,
  children = "WhatsApp Us",
}: {
  message?: string;
  size?: "md" | "lg";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <AnchorButton
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      variant="whatsapp"
      size={size}
      className={className}
    >
      <MessageCircle className="size-5" aria-hidden />
      {children}
    </AnchorButton>
  );
}
