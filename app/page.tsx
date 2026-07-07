import type { Metadata } from "next";
import {
  Stethoscope,
  Laptop,
  ClipboardList,
  MapPinned,
  Syringe,
  Clock3,
  ClipboardCheck,
  Microscope,
  Workflow,
} from "lucide-react";

import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ServiceCard } from "@/components/ServiceCard";
import { MedicalCards } from "@/components/MedicalCards";
import { CTASection } from "@/components/CTASection";
import { Testimonials } from "@/components/Testimonials";
import { buildMetadata } from "@/lib/seo";

const REFERRAL_FORM_URL =
  "https://static1.squarespace.com/static/69eed844de8e67355444a6ad/t/6a0e80388cc123607f9b6cbc/1779335224822/RestoreHealth+Referral+Form+%28Iron%29.pdf";

export const metadata: Metadata = buildMetadata({
  title: "RestoreHealth | Specialist Iron Deficiency & Anemia Care in Ontario",
  description:
    "Virtual specialist assessments for iron deficiency and anemia across Ontario. Skip the hospital waitlist and receive expert medical guidance from home.",
  path: "/",
});

const iconClass = "size-6";
const PATIENT_BENEFITS = [
  { icon: <Stethoscope className={iconClass} aria-hidden="true" />, title: "Specialist Medical Evaluation", description: "Every patient is assessed by a medical specialist focused on iron deficiency and anemia." },
  { icon: <Laptop className={iconClass} aria-hidden="true" />, title: "Convenient Virtual Appointments", description: "Meet with your specialist securely from home, without travel or time off work." },
  { icon: <ClipboardList className={iconClass} aria-hidden="true" />, title: "Personalized Treatment Planning", description: "Treatment plans are tailored to your lab results, symptoms, and medical history." },
  { icon: <MapPinned className={iconClass} aria-hidden="true" />, title: "Ontario-Wide Access", description: "Wherever you live in Ontario, specialist iron care is within reach." },
  { icon: <Syringe className={iconClass} aria-hidden="true" />, title: "IV Iron Pathway Coordination", description: "We coordinate referrals to trusted local infusion clinics for your treatment." },
  { icon: <Clock3 className={iconClass} aria-hidden="true" />, title: "Reduced Waiting Times", description: "A streamlined virtual pathway means faster access to specialist assessment." },
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="Specialist Iron Deficiency Care Without The Wait"
        description="Virtual specialist assessments for iron deficiency and anemia across Ontario. Receive expert medical guidance from the comfort and privacy of your home."
        primaryCta={{ label: "Request a Consultation", href: "/contact" }}
        secondaryCta={{ label: "Physician Referral", href: "/physicians" }}
        trustBadges={[
          "Specialist-led care",
          "Ontario-wide availability",
          "PHIPA-compliant virtual visits",
        ]}
      />

      <TrustSection />

      <section className="bg-muted/50 py-16 sm:py-20" aria-labelledby="problem-heading">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              The Problem
            </p>
            <h2
              id="problem-heading"
              className="mt-3 font-heading text-3xl font-medium text-text text-balance sm:text-4xl"
            >
              Waiting Months For Iron Care Shouldn&rsquo;t Be The Standard
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-text-muted">
              Patients experiencing iron deficiency and anemia symptoms often
              face long wait times before receiving specialist assessment
              through traditional hospital-based pathways. Fatigue, brain
              fog, and reduced quality of life persist while patients wait
              for an appointment.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              RestoreHealth creates a faster, streamlined pathway &mdash;
              connecting patients directly with specialists who focus on
              iron deficiency and anemia, virtually and across all of
              Ontario.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-surface p-6 shadow-premium-sm ring-1 ring-border">
              <Microscope className="size-7 text-primary-600" aria-hidden="true" />
              <p className="mt-4 font-heading text-lg font-medium text-text">
                Traditional Pathway
              </p>
              <p className="mt-1 text-sm text-text-muted">
                Months of waiting for a hospital-based specialist referral.
              </p>
            </div>
            <div className="rounded-2xl bg-primary-600 p-6 text-white shadow-premium-sm">
              <Workflow className="size-7" aria-hidden="true" />
              <p className="mt-4 font-heading text-lg font-medium">
                RestoreHealth Pathway
              </p>
              <p className="mt-1 text-sm text-white/85">
                Rapid virtual specialist assessment, without the wait.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps
        eyebrow="How It Works"
        title="A Simple, Specialist-Led Pathway"
        description="From first assessment to coordinated treatment, RestoreHealth keeps your care moving."
        steps={[
          {
            icon: <Laptop className="size-7" aria-hidden="true" />,
            title: "Virtual Assessment",
            description: "Patients complete intake and meet with a specialist online.",
          },
          {
            icon: <ClipboardCheck className="size-7" aria-hidden="true" />,
            title: "Clinical Review",
            description: "Specialists evaluate symptoms, medical history, and laboratory results.",
          },
          {
            icon: <Syringe className="size-7" aria-hidden="true" />,
            title: "Coordinated Treatment",
            description: "RestoreHealth coordinates prescriptions and local infusion referrals.",
          },
        ]}
      />

      <section className="bg-muted/50 py-16 sm:py-20" aria-labelledby="benefits-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              Patient Benefits
            </p>
            <h2
              id="benefits-heading"
              className="mt-3 font-heading text-3xl font-medium text-text sm:text-4xl"
            >
              Care Built Around Your Time And Your Health
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PATIENT_BENEFITS.map((benefit, index) => (
              <ServiceCard
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                index={index}
                className="bg-surface"
              />
            ))}
          </div>
        </div>
      </section>

      <MedicalCards />

      <CTASection
        eyebrow="For Physicians"
        title="Refer Your Patient For Specialist Iron Assessment"
        description="Help your patients access focused iron deficiency evaluation and treatment coordination."
        primaryCta={{
          label: "Download Referral Form",
          href: REFERRAL_FORM_URL,
          external: true,
          icon: "download",
        }}
        secondaryCta={{ label: "Physician Information", href: "/physicians" }}
      />

      <Testimonials />

      <CTASection
        title="Ready To Take The Next Step?"
        description="Request a consultation today and connect with a specialist focused on your iron health."
        primaryCta={{ label: "Request a Consultation", href: "/contact" }}
        tone="muted"
      />
    </>
  );
}
