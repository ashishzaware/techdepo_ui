import { Clock, ShieldCheck, Wallet, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";

const highlights = [
  { icon: Clock, title: "Fast Response", description: "Quick turnaround on enquiries and service requests." },
  { icon: ShieldCheck, title: "Quality Products", description: "Trusted brands and genuine hardware." },
  { icon: Wrench, title: "Skilled Technicians", description: "Experienced installation and repair support." },
  { icon: Wallet, title: "Transparent Pricing", description: "Clear quotes, no hidden charges." },
];

export function TrustBar() {
  return (
    <section className="border-b border-slate-200 bg-white py-10">
      <Container className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {highlights.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="mb-3 flex size-11 items-center justify-center rounded-lg bg-brand-950/5 text-brand-900">
              <Icon className="size-5" aria-hidden />
            </div>
            <p className="text-sm font-semibold text-brand-950">{title}</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">{description}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
