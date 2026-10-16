import { services } from "@/data/site";
import ServiceIcon from "./Icons";
import styles from "./Services.module.css";
export default function Services() {
 return <section id="servicos" className={`section ${styles.services}`}><div className="container"><div className="section-heading"><div><span className="eyebrow">01 / O que fazemos</span><h2>Presença que<br/>trabalha por você.</h2></div><p>Seu site não precisa fazer tudo. Precisa fazer bem o que o seu negócio mais precisa.</p></div><div className={styles.grid}>{services.map((service,i)=><article className={`${styles.card} ${i===0?styles.featured:""}`} key={service.number}><div className={styles.cardTop}><span>{service.number}</span><ServiceIcon type={service.icon}/></div><h3>{service.title}</h3><p>{service.description}</p><span className={styles.rule}/></article>)}</div></div></section>;
}
