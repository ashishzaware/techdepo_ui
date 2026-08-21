import { Star, User } from "lucide-react";
import type { Review } from "@/types";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {review.isSample && (
        <span className="mb-3 inline-flex w-fit items-center rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-700">
          Sample review
        </span>
      )}
      {review.rating && (
        <div
          role="img"
          className="mb-3 flex items-center gap-0.5"
          aria-label={`${review.rating} out of 5 stars`}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`size-4 ${index < review.rating! ? "fill-accent-500 text-accent-500" : "text-slate-200"}`}
              aria-hidden
            />
          ))}
        </div>
      )}
      <p lang={review.lang} className="flex-1 text-sm leading-relaxed text-slate-700">
        &ldquo;{review.review}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
        <div className="flex size-9 items-center justify-center rounded-full bg-brand-950/5 text-brand-900">
          <User className="size-4" aria-hidden />
        </div>
        <div>
          <p className="text-sm font-semibold text-brand-950">{review.customerName}</p>
          <p className="text-xs text-slate-500">
            {review.serviceOrProduct}
            {review.location ? ` · ${review.location}` : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
