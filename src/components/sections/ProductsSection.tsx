import Link from "next/link";
import { Camera, HardDrive, Laptop, MonitorSmartphone, Network, Sun, Receipt } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";

const products = [
  { icon: Camera, title: "CCTV Cameras", product: "CCTV Camera" },
  { icon: HardDrive, title: "DVR / NVR & CCTV Systems", product: "CCTV System" },
  { icon: Laptop, title: "Laptops", product: "Laptop" },
  { icon: MonitorSmartphone, title: "Desktops", product: "Desktop" },
  { icon: Network, title: "Networking Equipment", product: "Networking" },
  { icon: Sun, title: "Solar CCTV Kits", product: "Solar CCTV" },
  { icon: Receipt, title: "TechDepo Billing Software", product: "Billing Software" },
];

export function ProductsSection() {
  return (
    <section id="products" className="scroll-mt-20 bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="What You Can Buy"
          title="Products & Solutions"
          description="Genuine hardware and software, sourced and configured by our team — get a quote for any product below."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {products.map(({ icon: Icon, title, product }) => (
            <Link
              key={title}
              href={`/sales-enquiry?product=${encodeURIComponent(product)}`}
              className="group flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-accent-500 hover:shadow-md"
            >
              <div className="flex size-11 items-center justify-center rounded-full bg-accent-500/10 text-accent-700">
                <Icon className="size-5" aria-hidden />
              </div>
              <span className="text-sm font-semibold text-brand-950">{title}</span>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <LinkButton href="/sales-enquiry" size="lg">
            Get a Quote
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
