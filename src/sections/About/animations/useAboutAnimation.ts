import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useProfileAnimation (profileImageSectionRef:any) {
    
  //profile انیمیشن تصویر
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const q:any = self.selector;
      gsap.to(q(".profile"), {
        scale: 0.5,
        opacity: 1,
        transformOrigin: "center center",
        ease: "none",
        scrollTrigger: {
          trigger: profileImageSectionRef.current,
          start: "top top",
          end: "200% top",
          scrub: true,
          pin: true,
          anticipatePin: 0,
          //markers:true
        },
      });

      const mm = gsap.matchMedia();

      // موبایل
      mm.add("(max-width: 639px)", () => {
        gsap.to(q(".left-box"), {
          x: "-50%",
          y: 0,
          opacity: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: profileImageSectionRef.current,
            start: "top top",
            end: "200% top",
            scrub: true,
          },
        });
      });

      // sm و بزرگتر
      mm.add("(min-width: 640px)", () => {
        gsap.to(q(".left-box"), {
          x: 0,
          y: 0,
          opacity: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: profileImageSectionRef.current,
            start: "top top",
            end: "200% top",
            scrub: true,
          },
        });
      });

      //  موبایل
      mm.add("(max-width: 639px)", () => {
        gsap.to(q(".right-box"), {
          x: "50%",
          y: 0,
          opacity: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: profileImageSectionRef.current,
            start: "top top",
            end: "200% top",
            scrub: true,
          },
        });
      });

      // sm و بزرگتر
      mm.add("(min-width: 640px)", () => {
        gsap.to(q(".right-box"), {
          x: 0,
          y: 0,
          opacity: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: profileImageSectionRef.current,
            start: "top top",
            end: "200% top",
            scrub: true,
          },
        });
      });
    }, profileImageSectionRef);

    return () => ctx.revert();
  }, []);
}