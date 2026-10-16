import { site } from "@/data/site";

export function makeWhatsAppLink(message: string = site.whatsappMessage): string {
  return `${site.whatsappLink}?text=${encodeURIComponent(message)}`;
}
