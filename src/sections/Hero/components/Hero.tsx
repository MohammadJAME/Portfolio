import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import useHeroFadeAnimation from "../animations/useHeroFadeAnimation";
import video from "../../../assets/hero.mp4"

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const overlayRef = useRef(null);

  useHeroFadeAnimation(heroRef, videoRef, overlayRef);

  return (
    <section
      ref={heroRef}
      className="hero w-full h-svh relative overflow-hidden pb-32"
    >
      <video
        ref={videoRef}
        className="fixed top-1/2 left-1/2 object-cover w-screen h-screen -translate-x-1/2 -translate-y-1/2"
        autoPlay
        muted
        loop
      >
        <source src={video} type="video/mp4" />
      </video>

      <div
        ref={overlayRef}
        className="bg-[linear-gradient(to_bottom,transparent_60%,black_100%)] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen"
      />

      <div className="text-xl flex w-full justify-between items-center absolute bottom-0 p-4">
        <div>Lead by design</div>
        <ArrowDown />
      </div>
    </section>
  );
};

export default Hero;
