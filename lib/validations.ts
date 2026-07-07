import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "First name is required")
    .max(80, "First name is too long"),
  lastName: z
    .string()
    .trim()
    .min(1, "Last name is required")
    .max(80, "Last name is too long"),
  email: z.string().trim().min(1, "Email is required").email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(10, "Enter a valid phone number")
    .max(20, "Enter a valid phone number"),
  message: z
    .string()
    .trim()
    .min(10, "Please share a few details so we can help")
    .max(2000, "Message is too long"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
