"use server";

import { sendEnquiryEmail, sendCustomerThankYouEmail } from "@/lib/email";
import { sendOwnerWhatsAppAlert, sendCustomerThankYouWhatsApp } from "@/lib/whatsappBusiness";
import {
  isNonEmpty,
  isValidEmail,
  isValidMobile,
  isValidName,
} from "@/lib/validation";
import type { ActionResult } from "@/types";

/**
 * Basic anti-spam check shared by all public forms:
 *  - `company_website` is a honeypot field, hidden from real users via CSS.
 *    Any bot that fills it gets silently "succeeded" without an email being sent.
 *  - `startedAt` is a hidden timestamp set when the form mounts. Real humans
 *    take at least a couple of seconds to fill a form; a near-instant submit
 *    is a strong bot signal.
 */
function isLikelySpam(formData: FormData): boolean {
  const honeypot = String(formData.get("company_website") || "");
  if (honeypot.trim().length > 0) return true;

  const startedAt = Number(formData.get("startedAt") || 0);
  if (!startedAt) return false;
  const elapsed = Date.now() - startedAt;
  return elapsed < 1500;
}

/**
 * Fires every notification channel for a new enquiry: business email,
 * business WhatsApp alert, and (if the customer gave contact details)
 * a "thank you, we'll connect shortly" reply by email and WhatsApp.
 *
 * Each channel is independent and failure-isolated — e.g. a WhatsApp API
 * hiccup never stops the business email from going out, and none of these
 * failures should surface as a failed submission to the customer, since
 * their enquiry was already validated and accepted.
 */
async function dispatchNotifications(params: {
  enquiryType: string;
  emailSubject: string;
  emailLines: Array<[label: string, value: string | undefined]>;
  customerName: string;
  customerMobile: string;
  customerEmail?: string;
  whatsappSummary: string;
}): Promise<void> {
  const tasks: Array<Promise<void>> = [
    sendEnquiryEmail({ subject: params.emailSubject, lines: params.emailLines }),
    sendOwnerWhatsAppAlert({
      enquiryType: params.enquiryType,
      customerName: params.customerName,
      customerMobile: params.customerMobile,
      summary: params.whatsappSummary,
    }),
    sendCustomerThankYouWhatsApp({
      customerName: params.customerName,
      customerMobile: params.customerMobile,
    }),
  ];

  if (params.customerEmail) {
    tasks.push(
      sendCustomerThankYouEmail({ to: params.customerEmail, customerName: params.customerName }),
    );
  }

  const results = await Promise.allSettled(tasks);
  for (const result of results) {
    if (result.status === "rejected") {
      console.error("[notifications] a notification channel failed:", result.reason);
    }
  }
}

export async function submitSalesEnquiry(
  _prevState: ActionResult | null,
  formData: FormData,
): Promise<ActionResult> {
  const fullName = String(formData.get("fullName") || "").trim();
  const mobile = String(formData.get("mobile") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const businessName = String(formData.get("businessName") || "").trim();
  const productOrService = String(formData.get("productOrService") || "").trim();
  const requirement = String(formData.get("requirement") || "").trim();
  const quantity = String(formData.get("quantity") || "").trim();
  const preferredContactMethod = String(formData.get("preferredContactMethod") || "").trim();
  const message = String(formData.get("message") || "").trim();

  const fieldErrors: Record<string, string> = {};
  if (!isValidName(fullName)) fieldErrors.fullName = "Please enter your full name.";
  if (!isValidMobile(mobile)) fieldErrors.mobile = "Please enter a valid 10-digit mobile number.";
  if (!isValidEmail(email)) fieldErrors.email = "Please enter a valid email address.";
  if (!isNonEmpty(productOrService)) fieldErrors.productOrService = "Please select a product or service.";
  if (!isNonEmpty(requirement)) fieldErrors.requirement = "Please describe your requirement.";

  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, message: "Please fix the highlighted fields.", fieldErrors };
  }

  if (isLikelySpam(formData)) {
    return { success: true, message: "Thank you! Our team will contact you shortly." };
  }

  await dispatchNotifications({
    enquiryType: "Sales",
    emailSubject: `New Sales Enquiry — ${productOrService}`,
    emailLines: [
      ["Full Name", fullName],
      ["Mobile", mobile],
      ["Email", email],
      ["Business / Organization", businessName],
      ["Product / Service", productOrService],
      ["Requirement", requirement],
      ["Quantity", quantity],
      ["Preferred Contact Method", preferredContactMethod],
      ["Message", message],
    ],
    customerName: fullName,
    customerMobile: mobile,
    customerEmail: email || undefined,
    whatsappSummary: `${productOrService} — ${requirement}`,
  });

  return { success: true, message: "Thank you! Our team will contact you shortly." };
}

