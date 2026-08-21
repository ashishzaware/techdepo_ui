"use client";

import { useActionState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitServiceEnquiry } from "@/lib/actions";
import { serviceDeviceOptions } from "@/data/services";
import { TextField, TextAreaField, SelectField } from "@/components/forms/FormField";
import { AntiSpamFields } from "@/components/forms/AntiSpamFields";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { whatsappMessages } from "@/config/site";

export function ServiceEnquiryForm({ defaultDevice }: { defaultDevice?: string }) {
  const [state, formAction, isPending] = useActionState(submitServiceEnquiry, null);

  if (state?.success) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="mx-auto size-12 text-green-600" aria-hidden />
        <h3 className="mt-4 text-xl font-semibold text-brand-950">{state.message}</h3>
        <p className="mt-2 text-sm text-slate-600">Need urgent support? Contact us on WhatsApp.</p>
        <div className="mt-5 flex justify-center">
          <WhatsAppButton message={whatsappMessages.service} size="lg">
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
        <TextField id="customerName" label="Customer Name" required error={state?.fieldErrors?.customerName} autoComplete="name" />
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
        <SelectField
          id="deviceType"
          label="Device Type"
          required
          options={serviceDeviceOptions}
          defaultValue={defaultDevice}
          error={state?.fieldErrors?.deviceType}
        />
      </div>

      <TextAreaField
        id="problem"
        label="Problem / Issue"
        required
        placeholder="Describe the issue you're facing..."
        error={state?.fieldErrors?.problem}
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField id="modelNumber" label="Model Number" />
        <TextField id="location" label="Location" required error={state?.fieldErrors?.location} autoComplete="address-level2" />
      </div>

      <TextField id="preferredServiceDate" label="Preferred Service Date" type="date" />

      <TextAreaField id="message" label="Message" placeholder="Anything else we should know?" />

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isPending}>
        {isPending && <Loader2 className="size-4 animate-spin" aria-hidden />}
        Request Service
      </Button>
    </form>
  );
}
