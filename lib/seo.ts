import type { Metadata } from "next";

export const siteConfig = {
  name: "RestoreHealth",
  legalName: "RestoreHealth Virtual Medical Clinic",
  description:
    "RestoreHealth is a specialist-led virtual medical clinic providing rapid iron deficiency and anemia assessments, personalized treatment plans, and IV iron infusion coordination across Ontario.",
  // Placeholder production domain — replace with the live domain before launch.
  url: "https://www.restorehealth.ca",
  phone: "+1-416-943-9070",
  phoneDisplay: "416-943-9070",
  fax: "+1-416-943-9071",
  faxDisplay: "416-943-9071",
  ogImage: "/images/og-cover.jpg",
  keywordsPrimary: [
    "iron deficiency clinic Ontario",
    "IV iron infusion Ontario",
    "iron deficiency specialist Ontario",
    "anemia treatment Ontario",
    "virtual medical clinic Ontario",
  ],
  keywordsSecondary: [
    "iron deficiency symptoms Ontario",
    "iron infusion specialist",
    "virtual healthcare Ontario",
    "IV iron assessment",
  ],
};

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
}

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage,
}: PageMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const image = ogImage ?? siteConfig.ogImage;

  return {
    title,
    description,
    keywords: [...keywords, ...siteConfig.keywordsPrimary],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
