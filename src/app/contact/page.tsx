import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { ContactLocationSection } from "@/components/sections/ContactLocationSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with TechDepo — call, WhatsApp, email, or visit us. We're here to help with CCTV, computers, networking and IT support.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div>
      <div className="bg-brand-950 py-14 text-center text-white">
        <Container>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h1>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            We&apos;d love to hear about your CCTV, computer or networking requirement.
          </p>
        </Container>
      </div>

      <ContactLocationSection showHeading={false} />

      <div className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
        <Container className="max-w-2xl">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-brand-950">Send Us a Message</h2>
            <p className="mt-2 text-sm text-slate-600">
              Prefer email? Fill out the form and we&apos;ll respond as soon as possible.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </Container>
      </div>
    </div>
  );
}
