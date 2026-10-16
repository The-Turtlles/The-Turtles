"use client";
import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { projects } from "@/data/site";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";
type Filter = "Todos" | "Luis" | "Gustavo";
const filters: Filter[] = ["Todos", "Luis", "Gustavo"];
export default function Projects() {
 const [filter,setFilter]=useState<Filter>("Todos");
 const reduced=useReducedMotion();
 const visible=useMemo(()=>projects.filter(p=>filter==="Todos"||p.author===filter),[filter]);
 return <section id="projetos" className={`section ${styles.projects}`}><div className="container"><div className="section-heading"><div><span className="eyebrow">02 / Trabalho em construção</span><h2>Feito para<br/>resolver.</h2></div><p>Uma seleção de projetos individuais. Os exemplos sinalizados serão substituídos por trabalhos publicados e autorizados.</p></div><div className={styles.filterBar}><span className="eyebrow">Filtrar por autor</span><div role="group" aria-label="Filtrar projetos por autor">{filters.map(item=><button key={item} className={filter===item?styles.active:""} aria-pressed={filter===item} onClick={()=>setFilter(item)}>{item}</button>)}</div><span className={styles.count}>{visible.length.toString().padStart(2,"0")} projetos</span></div><motion.div layout={!reduced} className={styles.grid}><AnimatePresence mode="popLayout">{visible.map(project=><motion.div key={project.id} layout={!reduced} initial={reduced?false:{opacity:0,y:18}} animate={{opacity:1,y:0}} exit={reduced?{opacity:0}:{opacity:0,y:-10}} transition={reduced?{duration:0.12}:{type:"spring",stiffness:260,damping:28}}><ProjectCard project={project}/></motion.div>)}</AnimatePresence></motion.div></div></section>;
}
