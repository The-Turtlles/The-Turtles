import { site } from "@/data/site";
import { makeWhatsAppLink } from "@/lib/whatsapp";
import ShellPattern from "./ShellPattern";
import styles from "./Hero.module.css";
export default function Hero() {
 return <section className={`${styles.hero} grain`}><div className={styles.inner}><p className="eyebrow">Estúdio digital independente · Brasil</p><h1>Sites que colocam o seu negócio <em>no mapa.</em></h1><div className={styles.bottom}><p>{site.description}</p><div className={styles.actions}><a className="button button-light" href={makeWhatsAppLink()} target="_blank" rel="noreferrer">Vamos conversar <span className="arrow">↗</span></a><a className="button button-outline" href="#projetos">Ver projetos <span className="arrow">↓</span></a></div></div><ShellPattern /><span className={styles.stamp} aria-hidden="true">IDEIA BOA<br/>PRECISA SER<br/>ENCONTRADA.</span></div><div className={styles.bottomLine}><span>ESTRATÉGIA + DESIGN + CÓDIGO</span><span>BARUERI · SP / BRASIL</span></div></section>;
}
