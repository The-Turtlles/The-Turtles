import type { MetadataRoute } from "next";
import { site } from "@/data/site";
export const dynamic = "force-static";
const baseUrl = site.domain.startsWith("http") ? site.domain.replace(/\/$/, "") : "https://example.com";
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${baseUrl}/sitemap.xml` };
}
