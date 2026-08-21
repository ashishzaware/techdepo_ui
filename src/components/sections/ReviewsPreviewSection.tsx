import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { AnchorButton } from "@/components/ui/Button";
import { ReviewCard } from "@/components/ReviewCard";
import { reviews } from "@/data/reviews";
import { siteConfig } from "@/config/site";

export function ReviewsPreviewSection() {
  const featured = reviews.slice(0, 3);

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Customer Reviews"
          title="What Customers Say"
          description="Real feedback matters — here's what customers are sharing about TechDepo."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <LinkButton href="/reviews" size="lg" variant="outline">
            Read All Reviews
          </LinkButton>
          <AnchorButton
            href={siteConfig.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            variant="ghost"
          >
            <Star className="size-5" aria-hidden />
            Leave a Google Review
          </AnchorButton>
        </div>
      </Container>
    </section>
  );
}
