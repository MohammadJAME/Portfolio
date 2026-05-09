import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import useHeroFadeAnimation from "../animations/useHeroFadeAnimation";
import video from "../../../assets/hero.mp4"

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const videoOverlayRef = useRef(null);
  const overlayRef = useRef(null);

  useHeroFadeAnimation(heroRef, videoRef, videoOverlayRef, overlayRef);

  return (
    <section
      ref={heroRef}
      className="hero w-full h-svh relative overflow-hidden pb-32"
    >
      <video
        ref={videoRef}
        className="fixed top-0 left-0 w-screen h-screen object-cover"
        autoPlay
        muted
        loop
      >
        <source src={video} type="video/mp4" />
      </video>

      <div
        ref={overlayRef}
        className="bg-[linear-gradient(to_bottom,transparent_60%,black_100%)] fixed top-0 left-0 w-screen h-screen"
      />

      <div
        ref={videoOverlayRef}
        className="bg-black fixed top-0 left-0 w-screen h-screen"
      />

      <div className="text-xl flex w-full justify-between items-center absolute bottom-0 p-4">
        <div>Lead by design</div>
        <ArrowDown />
      </div>
    </section>
  );
};


export default Hero;
