import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/seo";

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/patients", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/physicians", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/faq", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms-of-use", priority: 0.3, changeFrequency: "yearly" as const },
  {
    path: "/virtual-care-disclaimer",
    priority: 0.3,
    changeFrequency: "yearly" as const,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
