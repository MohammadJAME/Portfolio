import { useLayoutEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/all";

gsap.registerPlugin(Draggable);

export const useInfiniteSlider = (sliderRef:any) => {
  useLayoutEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let x:any = 0;
    const speed = 0.4;

    const totalWidth = slider.scrollWidth / 2;

    const ticker = () => {
      x -= speed;

      if (x <= -totalWidth) x += totalWidth;
      if (x >= 0) x -= totalWidth;

      gsap.set(slider, { x });
    };

    gsap.ticker.add(ticker);

    const draggable = Draggable.create(slider, {
      type: "x",
      inertia: true,

      onPress() {
        gsap.ticker.remove(ticker);
        x = gsap.getProperty(slider, "x");
        slider.style.cursor = "grabbing";
      },

      onDrag() {
        x = this.x;
      },

      onRelease() {
        x = this.x;
        slider.style.cursor = "grab";
        gsap.ticker.add(ticker);
      },
    })[0];

    return () => {
      gsap.ticker.remove(ticker);
      draggable.kill();
    };
  }, [sliderRef]);
};
