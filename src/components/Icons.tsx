import type { Service } from "@/types";
export default function ServiceIcon({ type }: { type: Service["icon"] }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return <svg viewBox="0 0 52 52" aria-hidden="true" {...common}>
    {type === "web" && <><rect x="5" y="8" width="42" height="34" rx="3"/><path d="M5 17h42M13 12.5h.1M18 12.5h.1M23 12.5h.1M17 26h18M17 32h11"/></>}
    {type === "page" && <><path d="M13 5h19l9 9v33H13z"/><path d="M32 5v10h9M19 25h16M19 32h16M19 39h10"/></>}
    {type === "catalog" && <><path d="M7 12h38v31H7zM7 19h38M15 12v31M23 27h15M23 33h15"/></>}
    {type === "pin" && <><path d="M42 22c0 12-16 25-16 25S10 34 10 22a16 16 0 1 1 32 0Z"/><circle cx="26" cy="22" r="5"/></>}
    {type === "tools" && <><path d="M32 8a12 12 0 0 0-14 15L6 35a6 6 0 0 0 8 8l12-12A12 12 0 0 0 41 17l-8 8-8-8z"/></>}
  </svg>;
}
