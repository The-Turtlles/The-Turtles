"use client";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Logo from "./Logo";
import Icon from "@/components/ui/Icon";
import { makeWhatsAppLink } from "@/lib/whatsapp";
import styles from "./Header.module.css";
const links = [{ label: "Serviços", href: "#servicos" }, { label: "Projetos", href: "#projetos" }, { label: "Quem somos", href: "#sobre" }, { label: "Processo", href: "#processo" }, { label: "Contato", href: "#contato" }];
export default function Header() {
  const [open, setOpen] = useState(false); const reduced=useReducedMotion();
  return <header className={styles.header}><div className={styles.inner}><Logo /><button className={styles.menuButton} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}><Icon name={open?"close":"menu"} size={24}/></button><nav id="desktop-navigation" className={styles.nav} aria-label="Navegação principal">{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}<a className="button button-light" href={makeWhatsAppLink()} target="_blank" rel="noreferrer">Pedir orçamento <Icon name="arrow-up-right" size={18}/></a></nav></div><AnimatePresence>{open&&<motion.nav id="main-navigation" className={styles.mobileNav} aria-label="Navegação móvel" initial={reduced?false:{opacity:0,y:-12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={reduced?{duration:0.12}:{type:"spring",stiffness:300,damping:30}}>{links.map(link=><a key={link.href} href={link.href} onClick={()=>setOpen(false)}>{link.label}<Icon name="arrow-up-right" size={18}/></a>)}<a className="button button-light" href={makeWhatsAppLink()} target="_blank" rel="noreferrer">Pedir orçamento <Icon name="arrow-up-right" size={18}/></a></motion.nav>}</AnimatePresence></header>;
}
