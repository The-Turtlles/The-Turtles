"use client";
import { useState } from "react";
import Logo from "./Logo";
import { makeWhatsAppLink } from "@/lib/whatsapp";
import styles from "./Header.module.css";
const links = [{ label: "Serviços", href: "#servicos" }, { label: "Projetos", href: "#projetos" }, { label: "Quem somos", href: "#sobre" }, { label: "Processo", href: "#processo" }, { label: "Contato", href: "#contato" }];
export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className={styles.header}><div className={styles.inner}><Logo /><button className={styles.menuButton} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}><span/><span/></button><nav id="main-navigation" className={`${styles.nav} ${open ? styles.open : ""}`} aria-label="Navegação principal">{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}<a className="button button-light" href={makeWhatsAppLink()} target="_blank" rel="noreferrer">Fale no WhatsApp <span className="arrow">↗</span></a></nav></div></header>;
}
