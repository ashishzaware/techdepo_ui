import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CTASection } from "@/components/sections/CTASection";
import { whatsappMessages } from "@/config/site";
import type { LucideIcon } from "lucide-react";

export function ServiceDetailLayout({
  icon: Icon,
  eyebrow,
  title,
  summary,
  items,
  salesHref = "/sales-enquiry",
  serviceHref = "/service-enquiry",
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  summary: string;
  items: { title: string; description: string }[];
  salesHref?: string;
  serviceHref?: string;
}) {
  return (
    <div>
      <div className="bg-brand-950 py-14 text-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-xl bg-white/10">
              <Icon className="size-7 text-accent-500" aria-hidden />
            </div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent-500">
              {eyebrow}
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
            <p className="mt-4 text-slate-300">{summary}</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <LinkButton href={salesHref} size="lg">
                Get a Quote
              </LinkButton>
              <LinkButton
                href={serviceHref}
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-950"
              >
                Book a Service
              </LinkButton>
              <WhatsAppButton message={whatsappMessages.sales} size="lg">
                WhatsApp Us
              </WhatsAppButton>
            </div>
          </div>
        </Container>
      </div>

      <div className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.title}
                className="flex gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent-700" aria-hidden />
                <div>
                  <h3 className="font-semibold text-brand-950">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <CTASection />
    </div>
  );
}