export async function submitServiceEnquiry(
  _prevState: ActionResult | null,
  formData: FormData,
): Promise<ActionResult> {
  const customerName = String(formData.get("customerName") || "").trim();
  const mobile = String(formData.get("mobile") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const deviceType = String(formData.get("deviceType") || "").trim();
  const problem = String(formData.get("problem") || "").trim();
  const modelNumber = String(formData.get("modelNumber") || "").trim();
  const location = String(formData.get("location") || "").trim();
  const preferredServiceDate = String(formData.get("preferredServiceDate") || "").trim();
  const message = String(formData.get("message") || "").trim();

  const fieldErrors: Record<string, string> = {};
  if (!isValidName(customerName)) fieldErrors.customerName = "Please enter your name.";
  if (!isValidMobile(mobile)) fieldErrors.mobile = "Please enter a valid 10-digit mobile number.";
  if (!isValidEmail(email)) fieldErrors.email = "Please enter a valid email address.";
  if (!isNonEmpty(deviceType)) fieldErrors.deviceType = "Please select a device type.";
  if (!isNonEmpty(problem)) fieldErrors.problem = "Please describe the problem.";
  if (!isNonEmpty(location)) fieldErrors.location = "Please enter your location.";

  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, message: "Please fix the highlighted fields.", fieldErrors };
  }

  if (isLikelySpam(formData)) {
    return { success: true, message: "Thank you! Our team will contact you shortly." };
  }

  await dispatchNotifications({
    enquiryType: "Service",
    emailSubject: `New Service Request — ${deviceType}`,
    emailLines: [
      ["Customer Name", customerName],
      ["Mobile", mobile],
      ["Email", email],
      ["Device Type", deviceType],
      ["Problem / Issue", problem],
      ["Model Number", modelNumber],
      ["Location", location],
      ["Preferred Service Date", preferredServiceDate],
      ["Message", message],
    ],
    customerName,
    customerMobile: mobile,
    customerEmail: email || undefined,
    whatsappSummary: `${deviceType} — ${problem}`,
  });

  return { success: true, message: "Thank you! Our team will contact you shortly." };
}

export async function submitContact(
  _prevState: ActionResult | null,
  formData: FormData,
): Promise<ActionResult> {
  const name = String(formData.get("name") || "").trim();
  const mobile = String(formData.get("mobile") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();

  const fieldErrors: Record<string, string> = {};
  if (!isValidName(name)) fieldErrors.name = "Please enter your name.";
  if (!isValidMobile(mobile)) fieldErrors.mobile = "Please enter a valid 10-digit mobile number.";
  if (!isValidEmail(email)) fieldErrors.email = "Please enter a valid email address.";
  if (!isNonEmpty(message)) fieldErrors.message = "Please enter a message.";

  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, message: "Please fix the highlighted fields.", fieldErrors };
  }

  if (isLikelySpam(formData)) {
    return { success: true, message: "Thank you! We'll get back to you shortly." };
  }

  await dispatchNotifications({
    enquiryType: "Contact",
    emailSubject: "New Contact Form Message",
    emailLines: [
      ["Name", name],
      ["Mobile", mobile],
      ["Email", email],
      ["Message", message],
    ],
    customerName: name,
    customerMobile: mobile,
    customerEmail: email || undefined,
    whatsappSummary: message,
  });

  return { success: true, message: "Thank you! We'll get back to you shortly." };
}
