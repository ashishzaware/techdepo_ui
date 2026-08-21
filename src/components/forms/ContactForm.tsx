"use client";

import { useActionState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitContact } from "@/lib/actions";
import { TextField, TextAreaField } from "@/components/forms/FormField";
import { AntiSpamFields } from "@/components/forms/AntiSpamFields";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, null);

  if (state?.success) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="mx-auto size-12 text-green-600" aria-hidden />
        <h3 className="mt-4 text-xl font-semibold text-brand-950">{state.message}</h3>
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

      <TextField id="name" label="Name" required error={state?.fieldErrors?.name} autoComplete="name" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
        <TextField id="email" label="Email" type="email" error={state?.fieldErrors?.email} autoComplete="email" />
      </div>

      <TextAreaField id="message" label="Message" required error={state?.fieldErrors?.message} />

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isPending}>
        {isPending && <Loader2 className="size-4 animate-spin" aria-hidden />}
        Send Message
      </Button>
    </form>
  );
}
