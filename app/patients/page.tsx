import type { Metadata } from "next";
import Link from "next/link";
import { Video, ClipboardList, Syringe, CreditCard, CheckCircle2 } from "lucide-react";

import { Hero } from "@/components/Hero";
import { MedicalCards } from "@/components/MedicalCards";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CTASection } from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "For Patients | Iron Deficiency & Anemia Care in Ontario",
  description:
    "Understand iron deficiency, IDA, NAID, symptoms, the IV iron treatment pathway, and what to expect from a virtual specialist visit with RestoreHealth.",
  path: "/patients",
  keywords: ["iron deficiency symptoms Ontario", "IV iron assessment"],
});

export default function PatientsPage() {
  return (
    <>
      <Hero
        eyebrow="For Patients"
        title="Iron Deficiency Care Designed Around You"
        description="Understand your symptoms, connect with a specialist virtually, and get a clear treatment pathway &mdash; without months of waiting."
        primaryCta={{ label: "Request a Consultation", href: "/contact" }}
        size="compact"
      />

      <section className="py-4" aria-labelledby="understanding-heading">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 id="understanding-heading" className="sr-only">
            Understanding Iron Deficiency
          </h2>
          <p className="text-lg leading-relaxed text-text-muted">
            Iron deficiency exists on a spectrum &mdash; from low iron stores
            with no anemia, to Iron Deficiency Anemia that affects your
            blood&rsquo;s ability to carry oxygen. Understanding where you
            fall on that spectrum is the first step to feeling better.
          </p>
        </div>
      </section>

      <MedicalCards />

      <section className="bg-muted/50 py-16 sm:py-20" aria-labelledby="pathway-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              IV Iron Treatment Pathway
            </p>
            <h2
              id="pathway-heading"
              className="mt-3 font-heading text-3xl font-medium text-text sm:text-4xl"
            >
              From Assessment To Infusion
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              When IV iron is the right option, RestoreHealth manages the
              coordination so you can focus on feeling better.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Video, title: "Virtual Visit", desc: "Meet with a specialist to review your symptoms and history." },
              { icon: ClipboardList, title: "Lab Review", desc: "Your ferritin, hemoglobin, and related labs are assessed." },
              { icon: Syringe, title: "Treatment Plan", desc: "A personalized IV iron plan is developed if appropriate." },
              { icon: CheckCircle2, title: "Local Infusion", desc: "We refer you to a trusted infusion clinic near you." },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-surface p-6 text-center shadow-premium-sm ring-1 ring-border"
              >
                <item.icon className="mx-auto size-7 text-primary-600" aria-hidden="true" />
                <h3 className="mt-4 font-heading text-base font-medium text-text">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="funding-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-accent-50 p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <CreditCard className="size-7 text-accent-600" aria-hidden="true" />
              <h2
                id="funding-heading"
                className="font-heading text-2xl font-medium text-text sm:text-3xl"
              >
                Funding Information
              </h2>
            </div>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              Coverage for IV iron treatment can vary depending on your
              diagnosis, provincial and private insurance coverage, and
              eligibility under Ontario&rsquo;s public drug programs. During
              your assessment, your specialist will review the funding
              options available to you, including public coverage where you
              qualify and private or out-of-pocket alternatives, so you have
              a clear understanding of costs before proceeding with
              treatment.
            </p>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              Have specific questions about funding? Visit our{" "}
              <Link href="/faq" className="text-primary-700 underline underline-offset-2">
                FAQ page
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="text-primary-700 underline underline-offset-2">
                contact our care team
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <ProcessSteps
        eyebrow="What To Expect"
        title="Your Path Through RestoreHealth"
        description="A clear, guided process from your first click to a coordinated treatment plan."
        steps={[
          {
            icon: <ClipboardList className="size-7" aria-hidden="true" />,
            title: "Complete Intake",
            description: "Share your symptoms, medical history, and any recent lab work.",
          },
          {
            icon: <Video className="size-7" aria-hidden="true" />,
            title: "Meet Your Specialist",
            description: "Attend a secure virtual visit at a time that works for you.",
          },
          {
            icon: <Syringe className="size-7" aria-hidden="true" />,
            title: "Get Your Plan",
            description: "Receive a personalized treatment plan and next steps, including infusion referrals if needed.",
          },
        ]}
      />

      <CTASection
        title="Ready To Understand Your Iron Health?"
        description="Request a consultation and speak with a specialist focused on iron deficiency and anemia."
        primaryCta={{ label: "Request a Consultation", href: "/contact" }}
        secondaryCta={{ label: "Read Patient FAQs", href: "/faq" }}
      />
    </>
  );
}
