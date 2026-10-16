"use client";

import {
  ArrowDown, ArrowUpRight, Check, FileText, InstagramLogo, Layout, MapPin,
  Minus, Plus, Storefront, Wrench, X, List, EnvelopeSimple, WhatsappLogo,
  Globe, type IconProps,
} from "@phosphor-icons/react";
import type { ComponentType } from "react";

export type IconName = "arrow-up-right" | "arrow-down" | "menu" | "close" | "whatsapp" | "instagram" | "mail" | "plus" | "minus" | "check" | "map-pin" | "wrench" | "file-text" | "storefront" | "layout" | "globe";
export type IconWeight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";

const iconMap: Record<IconName, ComponentType<IconProps>> = {
  "arrow-up-right": ArrowUpRight, "arrow-down": ArrowDown, menu: List, close: X,
  whatsapp: WhatsappLogo, instagram: InstagramLogo, mail: EnvelopeSimple, plus: Plus,
  minus: Minus, check: Check, "map-pin": MapPin, wrench: Wrench,
  "file-text": FileText, storefront: Storefront, layout: Layout, globe: Globe,
};

export default function Icon({ name, size = 24, weight = "bold", className, label }: {
  name: IconName; size?: number; weight?: IconWeight; className?: string; label?: string;
}) {
  const Glyph = iconMap[name];
  return <Glyph size={size} weight={weight} className={className} color="currentColor" aria-label={label} aria-hidden={label ? undefined : true} role={label ? "img" : undefined} />;
}
