import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SalesEnquiryForm } from "@/components/forms/SalesEnquiryForm";
import { salesProductOptions } from "@/data/services";

export const metadata: Metadata = {
  title: "Sales Enquiry",
  description:
    "Tell TechDepo what you need — CCTV, laptops, desktops, networking or billing software — and our team will get back to you.",
  alternates: { canonical: "/sales-enquiry" },
};

export default async function SalesEnquiryPage(props: PageProps<"/sales-enquiry">) {
  const searchParams = await props.searchParams;
  const productParam = typeof searchParams.product === "string" ? searchParams.product : undefined;
  const defaultProduct = salesProductOptions.includes(
    productParam as (typeof salesProductOptions)[number],
  )
    ? productParam
    : undefined;

  return (
    <div className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent-700">
            Sales Enquiry
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
            Tell Us What You Need
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Share your requirement and our team will get back to you with the right product and
            pricing.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <SalesEnquiryForm defaultProduct={defaultProduct} />
        </div>
      </Container>
    </div>
  );
}
