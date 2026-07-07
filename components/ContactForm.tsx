"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

import { submitContactForm } from "@/app/contact/actions";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (values: ContactFormValues) => {
    setResult(null);
    startTransition(async () => {
      const response = await submitContactForm(values);
      setResult(response);
      if (response.success) {
        reset();
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5 rounded-2xl border border-border bg-surface p-6 shadow-premium-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            autoComplete="given-name"
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
            {...register("firstName")}
          />
          {errors.firstName && (
            <p id="firstName-error" className="text-sm text-destructive">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            autoComplete="family-name"
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
            {...register("lastName")}
          />
          {errors.lastName && (
            <p id="lastName-error" className="text-sm text-destructive">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          autoComplete="tel"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          {...register("phone")}
        />
        {errors.phone && (
          <p id="phone-error" className="text-sm text-destructive">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell us about your symptoms, referral, or questions..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      {result && (
        <div
          role="status"
          className={`flex items-start gap-2 rounded-xl p-4 text-sm ${
            result.success
              ? "bg-primary-50 text-primary-700"
              : "bg-destructive/10 text-destructive"
          }`}
        >
          {result.success ? (
            <CheckCircle2 className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          ) : (
            <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          )}
          <p>{result.message}</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={isPending}
        size="lg"
        className="h-12 w-full gap-2 bg-primary-600 text-base text-white hover:bg-primary-700"
      >
        {isPending ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            <Send className="size-4" aria-hidden="true" />
            Request a Consultation
          </>
        )}
      </Button>

      <p className="text-center text-xs text-text-muted">
        By submitting this form you agree to our{" "}
        <a href="/privacy-policy" className="underline hover:text-primary-700">
          Privacy and Information Policy
        </a>
        . This form is not monitored for medical emergencies &mdash; if you
        are experiencing an emergency, call 911.
      </p>
    </form>
  );
}
