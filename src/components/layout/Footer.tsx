import Link from "next/link";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/icons/SocialIcons";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/config/site";
import { primaryNavLinks } from "@/lib/navigation";
import { serviceGroups } from "@/data/services";

const socialLinks = [
  { key: "facebook", href: siteConfig.social.facebook, Icon: FacebookIcon, label: "Facebook" },
  { key: "instagram", href: siteConfig.social.instagram, Icon: InstagramIcon, label: "Instagram" },
  { key: "linkedin", href: siteConfig.social.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
  { key: "youtube", href: siteConfig.social.youtube, Icon: YoutubeIcon, label: "YouTube" },
].filter((item) => item.href);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-800 bg-brand-950 text-slate-300">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo dark className="mb-4" />
          <p className="text-sm leading-relaxed text-slate-400">
            {siteConfig.shortDescription}
          </p>
          {socialLinks.length > 0 && (
            <div className="mt-5 flex gap-3">
              {socialLinks.map(({ key, href, Icon, label }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                >
                  <Icon className="size-4" aria-hidden />
                </a>
              ))}
            </div>
          )}
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm">
            {primaryNavLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Services
          </h3>
          <ul className="space-y-2.5 text-sm">
            {serviceGroups.map((group) => (
              <li key={group.slug}>
                <Link
                  href={`/services/${group.slug}`}
                  className="transition-colors hover:text-white"
                >
                  {group.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
              <span>
                {siteConfig.address.line1}, {siteConfig.address.line2}
                <br />
                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.pincode}
                <br />
                <Link href="/contact" className="underline underline-offset-2 hover:text-white">
                  + {siteConfig.locations.length - 1} more location
                </Link>
              </span>
            </li>
            {siteConfig.contacts.map((contact) => (
              <li key={contact.name} className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0" aria-hidden />
                <a href={contact.phoneHref} className="transition-colors hover:text-white">
                  {contact.phone} ({contact.name})
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0" aria-hidden />
              <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 size-4 shrink-0" aria-hidden />
              <span>
                {siteConfig.businessHours.map((entry) => (
                  <span key={entry.days} className="block">
                    {entry.days}: {entry.hours}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-400 sm:flex-row">
          <p>
            &copy; {year} {siteConfig.companyName}. All rights reserved.
            {siteConfig.gstin && <span className="ml-2">GSTIN: {siteConfig.gstin}</span>}
          </p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
