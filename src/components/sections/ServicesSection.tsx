import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { serviceGroups } from "@/data/services";

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="IT Services Built Around Your Needs"
          description="From CCTV security to computer repair and networking, TechDepo covers the full range of IT sales and support for homes and businesses."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceGroups.map((group) => (
            <ServiceCard key={group.slug} group={group} />
          ))}
        </div>
      </Container>
    </section>
  );
}
