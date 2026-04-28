import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useSkillsProgress = (skillsRef:any) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = skillsRef.current.querySelectorAll(".skill-item");
      const bars = skillsRef.current.querySelectorAll(".skill-bar");
      const numbers = skillsRef.current.querySelectorAll(".skill-number");

      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.from(items, {
        opacity: 0,
        y: 12,
        duration: 0.28,
        stagger: 0.06,
      });

      items.forEach((item:any, i:any) => {
        const percent = item.getAttribute("data-percent");

        const skillTl = gsap.timeline();

        skillTl
          .to(bars[i], {
            width: `${percent}%`,
            duration: 0.75,
            ease: "power3.out",
          })
          .fromTo(
            numbers[i],
            { innerText: 0 },
            {
              innerText: percent,
              duration: 0.75,
              snap: { innerText: 1 },
              onUpdate() {
                numbers[i].textContent =
                  Math.round(this.targets()[0].innerText) + "%";
              },
            },
            0,
          );

        tl.add(skillTl, "-=0.15");
      });
    }, skillsRef);

    return () => ctx.revert();
  }, [skillsRef]);
};
