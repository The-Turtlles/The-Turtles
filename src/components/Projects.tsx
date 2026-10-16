"use client";
import { useMemo, useState } from "react";
import { projects } from "@/data/site";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";
type Filter = "Todos" | "Luis" | "Gustavo";
const filters: Filter[] = ["Todos", "Luis", "Gustavo"];
export default function Projects() {
 const [filter,setFilter]=useState<Filter>("Todos");
 const visible=useMemo(()=>projects.filter(p=>filter==="Todos"||p.author===filter),[filter]);
 return <section id="projetos" className={`section ${styles.projects}`}><div className="container"><div className="section-heading"><div><span className="eyebrow">02 / Trabalho em construção</span><h2>Feito para<br/>resolver.</h2></div><p>Uma seleção de projetos individuais. Os exemplos sinalizados serão substituídos por trabalhos publicados e autorizados.</p></div><div className={styles.filterBar}><span className="eyebrow">Filtrar por autor</span><div role="group" aria-label="Filtrar projetos por autor">{filters.map(item=><button key={item} className={filter===item?styles.active:""} aria-pressed={filter===item} onClick={()=>setFilter(item)}>{item}</button>)}</div><span className={styles.count}>{visible.length.toString().padStart(2,"0")} projetos</span></div><div className={styles.grid}>{visible.map(project=><ProjectCard key={project.id} project={project}/>)}</div></div></section>;
}
