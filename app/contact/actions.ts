"use server";

import { contactFormSchema, type ContactFormValues } from "@/lib/validations";

export interface ContactFormResult {
  success: boolean;
  message: string;
}

export async function submitContactForm(
  values: ContactFormValues
): Promise<ContactFormResult> {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please check the form for errors and try again.",
    };
  }

  // TODO: connect to the clinic's intake pipeline (e.g. Resend/Postmark email
  // delivery or EMR intake queue) before production launch. Logged only for now.
  console.log("New RestoreHealth consultation request:", parsed.data);

  return {
    success: true,
    message:
      "Thank you. A member of our care team will be in touch within one business day.",
  };
}
