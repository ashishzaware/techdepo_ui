import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { whatsappMessages } from "@/config/site";

export function CTASection() {
  return (
    <section className="bg-accent-500 py-14">
      <Container className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
        <div>
          <h2 className="text-2xl font-bold text-brand-950 sm:text-3xl">
            Ready to get started?
          </h2>
          <p className="mt-2 text-brand-950/80">
            Talk to our team about your CCTV, computer or networking requirement today.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <LinkButton href="/sales-enquiry" size="lg" variant="secondary">
            Send Enquiry
          </LinkButton>
          <WhatsAppButton message={whatsappMessages.general} size="lg">
            WhatsApp Us
          </WhatsAppButton>
        </div>
      </Container>
    </section>
  );
}
