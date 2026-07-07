import type { Metadata } from "next";
import { Phone, Printer, MapPinned, Clock } from "lucide-react";

import { Hero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";
import { buildMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | Request a Consultation",
  description:
    "Request a consultation with a RestoreHealth iron deficiency specialist, or get in touch with our care team for questions about virtual care in Ontario.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Get Started"
        title="Request a Consultation"
        description="Tell us a little about yourself and a member of our care team will be in touch to schedule your virtual specialist visit."
        size="compact"
      />

      <section className="pb-16 sm:pb-24" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="sr-only">
          Contact RestoreHealth
        </h2>
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-premium-sm">
              <h3 className="font-heading text-lg font-medium text-text">
                Contact Information
              </h3>
              <ul className="mt-4 space-y-4 text-sm text-text-muted">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-primary-600" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-text">Phone</p>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="hover:text-primary-700"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Printer className="mt-0.5 size-5 shrink-0 text-primary-600" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-text">Fax</p>
                    <p>{siteConfig.faxDisplay}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPinned className="mt-0.5 size-5 shrink-0 text-primary-600" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-text">Service Area</p>
                    <p>Virtual care available across Ontario, Canada</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-primary-600" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-text">Hours</p>
                    <p>Monday &ndash; Friday, 9:00 AM &ndash; 5:00 PM ET</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-primary-600 p-6 text-white">
              <p className="text-sm leading-relaxed text-white/90">
                RestoreHealth does not provide emergency medical services.
                If you are experiencing a medical emergency, call 911 or go
                to your nearest emergency department immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
