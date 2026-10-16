import type { Metadata, Viewport } from "next";
import { Anton, DM_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const display = Anton({ subsets: ["latin"], weight: "400", variable: "--font-display", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.domain.startsWith("http") ? site.domain : "https://example.com"),
  title: site.title,
  description: site.description,
  applicationName: site.brand,
  openGraph: { title: site.title, description: site.description, locale: "pt_BR", type: "website", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: ["/og.png"] },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = { themeColor: "#6C151E", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.brand,
  description: site.description,
  email: site.email,
  telephone: `+${site.whatsappNumber}`,
  url: site.domain.startsWith("http") ? site.domain : "https://example.com",
  sameAs: [site.instagramUrl],
  areaServed: { "@type": "Country", name: "Brasil" },
  availableLanguage: "Portuguese",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
    <body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><SmoothScroll /><CustomCursor />{children}</body>
  </html>;
}
