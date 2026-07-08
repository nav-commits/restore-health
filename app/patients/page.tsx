import type { Metadata } from "next";
import Link from "next/link";
import {
  Video,
  ClipboardList,
  Syringe,
  CheckCircle2,
  Landmark,
  Wallet,
} from "lucide-react";

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

      <section
        id="ontario-funding-pathways"
        className="scroll-mt-24 py-16 sm:py-20"
        aria-labelledby="funding-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              Funding Information
            </p>
            <h2
              id="funding-heading"
              className="mt-3 font-heading text-3xl font-medium text-text sm:text-4xl"
            >
              Ontario Funding Pathways
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              How your IV iron treatment is funded depends on your
              diagnosis. Your specialist confirms which pathway applies to
              you during your assessment.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-7 shadow-premium-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <Landmark className="size-6" aria-hidden="true" />
                </div>
                <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                  Publicly Funded
                </span>
              </div>
              <h3 className="mt-5 font-heading text-xl font-medium text-text">
                Iron Deficiency Anemia (IDA) &mdash; OHIP Pathway
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                For patients with a confirmed IDA diagnosis, treatment with
                Monoferric (ferric derisomaltose) can qualify for public
                funding under Ontario&rsquo;s Limited Use drug program.
              </p>
              <p className="mt-4 text-sm font-medium text-text">
                Eligibility is confirmed when:
              </p>
              <ul className="mt-2 space-y-2 text-sm text-text-muted">
                {[
                  "A confirmed Iron Deficiency Anemia diagnosis is on file",
                  "Oral iron has failed after at least a 4-week trial",
                  "There is documented intolerance to oral iron, or",
                  "There is a contraindication to oral iron",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-primary-600"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-xl bg-primary-50 p-4 text-sm leading-relaxed text-primary-700">
                When these criteria are met, your specialist submits a
                Limited Use (LU Code 610) authorization and Monoferric is
                publicly funded through OHIP+, ODB, or the Trillium Drug
                Program.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-7 shadow-premium-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                  <Wallet className="size-6" aria-hidden="true" />
                </div>
                <span className="inline-flex items-center rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">
                  Private / Insurance
                </span>
              </div>
              <h3 className="mt-5 font-heading text-xl font-medium text-text">
                Non-Anemic Iron Deficiency (NAID) &mdash; Private/Insurance
                Pathway
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                NAID does not generally qualify for Ontario&rsquo;s public
                drug programs, but most private and workplace insurance
                plans cover IV iron formulations.
              </p>
              <p className="mt-4 text-sm font-medium text-text">
                What to expect:
              </p>
              <ul className="mt-2 space-y-2 text-sm text-text-muted">
                {[
                  "Premium insurance plans typically cover treatment",
                  "Eligibility is usually confirmed in a single virtual visit",
                  "An out-of-pocket option is available if you don't have coverage",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-accent-600"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-xl bg-accent-50 p-4 text-sm leading-relaxed text-text">
                Your specialist will confirm your coverage and walk you
                through the out-of-pocket option so you know the full cost
                before proceeding.
              </p>
            </div>
          </div>

          <p className="mt-8 text-center text-base text-text-muted">
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
