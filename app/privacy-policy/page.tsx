import type { Metadata } from "next";

import { Hero } from "@/components/Hero";
import { buildMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy and Information Policy",
  description:
    "How RestoreHealth collects, uses, and protects personal health information in compliance with Ontario's Personal Health Information Protection Act (PHIPA).",
  path: "/privacy-policy",
});

const SECTIONS = [
  {
    title: "Collection of Personal Health Information",
    body: [
      `RestoreHealth collects personal health information directly from patients, including information provided during intake, virtual visits, and any laboratory or diagnostic results shared with us or our affiliated specialists. This information is collected only to the extent necessary to assess, diagnose, and coordinate treatment for iron deficiency and anemia.`,
      `Personal health information may include your name, contact details, health history, symptoms, laboratory results, and information related to your treatment plan and any referrals made on your behalf.`,
    ],
  },
  {
    title: "Use of Electronic Medical Records (EMR)",
    body: [
      `RestoreHealth maintains patient records in a secure Electronic Medical Record (EMR) system. Access to your EMR is restricted to authorized clinical and administrative staff directly involved in your care, and to the extent required to coordinate referrals with infusion clinics or your referring physician.`,
    ],
  },
  {
    title: "PHIPA Compliance",
    body: [
      `RestoreHealth collects, uses, and discloses personal health information in accordance with Ontario's Personal Health Information Protection Act (PHIPA). As a health information custodian, we are committed to protecting the confidentiality of your personal health information and only using it for the purposes for which it was collected, or as otherwise permitted or required by law.`,
    ],
  },
  {
    title: "Virtual Care Privacy",
    body: [
      `Virtual visits are conducted through secure, encrypted video and communication platforms designed to protect patient confidentiality. While RestoreHealth takes reasonable steps to secure these platforms, patients should be aware that no electronic communication is entirely free of risk. Please review our `,
      null,
    ],
    hasLink: true,
  },
  {
    title: "AI Scribing Disclosure",
    body: [
      `RestoreHealth may use AI-assisted scribing tools during virtual visits to support clinical documentation. When used, these tools generate draft clinical notes based on the conversation between you and your specialist. All AI-generated documentation is reviewed and confirmed by your specialist before being finalized in your medical record. Patients will be notified when AI scribing tools are in use during a visit and may request that such tools not be used.`,
    ],
  },
  {
    title: "Patient Rights",
    body: [
      `You have the right to access your personal health information held by RestoreHealth, to request corrections to that information, and to withdraw consent for certain uses or disclosures, subject to legal and professional obligations. To exercise these rights, please contact our care team using the information provided on our Contact page.`,
    ],
  },
  {
    title: "Information Security",
    body: [
      `RestoreHealth uses administrative, technical, and physical safeguards designed to protect personal health information against unauthorized access, use, disclosure, alteration, or destruction. These safeguards include restricted system access, encrypted data transmission, and ongoing staff training on privacy obligations.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Hero
        eyebrow="Legal"
        title="Privacy and Information Policy"
        description="How RestoreHealth collects, uses, and protects your personal health information."
        size="compact"
        showVisual={false}
      />

      <section className="pb-20" aria-labelledby="privacy-heading">
        <h2 id="privacy-heading" className="sr-only">
          Privacy Policy Details
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
              <div className="mt-3 space-y-3 text-base leading-relaxed text-text-muted">
                {section.hasLink ? (
                  <p>
                    {section.body[0]}
                    <a
                      href="/virtual-care-disclaimer"
                      className="text-primary-700 underline underline-offset-2"
                    >
                      Virtual Care Disclaimer
                    </a>{" "}
                    for more information on the privacy considerations of
                    virtual visits.
                  </p>
                ) : (
                  section.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))
                )}
              </div>
            </div>
          ))}

          <p className="text-sm text-text-muted">
            Questions about this policy or how your information is handled
            can be directed to our care team through our{" "}
            <a href="/contact" className="text-primary-700 underline underline-offset-2">
              Contact page
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
