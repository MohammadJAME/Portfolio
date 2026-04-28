import { useLayoutEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const ChevronDownAnimated = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [opacity, setOpacity] = useState<number>(1);

  useLayoutEffect(() => {
    let ticking = false;

    const updateOpacity = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      // نقطه شروع fade → وقتی bottom وارد viewport می‌شود
      const fadeStart = vh * 0.95;

      // نقطه پایان fade → وقتی top به 80% viewport می‌رسد
      const fadeEnd = vh * 0.70;

      const distance = rect.bottom - fadeEnd;
      const total = fadeStart - fadeEnd;

      let progress = 1 - distance / total;

      progress = Math.min(Math.max(progress, 0), 1);

      setOpacity(1 - progress);

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateOpacity);
        ticking = true;
      }
    };

    // محاسبه اولیه → جلوگیری از flash
    updateOpacity();

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", updateOpacity);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateOpacity);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ opacity }}
      className="h-full flex flex-col items-center justify-center gap-2 will-change-[opacity]"
    >
      <ChevronDown
        size={50}
        className="opacity-20 animate-[chevronPulse_1.5s_infinite_ease-in-out]"
      />
      <ChevronDown
        size={50}
        className="opacity-20 animate-[chevronPulse_1.5s_infinite_ease-in-out_0.3s]"
      />
      <ChevronDown
        size={50}
        className="opacity-20 animate-[chevronPulse_1.5s_infinite_ease-in-out_0.6s]"
      />

      <style>{`
        @keyframes chevronPulse {
          0% { opacity: 0.2; }
          50% { opacity: 1; }
          100% { opacity: 0.2; }
        }
      `}</style>
    </div>
  );
};

export default ChevronDownAnimated;
