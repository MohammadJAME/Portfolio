// Reveals the title on scroll with a fade-in and blur-to-clear effect
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useRevealTitleOnScroll(titleRef:any, sectionRef:any) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0.5,
          filter: "blur(20px)",
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 100%",
            end: "top 10%",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);
}
