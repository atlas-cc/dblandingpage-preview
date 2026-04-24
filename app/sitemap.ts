import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://disruptivebrands.co";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-04-24")
    },
    ...caseStudies.map((study) => ({
      url: `${baseUrl}/case-studies/${study.slug}`,
      lastModified: new Date("2026-04-24")
    }))
  ];
}
