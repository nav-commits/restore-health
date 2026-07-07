import type { Metadata } from "next";
import { FileText, Microscope, Syringe, Clock3, ShieldCheck } from "lucide-react";

import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CTASection } from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

const REFERRAL_FORM_URL =
  "https://static1.squarespace.com/static/69eed844de8e67355444a6ad/t/6a0e80388cc123607f9b6cbc/1779335224822/RestoreHealth+Referral+Form+%28Iron%29.pdf";

export const metadata: Metadata = buildMetadata({
  title: "Physician Referrals | Iron Deficiency Specialist Access in Ontario",
  description:
    "Refer your patients to RestoreHealth for focused, virtual iron deficiency and anemia specialist assessment, laboratory review, and infusion coordination across Ontario.",
  path: "/physicians",
  keywords: ["iron infusion specialist"],
});

const WHY_REFER = [
  {
    icon: <Clock3 className="size-6" aria-hidden="true" />,
    title: "Faster Specialist Access",
    description:
      "Patients are seen virtually within days, avoiding months-long hospital-based waitlists.",
  },
  {
    icon: <Microscope className="size-6" aria-hidden="true" />,
    title: "Dedicated Iron Deficiency Focus",
    description:
      "Our specialists concentrate on IDA and NAID, bringing focused clinical expertise to every case.",
  },
  {
    icon: <Syringe className="size-6" aria-hidden="true" />,
    title: "Coordinated Infusion Referrals",
    description:
      "We manage the referral to a trusted local infusion clinic when IV iron is indicated.",
  },
  {
    icon: <ShieldCheck className="size-6" aria-hidden="true" />,
    title: "Reduced Burden On Your Practice",
    description:
      "Offload specialist workup and treatment coordination while staying informed of your patient's care.",
  },
];

export default function PhysiciansPage() {
  return (
    <>
      <Hero
        eyebrow="For Physicians"
        title="Streamlined Iron Deficiency Referrals For Ontario Physicians"
        description="Refer your patients for focused virtual specialist assessment, laboratory review, and treatment coordination &mdash; without the hospital-based wait."
        primaryCta={{
          label: "Download Referral Form",
          href: REFERRAL_FORM_URL,
        }}
        size="compact"
      />

      <section className="py-16 sm:py-20" aria-labelledby="why-refer-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              Why Refer
            </p>
            <h2
              id="why-refer-heading"
              className="mt-3 font-heading text-3xl font-medium text-text sm:text-4xl"
            >
              A Faster, Focused Pathway For Your Patients
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_REFER.map((item, index) => (
              <ServiceCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps
        eyebrow="Referral Process"
        title="Refer A Patient In Three Steps"
        steps={[
          {
            icon: <FileText className="size-7" aria-hidden="true" />,
            title: "Submit Referral",
            description: "Complete the referral form and send it with relevant lab results.",
          },
          {
            icon: <Microscope className="size-7" aria-hidden="true" />,
            title: "Specialist Review",
            description: "A RestoreHealth specialist reviews the referral and schedules a virtual visit.",
          },
          {
            icon: <Syringe className="size-7" aria-hidden="true" />,
            title: "Treatment Coordination",
            description: "We develop a treatment plan and coordinate any necessary infusion referral.",
          },
        ]}
      />

      <section className="bg-muted/50 py-16 sm:py-20" aria-labelledby="specialist-review-heading">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              Specialist Review
            </p>
            <h2
              id="specialist-review-heading"
              className="mt-3 font-heading text-3xl font-medium text-text sm:text-4xl"
            >
              Focused Clinical Assessment
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-text-muted">
              Our specialists review ferritin, hemoglobin, transferrin
              saturation, and relevant history alongside your patient&rsquo;s
              reported symptoms to determine the most appropriate iron
              deficiency or anemia management pathway.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              Treatment Coordination
            </p>
            <h2 className="mt-3 font-heading text-3xl font-medium text-text sm:text-4xl">
              We Handle The Logistics
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-text-muted">
              When IV iron is recommended, RestoreHealth coordinates the
              prescription and referral to a trusted local infusion clinic
              near your patient, keeping the pathway from assessment to
              treatment as short as possible.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Refer A Patient"
        title="Download The RestoreHealth Referral Form"
        description="Complete and submit the referral form to connect your patient with a specialist iron deficiency assessment."
        primaryCta={{
          label: "Download Referral Form",
          href: REFERRAL_FORM_URL,
          external: true,
          icon: "download",
        }}
        secondaryCta={{ label: "Contact Our Team", href: "/contact" }}
      />
    </>
  );
}
