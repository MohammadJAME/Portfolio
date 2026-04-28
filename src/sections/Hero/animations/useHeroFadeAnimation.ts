import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useHeroFadeAnimation = (heroRef: any, videoRef: any, overlayRef: any) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to([videoRef.current, overlayRef.current], {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);
};

export default useHeroFadeAnimation;
