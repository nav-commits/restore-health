"use server";

import { Resend } from "resend";

import { contactFormSchema, type ContactFormValues } from "@/lib/validations";

export interface ContactFormResult {
  success: boolean;
  message: string;
}

const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "navdeep.dhamrait94@gmail.com";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
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

  const { firstName, lastName, email, phone, message } = parsed.data;

  if (!process.env.RESEND_API_KEY) {
    console.error(
      "RESEND_API_KEY is not set - contact form submission was not emailed:",
      parsed.data
    );
    return {
      success: false,
      message:
        "Consultation requests can't be sent right now. Please call us directly instead.",
    };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "RestoreHealth Website <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `New consultation request from ${firstName} ${lastName}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend failed to send contact form email:", error);
      return {
        success: false,
        message:
          "Something went wrong sending your request. Please try again or call us directly.",
      };
    }
  } catch (error) {
    console.error("Unexpected error sending contact form email:", error);
    return {
      success: false,
      message:
        "Something went wrong sending your request. Please try again or call us directly.",
    };
  }

  return {
    success: true,
    message:
      "Thank you. A member of our care team will be in touch within one business day.",
  };
}
