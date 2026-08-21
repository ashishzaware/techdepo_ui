import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { serviceGroups } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "CCTV sales, installation & repair, laptop & desktop sales and repair, networking services, and billing/POS software — explore all TechDepo services.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div>
      <div className="bg-brand-950 py-14 text-center text-white">
        <Container>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h1>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            Sales, installation, and support across CCTV, computers, networking and billing
            software.
          </p>
        </Container>
      </div>

      <div className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceGroups.map((group) => (
              <ServiceCard key={group.slug} group={group} />
            ))}
          </div>
        </Container>
      </div>

      <CTASection />
    </div>
  );
}
