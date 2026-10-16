import Link from "next/link";
import styles from "./Logo.module.css";
import { site } from "@/data/site";
export default function Logo() {
  return <Link className={styles.logo} href="#top" aria-label={`${site.brand}, voltar ao início`}><svg viewBox="0 0 62 62" aria-hidden="true"><path d="M25 5 43 13 50 31 41 47 24 53 8 43 4 25 12 9Z"/><path d="M25 5 24 27 43 13M24 27 50 31M24 27 8 43M24 27 41 47M12 9 24 27 4 25"/><circle cx="53" cy="26" r="4"/></svg><span><strong>{site.brand.split(" ")[0]}</strong><small>{site.brand.split(" ").slice(1).join(" ")}</small></span></Link>;
}
