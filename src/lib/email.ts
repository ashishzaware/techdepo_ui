import { siteConfig } from "@/config/site";

async function sendEmail({
  to,
  subject,
  text,
}: {
  to: string;
  subject: string;
  text: string;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL || "TechDepo Website <onboarding@resend.dev>";

  if (!apiKey) {
    console.warn(
      "[email] RESEND_API_KEY is not configured — email was not sent. Logging instead:\n",
      `To: ${to}\nSubject: ${subject}\n\n${text}`,
    );
    return;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from: fromEmail, to: [to], subject, text }),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(`Failed to send email to ${to} (${response.status}): ${errorText}`);
  }
}

/**
 * Sends an enquiry notification email to the business, via the Resend API.
 *
 * This project intentionally avoids a backend/database — enquiries are
 * emailed directly to the business. If RESEND_API_KEY is not set (e.g. in
 * local development before the owner configures it), the enquiry is logged
 * to the server console instead of failing, so the form still works.
 */
export async function sendEnquiryEmail({
  subject,
  lines,
}: {
  subject: string;
  lines: Array<[label: string, value: string | undefined]>;
}): Promise<void> {
  const toEmail = process.env.ENQUIRY_TO_EMAIL || siteConfig.email;
  const text = lines
    .filter(([, value]) => Boolean(value && value.trim()))
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

  await sendEmail({ to: toEmail, subject, text });
}

/** Sends the customer a "thank you, we'll connect shortly" email — only called when they gave an email address. */
export async function sendCustomerThankYouEmail({
  to,
  customerName,
}: {
  to: string;
  customerName: string;
}): Promise<void> {
  await sendEmail({
    to,
    subject: `Thank you for reaching out, ${siteConfig.companyName} received your enquiry`,
    text: `Hi ${customerName},

Thank you for reaching out to ${siteConfig.companyName}! We've received your enquiry and our team will connect with you shortly.

If it's urgent, you can also reach us directly:
Phone: ${siteConfig.phone}
WhatsApp: https://wa.me/${siteConfig.whatsappNumber}

— ${siteConfig.companyName}`,
  });
}
