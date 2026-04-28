import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useRevealSentenceOnScroll(WordsRef: any) {
  useEffect(() => {
    if (!WordsRef.current) return;

    const ctx = gsap.context(() => {
      const sentences = WordsRef.current.querySelectorAll(".sentence");

      sentences.forEach((sentence: any) => {
        const words = sentence.querySelectorAll(".word");

        gsap.fromTo(
          words,
          {
            filter: "blur(10px)",
            opacity: 0,
            x: 50,
          },
          {
            filter: "blur(0px)",
            opacity: 1,
            x: 0,
            stagger: 0.1,
            ease: "none",
            scrollTrigger: {
              trigger: sentence,
              start: "top 100%",
              end: "bottom 60%",
              scrub: true,
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);
}
