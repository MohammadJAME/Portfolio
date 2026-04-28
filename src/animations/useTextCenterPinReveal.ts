// Scroll-triggered pinned text reveal: blur-to-clear fade-in, hold, then fade-out while pinned
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useTextCenterPinReveal(textRef:any) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "center center",
          end: "bottom -100%",
          scrub: true,
          pin: true,
          //markers: true
        },
      });

      tl.fromTo(
        textRef.current,
        {
          opacity: 0,
          filter: "blur(20px)",
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          ease: "none",
        },
      )
        .to(textRef.current, {
          opacity: 1,
          filter: "blur(0px)",
          ease: "none",
        })
        .to(textRef.current, {
          opacity: 0,
          filter: "blur(20px)",
          ease: "none",
        });
    }, textRef);

    return () => ctx.revert();
  }, []);
}
