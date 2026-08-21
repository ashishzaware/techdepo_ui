import { ShieldCheck, Laptop2, Network, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CallButton } from "@/components/CallButton";
import { siteConfig, whatsappMessages } from "@/config/site";

const floatingStats = [
  { icon: ShieldCheck, label: "CCTV & Security" },
  { icon: Laptop2, label: "Computers & Laptops" },
  { icon: Network, label: "Networking" },
  { icon: Wrench, label: "Repair & Support" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-950">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.35),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(245,158,11,0.25),transparent_40%)]"
      />
      <Container className="relative grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-500">
            IT Products &amp; Services
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Complete IT Solutions for Your Business &amp; Home
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            CCTV, Computers, Laptops, Networking &amp; IT Services — Sales, Installation and
            Support.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="/sales-enquiry" size="lg">
              Get a Quote
            </LinkButton>
            <LinkButton href="/service-enquiry" size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-950">
              Book a Service
            </LinkButton>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <WhatsAppButton message={whatsappMessages.sales} size="md">
              WhatsApp Us
            </WhatsAppButton>
            {siteConfig.contacts.map((contact) => (
              <CallButton
                key={contact.name}
                href={contact.phoneHref}
                size="md"
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                Call {contact.name}
              </CallButton>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {floatingStats.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-transform hover:-translate-y-1"
            >
              <Icon className="size-9 text-accent-500" aria-hidden />
              <p className="mt-4 text-sm font-semibold text-white">{label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
