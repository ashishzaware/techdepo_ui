"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CallButton } from "@/components/CallButton";
import { primaryNavLinks } from "@/lib/navigation";
import { whatsappMessages } from "@/config/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex items-center justify-between py-3">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {primaryNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-brand-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <CallButton size="md" variant="ghost">
            Call Now
          </CallButton>
          <LinkButton href="/sales-enquiry" size="md">
            Get a Quote
          </LinkButton>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-900 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
        </button>
      </Container>

      {isOpen && (
        <div id="mobile-nav" className="border-t border-slate-200 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {primaryNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-3 flex flex-col gap-3 border-t border-slate-200 pt-4">
              <div className="flex gap-3">
                <CallButton size="md" className="flex-1" />
                <WhatsAppButton
                  message={whatsappMessages.general}
                  size="md"
                  className="flex-1"
                >
                  WhatsApp
                </WhatsAppButton>
              </div>
              <LinkButton href="/sales-enquiry" size="lg" className="w-full">
                Get a Quote
              </LinkButton>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
