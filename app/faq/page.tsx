import type { Metadata } from "next";

import { Hero } from "@/components/Hero";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";
import { faqPageSchema, jsonLdScript } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about iron deficiency, anemia, IV iron funding in Ontario, Monoferric costs, and how virtual specialist visits with RestoreHealth work.",
  path: "/faq",
});

const FAQ_ITEMS = [
  {
    question:
      "What is the difference between Iron Deficiency Anemia (IDA) and Non-Anemic Iron Deficiency (NAID)?",
    answer:
      "Iron Deficiency Anemia (IDA) occurs when iron stores are low enough that the body cannot produce sufficient healthy red blood cells, resulting in low hemoglobin. Non-Anemic Iron Deficiency (NAID) means iron stores are depleted, but hemoglobin remains within a normal range. Both can cause similar symptoms such as fatigue and brain fog, but the diagnosis and available funding pathways can differ between the two.",
  },
  {
    question: "Will my IV Iron treatment be covered by Ontario Public Funding?",
    answer:
      "Patients with a confirmed Iron Deficiency Anemia (IDA) diagnosis can qualify for public funding of Monoferric (ferric derisomaltose) through Ontario's Limited Use drug program. Eligibility requires that oral iron has failed after at least a 4-week trial, or that there is documented intolerance or a contraindication to oral iron. When these criteria are met, your specialist submits a Limited Use (LU Code 610) authorization and treatment is funded through OHIP+, ODB, or the Trillium Drug Program.",
  },
  {
    question:
      "What if I have Non-Anemic Iron Deficiency and do not qualify for public funding?",
    answer:
      "Non-Anemic Iron Deficiency (NAID) does not generally qualify for Ontario's public drug programs, but most private and workplace insurance plans cover IV iron formulations, and eligibility is usually confirmed in a single virtual visit. If you don't have coverage, an out-of-pocket option is available &mdash; your specialist will confirm your coverage and walk you through the cost before proceeding.",
  },
  {
    question: "How much does Monoferric cost if paying out-of-pocket?",
    answer:
      "Out-of-pocket cost for Monoferric can vary depending on your prescribed dose, the infusion clinic administering treatment, and any applicable dispensing fees. Your RestoreHealth specialist and the coordinating infusion clinic will provide an accurate quote based on your specific treatment plan before you proceed.",
  },
  {
    question:
      "I live in the Niagara Region. Is there a specific funding program available?",
    answer:
      "Funding programs can vary by region and change over time. If you live in the Niagara Region, speak with your RestoreHealth specialist or contact our care team directly so we can advise on any region-specific funding options that may apply to your situation.",
  },
  {
    question: "How many visits are required for the infusion?",
    answer:
      "The number of infusion visits depends on your calculated iron deficit and the specific product prescribed. Many patients complete treatment in one to two infusion visits, though your specialist will confirm the exact plan based on your laboratory results.",
  },
  {
    question: "Are specialist visits virtual?",
    answer:
      "Yes. All RestoreHealth specialist visits are conducted virtually by secure video or phone, allowing you to be assessed from home anywhere in Ontario.",
  },
  {
    question: "Do I need a referral from my doctor?",
    answer:
      "A physician referral is not required to request a consultation with RestoreHealth, though referrals are welcome and can help streamline your care. You can request a consultation directly through our contact page.",
  },
];

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqPageSchema(FAQ_ITEMS))}
      />

      <Hero
        eyebrow="Frequently Asked Questions"
        title="Answers About Iron Deficiency, Funding, And Virtual Care"
        description="Everything you need to know about RestoreHealth's specialist assessments, treatment pathway, and funding options in Ontario."
        size="compact"
      />

      <section className="pb-16 sm:pb-20" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="sr-only">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      <CTASection
        title="Still Have Questions?"
        description="Our care team is happy to help with anything not covered here."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        tone="muted"
      />
    </>
  );
}
