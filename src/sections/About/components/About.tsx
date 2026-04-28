import { useRef } from "react";
import CodeTyping from "./CodeTyping";

import { useProfileAnimation } from "../animations/useAboutAnimation";
import { useRevealTitleOnScroll } from "../../../animations/useRevealTitleOnScroll";
import { useTextCenterPinReveal } from "../../../animations/useTextCenterPinReveal";
import { useRevealSentenceOnScroll } from "../../../animations/useRevealSentenceOnScroll";

import avatar from "../../../assets/imageProfile.jpg";
import img1 from "../../../assets/3D-icons/html5.png";
import img2 from "../../../assets/3D-icons/javaScript.webp";
import img3 from "../../../assets/3D-icons/css.webp";
import img4 from "../../../assets/3D-icons/react.png"
import ChevronDownAnimated from "../../../components/ChevronDownAnimated";

const About = () => {
  const aboutSectionRef = useRef(null);
  const aboutTitleRef = useRef(null);
  const profileSectionRef = useRef(null);
  const textRef = useRef(null);
  const wordsRef = useRef(null);

  useRevealTitleOnScroll(aboutTitleRef, aboutSectionRef);
  useTextCenterPinReveal(textRef);
  useRevealSentenceOnScroll(wordsRef);
  useProfileAnimation(profileSectionRef);

  return (
    <div id="about" className="w-full relative flex flex-col">
      {/* SECTION TITLE FADE IN */}
      <div ref={aboutSectionRef} className="h-screen pt-16 pb-32 px-4">
        <div ref={aboutTitleRef} className="text-8xl sticky top-16">
          About
        </div>
        <ChevronDownAnimated/>
      </div>

      {/* VS-CODE MODEL INFORMATION TYPING */}
      <div className="w-full h-64 flex justify-center px-4 mb-32">
        <CodeTyping />
      </div>

      {/* ANIMATED PROFILE IMAGE SECTION */}
      <div className="overflow-hidden">
        <div
          ref={profileSectionRef}
          className="profile-section w-full h-screen relative"
        >
          <img
            src={avatar}
            alt="avatar"
            className="profile w-full h-full object-cover rounded-4xl opacity-50"
          />

          <div className="w-full h-full flex justify-between absolute top-0 pointer-events-none">
            <div className="left-box grayscale-50 opacity-0 w-1/2 sm:w-1/4 flex flex-col justify-center items-end -translate-x-[150%] translate-y-1/2">
              <img src={img1} alt="" className="img-tl w-4/5" />
              <img src={img2} alt="" className="img-bl w-4/5" />
            </div>

            <div className="right-box grayscale-50 opacity-0 w-1/2 sm:w-1/4 flex flex-col justify-center items-start translate-x-[150%] translate-y-1/2">
              <img src={img3} alt="" className="img-tr w-4/5" />
              <img src={img4} alt="" className="img-br w-4/5" />
            </div>
          </div>
        </div>
      </div>

      {/* TEXT CENTER PIN & FADE IN | FADE OUT */}
      <div className="w-full h-[200vh] overflow-hidden">
        <p ref={textRef} className="text-6xl font-bold text-center">
          Who am I?
        </p>
      </div>

      {/* WORD REVEAL FADE IN */}
      <div ref={wordsRef} className="w-full px-4 pb-32">
        <div className="sentence text-3xl text-stone-400 font-bold flex flex-wrap gap-[0.3em] overflow-hidden mb-8">
          <div className="word">Self‑taught</div>
          <div className="word text-white">Front‑End</div>
          <div className="word">Developer</div>
          <div className="word">with</div>
          <div className="word">one</div>
          <div className="word">year</div>
          <div className="word">of</div>
          <div className="word">experience.</div>

          <div className="w-full h-4"></div>

          <div className="word text-white">Quality</div>
          <div className="word">stands</div>
          <div className="word">as</div>
          <div className="word">the</div>
          <div className="word">signature</div>
          <div className="word">of</div>
          <div className="word">the</div>
          <div className="word">work</div>
          <div className="word">itself,</div>
          <div className="word">driven</div>
          <div className="word">by</div>
          <div className="word">continuous</div>
          <div className="word">learning</div>
          <div className="word">and</div>
          <div className="word">a</div>
          <div className="word">focus</div>
          <div className="word">on</div>
          <div className="word">building</div>
          <div className="word">better</div>
          <div className="word">interfaces.</div>
        </div>
      </div>
    </div>
  );
};

export default About;
