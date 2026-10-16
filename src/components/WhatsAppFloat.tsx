"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { makeWhatsAppLink } from "@/lib/whatsapp";
import Icon from "@/components/ui/Icon";
import styles from "./WhatsAppFloat.module.css";
export default function WhatsAppFloat(){const [visible,setVisible]=useState(false);const reduced=useReducedMotion();useEffect(()=>{const update=()=>setVisible(window.scrollY>600);update();window.addEventListener("scroll",update,{passive:true});return()=>window.removeEventListener("scroll",update)},[]);return <AnimatePresence>{visible&&<motion.a className={styles.float} href={makeWhatsAppLink()} target="_blank" rel="noreferrer" aria-label="Chamar no WhatsApp" initial={reduced?false:{opacity:0,y:14,scale:.9}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:10,scale:.92}} transition={reduced?{duration:.12}:{type:"spring",stiffness:280,damping:24}}><Icon name="whatsapp" size={25} weight="regular"/><span>Chamar no WhatsApp</span></motion.a>}</AnimatePresence>}
