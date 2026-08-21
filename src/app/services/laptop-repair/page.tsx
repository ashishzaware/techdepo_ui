import type { Metadata } from "next";
import { Laptop } from "lucide-react";
import { ServiceDetailLayout } from "@/components/sections/ServiceDetailLayout";
import { serviceJsonLd } from "@/lib/structuredData";
import { siteConfig } from "@/config/site";

const items = [
  { title: "Screen Replacement", description: "Cracked or damaged laptop screen replacement." },
  { title: "Keyboard & Battery", description: "Keyboard replacement and battery health checks/replacement." },
  { title: "Motherboard Repair", description: "Diagnosis and repair of motherboard-level faults." },
  { title: "Data Backup & Recovery", description: "Safe backup and recovery of your important files." },
  { title: "SSD / RAM Upgrade", description: "Faster boot times and smoother multitasking." },
  { title: "Windows Installation", description: "Fresh OS installation, licensing and driver setup." },
];

export const metadata: Metadata = {
  title: "Laptop Repair",
  description: `Professional laptop repair service in ${siteConfig.address.city} — screen, keyboard, battery, motherboard, data backup and more.`,
  alternates: { canonical: "/services/laptop-repair" },
};

export default function LaptopRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              title: "Laptop Repair",
              summary: metadata.description as string,
              slug: "laptop-repair",
            }),
          ),
        }}
      />
      <ServiceDetailLayout
        icon={Laptop}
        eyebrow="Computer & Laptop"
        title="Laptop Repair"
        summary={`Fast, reliable laptop repair in ${siteConfig.address.city} — from screen and battery replacement to motherboard-level diagnosis.`}
        items={items}
        salesHref="/sales-enquiry?product=Laptop"
        serviceHref="/service-enquiry?device=Laptop"
      />
    </>
  );
}
