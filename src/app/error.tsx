"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CallButton } from "@/components/CallButton";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-red-50 text-red-600">
        <AlertTriangle className="size-8" aria-hidden />
      </div>
      <h1 className="text-2xl font-bold text-brand-950">Something went wrong</h1>
      <p className="mt-3 max-w-md text-slate-600">
        An unexpected error occurred. Please try again, or contact us directly if the problem
        continues.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button onClick={reset} size="lg">
          Try Again
        </Button>
        <CallButton size="lg" />
      </div>
    </Container>
  );
}
