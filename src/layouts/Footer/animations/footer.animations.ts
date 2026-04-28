import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateFooter = (
  footerRef: React.RefObject<HTMLDivElement | null>,
  titleRefs: React.MutableRefObject<HTMLDivElement[]>,
  contactRef: React.RefObject<HTMLDivElement | null>,
  socialsRef: React.RefObject<HTMLDivElement | null>
) => {
  const ctx = gsap.context(() => {
    gsap.from(titleRefs.current, {
      y: 80,
      opacity: 0,
      stagger: 0.20,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: { trigger: footerRef.current, start: "top 60%" },
    });

    const contactEls = contactRef.current?.children
      ? Array.from(contactRef.current.children)
      : [];
    gsap.from(contactEls, {
      opacity: 1,
      y: 30,
      duration: 0.9,
      stagger: 0.25,
      ease: "power4.out",
      scrollTrigger: { trigger: contactRef.current, start: "top 90%" },
    });

    const socialEls = socialsRef.current?.children
      ? Array.from(socialsRef.current.children)
      : [];
    gsap.from(socialEls, {
      opacity: 0,
      x: 70,
      duration: 0.8,
      stagger: 0.25,
      ease: "power3.out",
      scrollTrigger: { trigger: socialsRef.current, start: "top 90%" },
    });
  });

  return () => ctx.revert();
};
