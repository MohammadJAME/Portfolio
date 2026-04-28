import { useRef } from "react";
import { useRevealTitleOnScroll } from "../../../animations/useRevealTitleOnScroll";
import ProgressBox from "./ProgressBox";
import InfiniteSlider from "./InfiniteSlider";
import { useTextCenterPinReveal } from "../../../animations/useTextCenterPinReveal";
import { useRevealSentenceOnScroll } from "../../../animations/useRevealSentenceOnScroll";
import ChevronDownAnimated from "../../../components/ChevronDownAnimated";

const Skills = () => {
  const skillsSectionRef = useRef(null);
  const skillsTitleRef = useRef(null);
  const textRef = useRef(null);
  const wordsRef = useRef(null);

  useTextCenterPinReveal(textRef);
  useRevealTitleOnScroll(skillsTitleRef, skillsSectionRef);
  useRevealSentenceOnScroll(wordsRef);

  return (
    <section id="skills" className="w-full relative flex flex-col">
      <div ref={skillsSectionRef} className="h-screen pt-16 pb-32 px-4">
        <div
          ref={skillsTitleRef}
          className="text-8xl sticky top-16 mt-auto flex"
        >
          Skills
        </div>
        <ChevronDownAnimated/>
      </div>
      <ProgressBox />
      <InfiniteSlider />
      {/* TEXT PIN & FADE IN | FADE OUT */}
      <div className=" w-full h-[200vh] overflow-hidden">
        <p ref={textRef} className=" text-6xl font-bold text-center">
          Structure as a habit
        </p>
      </div>
      {/* WORD REVEAL FADE IN */}
      <div ref={wordsRef} className="w-full px-4 pb-32">
        <div className="sentence text-3xl text-stone-400 font-bold flex flex-wrap gap-[0.3em] overflow-hidden mb-8">
          <div className="word text-white">Consistency</div>
          <div className="word">and</div>
          <div className="word text-white">reusability</div>
          <div className="word">sit</div>
          <div className="word">at</div>
          <div className="word">the</div>
          <div className="word">core</div>
          <div className="word">of</div>
          <div className="word">a</div>
          <div className="word">solid</div>
          <div className="word">workflow.</div>

          <div className="w-full h-4"></div>

          <div className="word">Building</div>
          <div className="word">with</div>
          <div className="word text-white">architecture</div>
          <div className="word">in</div>
          <div className="word">mind</div>
          <div className="word">—</div>
          <div className="word">using</div>
          <div className="word">clear</div>
          <div className="word text-white">design</div>
          <div className="word text-white">patterns</div>
          <div className="word">to</div>
          <div className="word">keep</div>
          <div className="word">things</div>
          <div className="word">simple,</div>
          <div className="word text-white">scalable,</div>
          <div className="word">and</div>
          <div className="word">aligned.</div>

          <div className="w-full h-4"></div>

          <div className="word text-white">Clean</div>
          <div className="word text-white">code</div>
          <div className="word">focuses</div>
          <div className="word">on</div>
          <div className="word text-white">readability,</div>
          <div className="word text-white">maintainability,</div>
          <div className="word">and</div>
          <div className="word text-white">reliability</div>
          <div className="word">—</div>
          <div className="word">making</div>
          <div className="word">systems</div>
          <div className="word">easier</div>
          <div className="word">to</div>
          <div className="word">understand,</div>
          <div className="word">evolve,</div>
          <div className="word">and</div>
          <div className="word">scale.</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
