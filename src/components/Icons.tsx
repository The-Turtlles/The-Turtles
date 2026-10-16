"use client";
import type { Service } from "@/types";
import Icon, { type IconName } from "@/components/ui/Icon";
const names: Record<Service["icon"], IconName> = { web: "layout", page: "file-text", catalog: "storefront", pin: "map-pin", tools: "wrench" };
export default function ServiceIcon({ type }: { type: Service["icon"] }) {
  return <Icon name={names[type]} size={54} weight="duotone" />;
}
