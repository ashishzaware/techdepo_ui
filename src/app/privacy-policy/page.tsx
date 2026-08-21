import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.companyName}.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <Container className="max-w-3xl py-16 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight text-brand-950">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: August 2026</p>

      <div className="prose-p:leading-relaxed mt-8 space-y-6 text-slate-700">
        <section>
          <h2 className="text-xl font-semibold text-brand-950">1. Information We Collect</h2>
          <p className="mt-2">
            When you submit a sales enquiry, service enquiry, or contact form on this website, we
            collect the information you provide — such as your name, mobile number, email address,
            and details of your requirement. We do not collect payment information through this
            website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-950">2. How We Use Your Information</h2>
          <p className="mt-2">
            We use the information you submit solely to respond to your enquiry, provide quotes,
            schedule service, and communicate with you about your request. We do not sell your
            personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-950">3. Data Storage</h2>
          <p className="mt-2">
            Enquiry form submissions are sent directly to {siteConfig.companyName}&apos;s email for
            follow-up and are not stored in a database on this website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-950">4. Third-Party Services</h2>
          <p className="mt-2">
            We may use third-party services (such as email delivery providers, and — if enabled —
            website analytics) to operate this website. These providers process data only as
            needed to provide their service to us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-950">5. Contact Us</h2>
          <p className="mt-2">
            If you have questions about this Privacy Policy or wish to have your information
            removed, contact us at{" "}
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
