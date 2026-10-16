import Logo from "./Logo";
import { site } from "@/data/site";
import styles from "./Footer.module.css";
export default function Footer(){return <footer className={styles.footer}><div className={styles.top}><Logo/><p>Presença digital feita com intenção.<br/>Código claro, conversa direta.</p><a className={styles.back} href="#top">Voltar ao topo ↑</a></div><div className={styles.bottom}><span>© {site.year} {site.brand}</span><div><a href="#servicos">Serviços</a><a href="#projetos">Projetos</a><a href="#contato">Contato</a></div><span>Feito no Brasil.</span></div></footer>}
