export type ProjectCategory =
  | "CCTV Installation"
  | "Commercial CCTV"
  | "Residential CCTV"
  | "Solar CCTV"
  | "Networking"
  | "Computer Setup"
  | "IT Infrastructure";

export interface Project {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  description: string;
  servicesProvided: string[];
  completionDate: string; // e.g. "2025-11"
  image: {
    placeholder: true;
    label: string;
  };
}

export interface Review {
  id: string;
  customerName: string;
  // Omit rather than invent a star rating when the customer didn't give one.
  rating?: 1 | 2 | 3 | 4 | 5;
  review: string;
  // BCP-47 language tag for the review text, e.g. "mr" for Marathi. Defaults to English.
  lang?: string;
  serviceOrProduct: string;
  location?: string;
  isSample: boolean;
}

export type ContactMethod = "Phone Call" | "WhatsApp" | "Email";

export interface SalesEnquiryPayload {
  fullName: string;
  mobile: string;
  email?: string;
  businessName?: string;
  productOrService: string;
  requirement: string;
  quantity?: string;
  preferredContactMethod: ContactMethod;
  message?: string;
}

export interface ServiceEnquiryPayload {
  customerName: string;
  mobile: string;
  email?: string;
  deviceType: string;
  problem: string;
  modelNumber?: string;
  location: string;
  preferredServiceDate?: string;
  message?: string;
}

export interface ContactPayload {
  name: string;
  mobile: string;
  email?: string;
  message: string;
}

export interface ActionResult {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
}
