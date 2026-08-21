"use client";

import { useActionState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitSalesEnquiry } from "@/lib/actions";
import { salesProductOptions } from "@/data/services";
import { TextField, TextAreaField, SelectField } from "@/components/forms/FormField";
import { AntiSpamFields } from "@/components/forms/AntiSpamFields";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { whatsappMessages } from "@/config/site";

const contactMethods = ["Phone Call", "WhatsApp", "Email"] as const;

export function SalesEnquiryForm({ defaultProduct }: { defaultProduct?: string }) {
  const [state, formAction, isPending] = useActionState(submitSalesEnquiry, null);

  if (state?.success) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="mx-auto size-12 text-green-600" aria-hidden />
        <h3 className="mt-4 text-xl font-semibold text-brand-950">{state.message}</h3>
        <p className="mt-2 text-sm text-slate-600">
          Prefer to talk right away? Contact us directly on WhatsApp.
        </p>
        <div className="mt-5 flex justify-center">
          <WhatsAppButton message={whatsappMessages.sales} size="lg">
            Contact us on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      <AntiSpamFields />

      {state && !state.success && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.message}
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField id="fullName" label="Full Name" required error={state?.fieldErrors?.fullName} autoComplete="name" />
        <TextField
          id="mobile"
          label="Mobile Number"
          type="tel"
          required
          inputMode="tel"
          placeholder="10-digit mobile number"
          error={state?.fieldErrors?.mobile}
          autoComplete="tel"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField id="email" label="Email" type="email" error={state?.fieldErrors?.email} autoComplete="email" />
        <TextField id="businessName" label="Business / Organization Name" autoComplete="organization" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <SelectField
          id="productOrService"
          label="Product / Service"
          required
          options={salesProductOptions}
          defaultValue={defaultProduct}
          error={state?.fieldErrors?.productOrService}
        />
        <TextField id="quantity" label="Quantity" placeholder="e.g. 4 cameras" />
      </div>

      <TextAreaField
        id="requirement"
        label="Requirement"
        required
        placeholder="Tell us what you need..."
        error={state?.fieldErrors?.requirement}
      />

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-brand-950">Preferred Contact Method</legend>
        <div className="flex flex-wrap gap-4">
          {contactMethods.map((method) => (
            <label key={method} className="inline-flex items-center gap-2 text-sm text-slate-700">
              <input
                type="radio"
                name="preferredContactMethod"
                value={method}
                defaultChecked={method === "Phone Call"}
                className="size-4 accent-brand-600"
              />
              {method}
            </label>
          ))}
        </div>
      </fieldset>

      <TextAreaField id="message" label="Message" placeholder="Anything else we should know?" />

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isPending}>
        {isPending && <Loader2 className="size-4 animate-spin" aria-hidden />}
        Submit Sales Enquiry
      </Button>
    </form>
  );
}
