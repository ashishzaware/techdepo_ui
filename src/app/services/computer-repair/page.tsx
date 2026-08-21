import type { Metadata } from "next";
import { MonitorSmartphone } from "lucide-react";
import { ServiceDetailLayout } from "@/components/sections/ServiceDetailLayout";
import { serviceJsonLd } from "@/lib/structuredData";
import { siteConfig } from "@/config/site";

const items = [
  { title: "Hardware Diagnosis", description: "Identifying and fixing desktop hardware faults." },
  { title: "Component Replacement", description: "SMPS, motherboard, RAM and storage replacement." },
  { title: "Windows Installation", description: "Fresh OS installation, licensing and driver setup." },
  { title: "Data Backup", description: "Safe backup and transfer of your important data." },
  { title: "SSD / RAM Upgrade", description: "Performance upgrades to speed up an older PC." },
  { title: "Virus / Malware Cleanup", description: "Removing malware and restoring system performance." },
];

export const metadata: Metadata = {
  title: "Computer Repair",
  description: `Desktop computer repair and upgrade service in ${siteConfig.address.city} — hardware diagnosis, upgrades, OS installation and data backup.`,
  alternates: { canonical: "/services/computer-repair" },
};

export default function ComputerRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              title: "Computer Repair",
              summary: metadata.description as string,
              slug: "computer-repair",
            }),
          ),
        }}
      />
      <ServiceDetailLayout
        icon={MonitorSmartphone}
        eyebrow="Computer & Laptop"
        title="Computer Repair"
        summary={`Reliable desktop computer repair in ${siteConfig.address.city} — diagnosis, upgrades and support for home and office PCs.`}
        items={items}
        salesHref="/sales-enquiry?product=Desktop"
        serviceHref="/service-enquiry?device=Desktop"
      />
    </>
  );
}
