"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export default function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    gsap.registerPlugin(ScrollTrigger, SplitText);
    const splits: SplitText[] = [];
    const headings = gsap.utils.toArray<HTMLElement>(".section-heading h2");
    headings.forEach((heading) => {
      const split = SplitText.create(heading, { type: "lines", linesClass: "title-line" });
      splits.push(split);
      gsap.from(split.lines, {
        yPercent: 45,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: heading, start: "top 88%", once: true },
      });
    });
    const lenis = new Lenis({ smoothWheel: true, lerp: 0.09 });
    const update = () => ScrollTrigger.update();
    lenis.on("scroll", update);
    const ticker = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);
    return () => {
      lenis.off("scroll", update);
      gsap.ticker.remove(ticker);
      lenis.destroy();
      splits.forEach((split) => split.revert());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return null;
}
