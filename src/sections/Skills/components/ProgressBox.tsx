import { Info } from "lucide-react";
import { useRef } from "react";
import { skillCategories } from "../data/skillsData";
import { useSkillsProgress } from "../animations/useSkillsProgress";

const ProgressBox = () => {
  const skillsRef = useRef(null);

  useSkillsProgress(skillsRef);

  return (
    <div ref={skillsRef} className="w-full">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl bg-stone-900 border border-stone-700"
            >
              <div className="p-6 flex flex-col gap-3">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {category.title}
                </h2>

                <hr className="mb-2 w-16 border-stone-700" />

                {category.skills.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      className="group skill-item"
                      key={item.name}
                      data-percent={item.percent}
                      tabIndex={0}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1.5">
                          <Icon
                            size={22}
                            color={item.color}
                            className="shrink-0"
                          />

                          <span>{item.name}</span>

                          <Info
                            size={14}
                            className="opacity-40 group-hover:opacity-0 group-focus:opacity-0 transition-opacity duration-300"
                          />
                        </div>

                        <span className="skill-number">0%</span>
                      </div>

                      <div className="h-1.5 w-full bg-stone-800 rounded-full mt-1 mb-2">
                        <div
                          className="skill-bar h-full rounded-full bg-white/60 transition-colors duration-300 group-hover:bg-white group-focus:bg-white"
                          style={{ width: "0%" }}
                        />
                      </div>

                      <h6 className="text-xs leading-relaxed text-stone-400 min-h-9 opacity-0 -translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-[opacity,translate] duration-300 ease-out">
                        {item.description}
                      </h6>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBox;
