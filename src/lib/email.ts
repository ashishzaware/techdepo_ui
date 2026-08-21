import { siteConfig } from "@/config/site";

interface SendEnquiryEmailInput {
  subject: string;
  lines: Array<[label: string, value: string | undefined]>;
}

/**
 * Sends an enquiry notification email via the Resend API.
 *
 * This project intentionally avoids a backend/database — enquiries are
 * emailed directly to the business. If RESEND_API_KEY is not set (e.g. in
 * local development before the owner configures it), the enquiry is logged
 * to the server console instead of failing, so the form still works.
 */
export async function sendEnquiryEmail({ subject, lines }: SendEnquiryEmailInput): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.ENQUIRY_TO_EMAIL || siteConfig.email;
  const fromEmail = process.env.RESEND_FROM_EMAIL || "TechDepo Website <onboarding@resend.dev>";

  const textBody = lines
    .filter(([, value]) => Boolean(value && value.trim()))
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

  if (!apiKey) {
    console.warn(
      "[email] RESEND_API_KEY is not configured — enquiry was not emailed. Logging instead:\n",
      subject,
      "\n",
      textBody,
    );
    return;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject,
      text: textBody,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(`Failed to send enquiry email (${response.status}): ${errorText}`);
  }
}
