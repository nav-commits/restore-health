import type { Metadata } from "next";
import Link from "next/link";
import { Users, Lightbulb, Stethoscope, Laptop, Target } from "lucide-react";

import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us | Virtual Iron Deficiency Specialists in Ontario",
  description:
    "Learn how RestoreHealth is modernizing iron deficiency and anemia care across Ontario through specialist-led virtual medical visits.",
  path: "/about",
});

const SECTIONS = [
  {
    icon: <Users className="size-6" aria-hidden="true" />,
    title: "Who We Are",
    body: (
      <>
        RestoreHealth is a specialist-led virtual medical clinic dedicated to
        the diagnosis and management of iron deficiency and anemia for
        patients across Ontario. We connect patients directly with medical
        specialists through secure virtual visits, removing the barriers of
        geography and long hospital waitlists.
      </>
    ),
  },
  {
    icon: <Lightbulb className="size-6" aria-hidden="true" />,
    title: "Why RestoreHealth Was Created",
    body: (
      <>
        RestoreHealth was created because specialists repeatedly witnessed
        patients struggling with untreated iron deficiency and anemia while
        waiting months for traditional healthcare pathways. Fatigue, brain
        fog, and reduced quality of life often persisted simply because
        access to specialist care took too long. RestoreHealth was built to
        close that gap.
      </>
    ),
  },
  {
    icon: <Stethoscope className="size-6" aria-hidden="true" />,
    title: "Specialist-Led Medical Expertise",
    body: (
      <>
        Every patient assessment at RestoreHealth is completed by a medical
        specialist with a focus on iron deficiency and anemia management.
        From reviewing laboratory results to developing a personalized
        treatment plan, our specialists bring focused clinical expertise to
        every visit. Learn more about{" "}
        <Link href="/patients" className="text-primary-700 underline underline-offset-2">
          what to expect as a patient
        </Link>
        .
      </>
    ),
  },
  {
    icon: <Laptop className="size-6" aria-hidden="true" />,
    title: "Virtual Healthcare Model",
    body: (
      <>
        RestoreHealth combines medical expertise with digital efficiency.
        Secure virtual visits allow patients across Ontario &mdash; from
        major cities to rural communities &mdash; to meet with a specialist
        without travel, time off work, or lengthy hospital waitlists. Once a
        treatment plan is confirmed, we coordinate referrals with{" "}
        <Link href="/physicians" className="text-primary-700 underline underline-offset-2">
          trusted local infusion clinics
        </Link>
        .
      </>
    ),
  },
  {
    icon: <Target className="size-6" aria-hidden="true" />,
    title: "Our Mission",
    body: (
      <>
        To modernize access to iron deficiency and anemia care across
        Ontario by pairing specialist-led medical expertise with a
        streamlined virtual care model &mdash; so geography and wait times no
        longer stand between patients and their energy.
      </>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About RestoreHealth"
        title="Modernizing Iron Deficiency Care Across Ontario"
        description="A specialist-led virtual medical clinic built to close the gap between patients and the iron deficiency care they need."
        size="compact"
      />

      <section className="py-16 sm:py-20" aria-labelledby="about-sections-heading">
        <h2 id="about-sections-heading" className="sr-only">
          About RestoreHealth
        </h2>
        <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
          {SECTIONS.map((section) => (
            <div
              key={section.title}
              className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-7 shadow-premium-sm sm:flex-row sm:p-8"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                {section.icon}
              </div>
              <div>
                <h3 className="font-heading text-xl font-medium text-text">
                  {section.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-text-muted">
                  {section.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Ready To Connect With A Specialist?"
        description="Request a consultation and take the first step toward faster, specialist-led iron care."
        primaryCta={{ label: "Request a Consultation", href: "/contact" }}
        secondaryCta={{ label: "Meet Our Approach for Patients", href: "/patients" }}
      />
    </>
  );
}
