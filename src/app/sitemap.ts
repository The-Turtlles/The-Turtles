import type { MetadataRoute } from "next";
import { site } from "@/data/site";
export const dynamic = "force-static";
const baseUrl = site.domain.startsWith("http") ? site.domain.replace(/\/$/, "") : "https://example.com";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${baseUrl}/`, lastModified: new Date("2026-01-01"), changeFrequency: "monthly", priority: 1 }];
}
