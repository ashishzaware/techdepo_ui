import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ServiceEnquiryForm } from "@/components/forms/ServiceEnquiryForm";
import { CallButton } from "@/components/CallButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { whatsappMessages } from "@/config/site";
import { serviceDeviceOptions } from "@/data/services";

export const metadata: Metadata = {
  title: "Book a Service",
  description:
    "Book a repair or service for your CCTV, DVR/NVR, laptop, desktop, printer, router or network — TechDepo technicians are ready to help.",
  alternates: { canonical: "/service-enquiry" },
};

export default async function ServiceEnquiryPage(props: PageProps<"/service-enquiry">) {
  const searchParams = await props.searchParams;
  const deviceParam = typeof searchParams.device === "string" ? searchParams.device : undefined;
  const defaultDevice = serviceDeviceOptions.includes(
    deviceParam as (typeof serviceDeviceOptions)[number],
  )
    ? deviceParam
    : undefined;

  return (
    <div className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent-700">
            Service Enquiry
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
            Book a Service
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Facing an issue with your device? Fill in the details below and our technicians will
            reach out.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <span className="text-sm text-slate-500">Need urgent support?</span>
            <CallButton size="md" />
            <WhatsAppButton message={whatsappMessages.service} size="md" />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <ServiceEnquiryForm defaultDevice={defaultDevice} />
        </div>
      </Container>
    </div>
  );
}
