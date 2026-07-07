import { siteConfig } from "@/lib/seo";

const ONTARIO_AREA_SERVED = {
  "@type": "State",
  name: "Ontario",
  containedInPlace: {
    "@type": "Country",
    name: "Canada",
  },
};

export function medicalOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    faxNumber: siteConfig.fax,
    medicalSpecialty: {
      "@type": "MedicalSpecialty",
      name: "Hematology - Iron Deficiency and Anemia Management",
    },
    areaServed: ONTARIO_AREA_SERVED,
    availableService: {
      "@type": "MedicalTherapy",
      name: "Virtual specialist assessment for iron deficiency and anemia",
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalClinic"],
    "@id": `${siteConfig.url}/#clinic`,
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    priceRange: "$$",
    areaServed: ONTARIO_AREA_SERVED,
    address: {
      "@type": "PostalAddress",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "17:00",
    },
  };
}

export function physicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${siteConfig.url}/#physicians`,
    name: `${siteConfig.name} Specialist Physicians`,
    description:
      "Medical specialists at RestoreHealth focused on the diagnosis and management of iron deficiency and anemia, delivering care virtually to patients across Ontario.",
    medicalSpecialty: "Hematology",
    availableService: {
      "@type": "MedicalProcedure",
      name: "Iron deficiency and anemia specialist assessment",
    },
    areaServed: ONTARIO_AREA_SERVED,
    isPartOf: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function jsonLdScript(data: unknown) {
  return {
    __html: JSON.stringify(data),
  };
}
