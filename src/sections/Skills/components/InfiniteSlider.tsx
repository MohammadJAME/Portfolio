import { useRef } from "react";
import { techIcons } from "../data/techIcons";
import { useInfiniteSlider } from "../animations/useInfiniteSlider";

const InfiniteSlider = () => {
  const sliderRef = useRef(null);

  useInfiniteSlider(sliderRef);

  return (
    <div className="w-full py-32 max-w-5xl mx-auto overflow-hidden">
      <h1 className="text-3xl text-center py-16">Libraries & Tools</h1>

      <div
        ref={sliderRef}
        className="flex w-fit cursor-grab items-center gap-10"
      >
        {[...techIcons, ...techIcons].map((tech, index) => {
          const Icon = tech.icon;

          return (
            <div
              key={index}
              className="group flex flex-col items-center justify-center min-w-[80px]"
              tabIndex={0}
            >
              <Icon
                size={40}
                style={{ color: tech.color }}
                className="transition-transform duration-300 group-hover:scale-120 group-focus:scale-120"
              />

              <span className="mt-2 text-center text-sm text-gray-400 transition-colors duration-300 group-hover:text-white group-focus:text-white">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfiniteSlider;
