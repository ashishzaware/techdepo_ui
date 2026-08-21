import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnchorButton, LinkButton } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig, whatsappMessages } from "@/config/site";

export function ContactLocationSection({
  showHeading = true,
}: {
  showHeading?: boolean;
}) {
  return (
    <section id="contact" className="scroll-mt-20 py-16 sm:py-20">
      <Container>
        {showHeading && (
          <SectionHeading
            eyebrow="Get In Touch"
            title="Visit or Contact TechDepo"
            description="Reach out by phone, WhatsApp, email, or stop by in person."
          />
        )}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <ul className="space-y-5">
              {siteConfig.locations.map((location) => (
                <li key={location.label} className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-accent-700" aria-hidden />
                  <div>
                    <p className="font-semibold text-brand-950">{location.label}</p>
                    <p className="text-sm text-slate-600">
                      {location.line1}, {location.line2}
                      <br />
                      {location.city}, {location.state} {location.pincode}
                    </p>
                    <a
                      href={location.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-brand-900 underline underline-offset-2 hover:text-accent-700"
                    >
                      Get Directions
                    </a>
                  </div>
                </li>
              ))}

              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-accent-700" aria-hidden />
                <div>
                  <p className="font-semibold text-brand-950">Phone</p>
                  {siteConfig.contacts.map((contact) => (
                    <a
                      key={contact.name}
                      href={contact.phoneHref}
                      className="block text-sm text-slate-600 hover:text-brand-900"
                    >
                      {contact.phone} ({contact.name})
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-accent-700" aria-hidden />
                <div>
                  <p className="font-semibold text-brand-950">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-slate-600 hover:text-brand-900"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-accent-700" aria-hidden />
                <div>
                  <p className="font-semibold text-brand-950">Business Hours</p>
                  {siteConfig.businessHours.map((entry) => (
                    <p key={entry.days} className="text-sm text-slate-600">
                      {entry.days}: {entry.hours}
                    </p>
                  ))}
                </div>
              </li>
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <AnchorButton href={siteConfig.phoneHref} variant="secondary">
                <Phone className="size-4" aria-hidden />
                Call Now
              </AnchorButton>
              <WhatsAppButton message={whatsappMessages.general}>WhatsApp</WhatsAppButton>
              <AnchorButton
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                <MapPin className="size-4" aria-hidden />
                Get Directions
              </AnchorButton>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-2 text-xs font-medium text-slate-500">
              Showing our {siteConfig.locations[0].label} location — see addresses above for all
              locations.
            </p>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                title={`${siteConfig.companyName} location on Google Maps`}
                src={siteConfig.googleMapsEmbedUrl}
                className="h-80 w-full lg:h-[calc(100%-1.75rem)] lg:min-h-[300px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <LinkButton href="/contact" size="md" variant="ghost">
            Full contact details &amp; enquiry form
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
