import type { Metadata } from "next";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnchorButton } from "@/components/ui/Button";
import { ReviewCard } from "@/components/ReviewCard";
import { reviews } from "@/data/reviews";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: "See what TechDepo customers say about our CCTV, computer and networking services.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  const hasSampleReviews = reviews.some((review) => review.isSample);

  return (
    <div>
      <div className="bg-brand-950 py-14 text-center text-white">
        <Container>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Customer Reviews</h1>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            Honest feedback from customers who&apos;ve worked with TechDepo.
          </p>
        </Container>
      </div>

      <div className="py-16 sm:py-20">
        <Container>
          <div className="mb-10 flex flex-col items-center gap-4 text-center">
            {hasSampleReviews && (
              <p className="max-w-xl text-sm text-slate-600">
                The reviews below marked <span className="font-semibold">&ldquo;Sample review&rdquo;</span> are
                placeholder content shown while we collect genuine customer feedback.
              </p>
            )}
            <AnchorButton
              href={siteConfig.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              <Star className="size-4" aria-hidden />
              Share Your Experience on Google
            </AnchorButton>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
