//animated logo on scroll
import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import useMenuStore from "../store/useMenuStore";

const letters = ["S", "H", "O", "R", "A", "N", "I"];
const durations = [100, 200, 400, 600, 800, 1000, 1200];

const SCROLL_THRESHOLD = 80;

const Logo = () => {
  const isOpen = useMenuStore((state) => state.isOpen);

  const [showLogo, setShowLogo] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      // visible if at the first
      if (current < SCROLL_THRESHOLD) {
        setShowLogo(true);
        setLastScroll(current);
        return;
      }

      if (current > lastScroll) {
        setShowLogo(false); // scroll down → hide
      } else {
        setShowLogo(true); // scroll up → show
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const visible = !isOpen && showLogo;

  return (
    <div className="w-fit flex items-center gap-2">
      <img src={logo} alt="shorani" className="size-10" />

      {letters.map((l, i) => (
        <div
          key={i}
          className={`text-xl transition-opacity ease-in-out ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDuration: `${durations[i]}ms` }}
        >
          {l}
        </div>
      ))}
    </div>
  );
};

export default Logo;
