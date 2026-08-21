import { siteConfig } from "@/config/site";
import { serviceGroups } from "@/data/services";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.domain}/#business`,
    name: siteConfig.companyName,
    description: siteConfig.shortDescription,
    url: siteConfig.domain,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    taxID: siteConfig.gstin,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.pincode,
      addressCountry: "IN",
    },
    openingHoursSpecification: siteConfig.businessHours.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.days,
      description: entry.hours,
    })),
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    contactPoint: siteConfig.contacts.map((contact) => ({
      "@type": "ContactPoint",
      contactType: "customer service",
      name: contact.name,
      telephone: contact.phone,
    })),
    makesOffer: serviceGroups.map((group) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: group.title,
        description: group.summary,
      },
    })),
  };
}

export function serviceJsonLd(group: { title: string; summary: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: group.title,
    description: group.summary,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.companyName,
      telephone: siteConfig.phone,
      url: siteConfig.domain,
    },
    areaServed: siteConfig.address.city,
    url: `${siteConfig.domain}/services/${group.slug}`,
  };
}
