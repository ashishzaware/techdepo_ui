import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { ProjectsPreviewSection } from "@/components/sections/ProjectsPreviewSection";
import { ReviewsPreviewSection } from "@/components/sections/ReviewsPreviewSection";
import { CTASection } from "@/components/sections/CTASection";
import { ContactLocationSection } from "@/components/sections/ContactLocationSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesSection />
      <ProductsSection />
      <WhyChooseSection />
      <ProjectsPreviewSection />
      <ReviewsPreviewSection />
      <CTASection />
      <ContactLocationSection />
    </>
  );
}
