import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { CTASection } from "@/components/sections/CTASection";
import { serviceGroups } from "@/data/services";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.companyName} — an IT products and services company offering CCTV, computer, networking and billing software solutions.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div>
      <div className="bg-brand-950 py-14 text-center text-white">
        <Container>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About TechDepo</h1>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            A local IT products and services company for CCTV, computers and networking.
          </p>
        </Container>
      </div>

      <Container className="max-w-3xl py-16 sm:py-20">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-950">Who We Are</h2>
          <p className="mt-3 leading-relaxed text-slate-700">
            {siteConfig.companyName} is an IT products and services company offering CCTV
            security systems, computers and laptops, networking solutions, and billing software —
            for homes, shops and businesses.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-950">What We Do</h2>
          <p className="mt-3 leading-relaxed text-slate-700">
            We sell, install, configure and repair CCTV systems for residential, commercial and
            solar-powered setups. We also supply and service laptops and desktops, set up
            networking and Wi-Fi infrastructure, and offer TechDepo Billing — a POS and billing
            solution built for shops and small businesses.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-950">Our Mission</h2>
          <p className="mt-3 leading-relaxed text-slate-700">
            To make reliable IT products and support accessible and affordable — with honest
            pricing, quality installation, and responsive service for every customer.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-950">Our Services</h2>
          <ul className="mt-4 space-y-2">
            {serviceGroups.map((group) => (
              <li key={group.slug} className="leading-relaxed text-slate-700">
                <span className="font-semibold text-brand-950">{group.title}:</span>{" "}
                {group.summary}
              </li>
            ))}
          </ul>
        </section>
      </Container>

      <WhyChooseSection />
      <CTASection />
    </div>
  );
}
