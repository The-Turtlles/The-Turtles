"use client";
import { useEffect } from "react";
import styles from "./CustomCursor.module.css";
export default function CustomCursor(){useEffect(()=>{if(window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches)return;const cursor=document.querySelector<HTMLElement>("[data-custom-cursor]");if(!cursor)return;const move=(event:PointerEvent)=>{cursor.style.transform=`translate3d(${event.clientX}px,${event.clientY}px,0)`;};window.addEventListener("pointermove",move);return()=>window.removeEventListener("pointermove",move);},[]);return <div data-custom-cursor className={styles.cursor} aria-hidden="true"/>}
