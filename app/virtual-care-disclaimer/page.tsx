import type { Metadata } from "next";

import { Hero } from "@/components/Hero";
import { buildMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Virtual Care Disclaimer",
  description:
    "Important information about the limitations, patient responsibilities, and consent considerations of receiving virtual medical care from RestoreHealth.",
  path: "/virtual-care-disclaimer",
});

const SECTIONS = [
  {
    title: "Telehealth Limitations",
    body: `Virtual care allows specialists to assess, diagnose, and manage many conditions remotely, but it has inherent limitations compared to in-person care. Certain conditions may require in-person assessment, and your specialist may recommend you seek in-person care if virtual assessment is not sufficient.`,
  },
  {
    title: "No Physical Examination",
    body: `Virtual visits do not include a hands-on physical examination. Your specialist's assessment will be based on your reported symptoms, medical history, and any laboratory or diagnostic results available at the time of your visit.`,
  },
  {
    title: "Patient Responsibilities",
    body: `Patients are responsible for providing accurate and complete information about their symptoms, medical history, and current medications. Patients are also responsible for arranging any recommended laboratory testing and for following up as directed by their specialist.`,
  },
  {
    title: "Technology Requirements",
    body: `Virtual visits require a stable internet connection and a device with camera and microphone capabilities. Technical issues may occasionally interrupt or delay a scheduled visit; RestoreHealth will make reasonable efforts to reschedule promptly when this occurs.`,
  },
  {
    title: "Electronic Communication Risks",
    body: `While RestoreHealth uses secure, encrypted platforms for virtual visits and communication, no electronic transmission of information can be guaranteed to be completely secure or error-free. By using our virtual care services, you acknowledge these inherent risks of electronic communication.`,
  },
  {
    title: "Consent to Virtual Care",
    body: `By requesting and participating in a virtual visit with RestoreHealth, you consent to receiving care through telehealth, understanding both its benefits and limitations as described on this page. You may withdraw this consent at any time and request in-person care alternatives, which may involve referral outside of RestoreHealth's virtual services.`,
  },
];

export default function VirtualCareDisclaimerPage() {
  return (
    <>
      <Hero
        eyebrow="Legal"
        title="Virtual Care Disclaimer"
        description="What you should know before receiving virtual medical care from RestoreHealth."
        size="compact"
        showVisual={false}
      />

      <section className="pb-20" aria-labelledby="disclaimer-heading">
        <h2 id="disclaimer-heading" className="sr-only">
          Virtual Care Disclaimer Details
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
