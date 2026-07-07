import type { Metadata } from "next";

import { Hero } from "@/components/Hero";
import { buildMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description:
    "Terms governing your use of the RestoreHealth website and virtual medical services in Ontario, including medical disclaimers and limitations of liability.",
  path: "/terms-of-use",
});

const SECTIONS = [
  {
    title: "Medical Disclaimer",
    body: `Content on this website is provided for general informational purposes only and does not constitute medical advice. It is not a substitute for professional medical assessment, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition.`,
  },
  {
    title: "Emergency Disclaimer",
    body: `RestoreHealth does not provide emergency medical services and this website should never be used in a medical emergency. If you are experiencing a medical emergency, call 911 or go to your nearest emergency department immediately.`,
  },
  {
    title: "Website Limitations",
    body: `This website is provided for informational purposes and to facilitate consultation requests. While we make reasonable efforts to keep information accurate and current, RestoreHealth makes no warranties, express or implied, about the completeness, accuracy, or reliability of the content on this site.`,
  },
  {
    title: "Virtual Care Limitations",
    body: `Services provided through RestoreHealth are delivered virtually and are subject to the inherent limitations of telehealth, including the inability to perform an in-person physical examination. Please review our Virtual Care Disclaimer for full details on the limitations of virtual care.`,
  },
  {
    title: "Ontario-Only Services",
    body: `RestoreHealth's virtual medical services are available exclusively to patients located within the province of Ontario, Canada, in accordance with applicable licensing and regulatory requirements for the practice of medicine. We are not able to provide clinical services to individuals located outside of Ontario at the time of their visit.`,
  },
  {
    title: "Independent Infusion Clinic Disclaimer",
    body: `RestoreHealth coordinates referrals to third-party, independently owned and operated infusion clinics. These clinics are not owned, operated, or controlled by RestoreHealth, and RestoreHealth is not responsible for the services, care, or outcomes provided by these independent clinics.`,
  },
  {
    title: "Limitation of Liability",
    body: `To the fullest extent permitted by law, RestoreHealth and its specialists, employees, and affiliates shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on information contained within it, except as prohibited by applicable law or professional regulation.`,
  },
];

export default function TermsOfUsePage() {
  return (
    <>
      <Hero
        eyebrow="Legal"
        title="Terms of Use"
        description="The terms governing your use of the RestoreHealth website and virtual medical services."
        size="compact"
        showVisual={false}
      />

      <section className="pb-20" aria-labelledby="terms-heading">
        <h2 id="terms-heading" className="sr-only">
          Terms of Use Details
        </h2>
        <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-text-muted">
            Last updated: January 2026 &middot; {siteConfig.name}
          </p>

          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="font-heading text-xl font-medium text-text">
                {section.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-text-muted">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
