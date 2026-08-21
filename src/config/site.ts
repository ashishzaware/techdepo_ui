/**
 * Central business configuration.
 *
 * Every value marked "PLACEHOLDER" is not real business information — it was
 * never provided — and must be replaced before launch. Nothing below is
 * invented data presented as fact (no fake review counts, no fake years of
 * experience, no fake address). Update this single file and the whole site
 * picks up the change.
 */

export const siteConfig = {
  companyName: "TechDepo",
  tagline: "Complete IT Solutions for Your Business & Home",
  shortDescription:
    "CCTV, Computers, Laptops, Networking & IT Services — Sales, Installation and Support.",

  // PLACEHOLDER: replace with the real production domain before launch.
  domain: "https://www.techdepo.example",

  // Primary contact (used by header/hero/floating WhatsApp button). Both
  // named contacts are listed in full on the Contact page and footer — see
  // `contacts` below.
  phone: "+91 81494 91025",
  phoneHref: "tel:+918149491025",
  whatsappNumber: "918149491025",

  email: "techdepo2023@gmail.com",

  // Named phone contacts, shown on the Contact page and in structured data.
  contacts: [
    { name: "Ashish", phone: "+91 81494 91025", phoneHref: "tel:+918149491025" },
    { name: "Yogesh", phone: "+91 98814 30128", phoneHref: "tel:+919881430128" },
  ],

  // Primary/showroom address (used in the footer, header schema, and as the
  // default map). The second location is listed in `locations` below.
  address: {
    line1: "At Post Takali Dhokeshwar",
    line2: "Tal. Parner",
    city: "Ahmednagar",
    state: "Maharashtra",
    pincode: "414304",
    country: "India",
  },

  // Every business location, primary first. Rendered as a list on the
  // Contact page. Add/remove entries here as locations change.
  locations: [
    {
      label: "Ahmednagar",
      line1: "At Post Takali Dhokeshwar",
      line2: "Tal. Parner",
      city: "Ahmednagar",
      state: "Maharashtra",
      pincode: "414304",
      country: "India",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=At+Post+Takali+Dhokeshwar%2C+Tal.+Parner%2C+Dist.+Ahmednagar%2C+Maharashtra+414304",
    },
    {
      label: "Pimpri",
      line1: "194/856, Sant Tukaram Nagar",
      line2: "Near Pujya Balaji Big Bazzar",
      city: "Pimpri",
      state: "Maharashtra",
      pincode: "411018",
      country: "India",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=194%2F856%2C+Sant+Tukaram+Nagar%2C+Near+Pujya+Balaji+Big+Bazzar%2C+Pimpri%2C+Maharashtra+411018",
    },
  ],

  // GST registration number, shown in the footer for trust/compliance.
  gstin: "27ABQPZ7541Q1ZB",

  // Built from the primary (Ahmednagar) address above — a working Maps
  // search link even without a precise pinned location. Replace with an
  // exact share/embed link from Google Business Profile once the listing is
  // set up, for a more accurate pin.
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=At+Post+Takali+Dhokeshwar%2C+Tal.+Parner%2C+Dist.+Ahmednagar%2C+Maharashtra+414304",
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=At+Post+Takali+Dhokeshwar%2C+Tal.+Parner%2C+Dist.+Ahmednagar%2C+Maharashtra+414304&output=embed",

  // PLACEHOLDER: replace with the real Google Business Profile review link.
  googleReviewUrl: "https://g.page/r/PLACEHOLDER/review",

  // PLACEHOLDER: confirm/replace actual business hours.
  businessHours: [
    { days: "Monday – Saturday", hours: "10:00 AM – 7:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ],

  social: {
    // PLACEHOLDER: fill in real profile URLs, or remove entries that don't apply.
    facebook: "",
    instagram: "https://www.instagram.com/tech_depo23/",
    linkedin: "",
    youtube: "",
  },
} as const;

export const whatsappMessages = {
  sales:
    "Hello TechDepo, I am interested in your products/services. I would like to discuss my requirement.",
  service:
    "Hello TechDepo, I need technical/service support. Please contact me.",
  general: "Hello TechDepo, I have a question.",
};

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}
