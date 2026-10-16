import styles from "./Marquee.module.css";
const items = ["Sites", "Landing pages", "Catálogos", "Google Meu Negócio", "Manutenção"];
export default function Marquee() { return <div className={styles.wrap} aria-label={items.join(" · ")}><div className={styles.track} aria-hidden="true">{[0,1].map(copy => <div className={styles.group} key={copy}>{items.map(item => <span key={item}>{item}<b>✳</b></span>)}</div>)}</div></div>; }
