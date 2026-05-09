import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useHeroFadeAnimation = (
  heroRef: any,
  videoRef: any,
  videoOverlayRef: any,
  overlayRef: any
) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1) gradient overlay → fade out
      gsap.fromTo(
        overlayRef.current,
        { autoAlpha: 1 },
        {
          autoAlpha: 0,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            onLeave: () => gsap.set(overlayRef.current, { autoAlpha: 0 }),
          },
        }
      );

      // 2) dark overlay → fade in
      gsap.fromTo(
        videoOverlayRef.current,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            onLeave: () => gsap.set(videoOverlayRef.current, { autoAlpha: 0 }),
          },
        }
      );

      // 3) video → hide after hero
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "bottom top",
        onEnter: () => gsap.set(videoRef.current, { autoAlpha: 0 }),
        onLeaveBack: () => gsap.set(videoRef.current, { autoAlpha: 1 }),
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);
};

export default useHeroFadeAnimation;
