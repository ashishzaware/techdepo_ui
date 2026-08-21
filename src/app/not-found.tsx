import { SearchX } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { Logo } from "@/components/Logo";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <Logo className="mb-8" />
      <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-brand-950/5 text-brand-900">
        <SearchX className="size-8" aria-hidden />
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-brand-950">Page Not Found</h1>
      <p className="mt-3 max-w-md text-slate-600">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or
        no longer exists.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <LinkButton href="/" size="lg">
          Back to Home
        </LinkButton>
        <LinkButton href="/contact" size="lg" variant="outline">
          Contact Us
        </LinkButton>
      </div>
    </Container>
  );
}
