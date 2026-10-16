"use client";
import { useState } from "react";
import { faqs } from "@/data/site";
import styles from "./Faq.module.css";
export default function Faq(){const [active,setActive]=useState<number|null>(0);return <section className={`section ${styles.faq}`}><div className="container"><div className="section-heading"><div><span className="eyebrow">05 / Dúvidas comuns</span><h2>Antes de<br/>começar.</h2></div><p>Sem promessa vaga. Se alguma coisa depender do seu projeto, vamos explicar e combinar com você.</p></div><div className={styles.items}>{faqs.map((faq,index)=><article className={styles.item} key={faq.question}><h3><button aria-expanded={active===index} aria-controls={`faq-answer-${index}`} onClick={()=>setActive(active===index?null:index)}><span>{faq.question}</span><i aria-hidden="true">{active===index?"−":"+"}</i></button></h3><div id={`faq-answer-${index}`} className={styles.answer} hidden={active!==index}><p>{faq.answer}</p></div></article>)}</div></div></section>}
