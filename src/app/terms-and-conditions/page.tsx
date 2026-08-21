import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and Conditions for using ${siteConfig.companyName}'s website and services.`,
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <Container className="max-w-3xl py-16 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight text-brand-950">Terms &amp; Conditions</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: August 2026</p>

      <div className="mt-8 space-y-6 text-slate-700">
        <section>
          <h2 className="text-xl font-semibold text-brand-950">1. About These Terms</h2>
          <p className="mt-2">
            These terms govern your use of the {siteConfig.companyName} website. By using this
            website, you agree to these terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-950">2. Website Content</h2>
          <p className="mt-2">
            Content on this website is provided for general information about our products and
            services. Product availability, pricing, and specifications are confirmed directly
            with our team and may change without notice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-950">3. Enquiries &amp; Quotes</h2>
          <p className="mt-2">
            Submitting a sales or service enquiry through this website does not constitute a
            confirmed order or booking. Orders, quotes, and service appointments are confirmed
            directly by our team via phone, WhatsApp, or email.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-950">4. Services &amp; Repairs</h2>
          <p className="mt-2">
            Installation and repair services are carried out based on the scope agreed with the
            customer at the time of booking. Any additional work beyond the agreed scope will be
            discussed and confirmed with the customer before proceeding.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-950">5. Limitation of Liability</h2>
          <p className="mt-2">
            While we take care to provide accurate information on this website, we do not
            guarantee that all content is complete or error-free. {siteConfig.companyName} is not
            liable for losses arising from reliance on website content alone — please confirm
            product and service details directly with our team.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-950">6. Contact Us</h2>
          <p className="mt-2">
            For questions about these terms, contact us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-brand-900 underline">
              {siteConfig.email}
            </a>{" "}
            or {siteConfig.phone}.
          </p>
        </section>
      </div>
    </Container>
  );
}
