import { siteConfig } from "@/config/site";

/**
 * WhatsApp Business Cloud API (Meta) integration.
 *
 * Requires WHATSAPP_ACCESS_TOKEN and WHATSAPP_PHONE_NUMBER_ID to be
 * configured (see .env.example / README "WhatsApp Business API Setup").
 * Until then, every function here is a no-op that logs instead of sending —
 * the enquiry forms keep working exactly as before.
 *
 * Both message templates below must be created and approved in Meta's
 * WhatsApp Manager before sending will work — see README for the exact
 * text/category to submit.
 */

const GRAPH_API_VERSION = "v21.0";

const THANK_YOU_TEMPLATE = process.env.WHATSAPP_TEMPLATE_THANK_YOU || "enquiry_thank_you";
const ALERT_TEMPLATE = process.env.WHATSAPP_TEMPLATE_ALERT || "new_enquiry_alert";

function isConfigured(): boolean {
  return Boolean(process.env.WHATSAPP_ACCESS_TOKEN && process.env.WHATSAPP_PHONE_NUMBER_ID);
}

/** Converts a 10-digit Indian mobile number (with or without +91) to the digits-only E.164 form the Cloud API expects. */
function toWhatsAppId(mobile: string): string {
  const digits = mobile.replace(/[\s-]/g, "").replace(/^\+?91/, "");
  return `91${digits}`;
}

async function sendTemplateMessage(params: {
  to: string;
  templateName: string;
  bodyParams: string[];
}): Promise<void> {
  if (!isConfigured()) {
    console.warn(
      `[whatsapp] WHATSAPP_ACCESS_TOKEN/WHATSAPP_PHONE_NUMBER_ID not configured — skipped template "${params.templateName}" to ${params.to}.`,
    );
    return;
  }

  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const response = await fetch(
    `https://graph.facebook.com/${GRAPH_API_VERSION}/${phoneNumberId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: params.to,
        type: "template",
        template: {
          name: params.templateName,
          language: { code: "en" },
          components: [
            {
              type: "body",
              parameters: params.bodyParams.map((text) => ({ type: "text", text })),
            },
          ],
        },
      }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(
      `WhatsApp API error sending "${params.templateName}" to ${params.to} (${response.status}): ${errorText}`,
    );
  }
}

/** Notifies the business's own WhatsApp number(s) that a new enquiry came in. */
export async function sendOwnerWhatsAppAlert(params: {
  enquiryType: string;
  customerName: string;
  customerMobile: string;
  summary: string;
}): Promise<void> {
  const overrideNumbers = process.env.WHATSAPP_ALERT_NUMBERS;
  const recipients = overrideNumbers
    ? overrideNumbers.split(",").map((n) => n.trim()).filter(Boolean)
    : siteConfig.contacts.map((contact) => toWhatsAppId(contact.phone));

  await Promise.all(
    recipients.map((to) =>
      sendTemplateMessage({
        to,
        templateName: ALERT_TEMPLATE,
        bodyParams: [params.enquiryType, params.customerName, params.customerMobile, params.summary],
      }),
    ),
  );
}

/** Sends the customer a "thank you, we'll connect shortly" WhatsApp message. */
export async function sendCustomerThankYouWhatsApp(params: {
  customerName: string;
  customerMobile: string;
}): Promise<void> {
  await sendTemplateMessage({
    to: toWhatsAppId(params.customerMobile),
    templateName: THANK_YOU_TEMPLATE,
    bodyParams: [params.customerName],
  });
}
