import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  "Professional technical support",
  "Quality products from trusted brands",
  "Experienced installation expertise",
  "Fast, responsive service",
  "Transparent, upfront pricing",
  "Customer-focused support",
  "End-to-end IT solutions under one roof",
];

export function WhyChooseSection() {
  return (
    <section className="bg-brand-950 py-16 text-white sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Why TechDepo"
          title="Why Choose TechDepo"
          description="A single, reliable partner for your CCTV, computer and networking needs."
          className="[&_h2]:text-white [&_p]:text-slate-300"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent-500" aria-hidden />
              <span className="text-sm font-medium text-slate-100">{reason}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
