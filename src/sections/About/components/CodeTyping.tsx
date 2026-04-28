import { useLayoutEffect, useRef } from "react";
import Typed from "typed.js";

function CodeTyping() {
  const el = useRef(null);
  const container = useRef(null);
  const typedRef:any = useRef(null);

  useLayoutEffect(() => {
    const target = container.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !typedRef.current) {
          typedRef.current = new Typed(el.current, {
            strings: [
              `<span class="text-purple-400">const</span> <span class="text-blue-400">user</span> = {
  <span class="text-red-400">firstName</span>: <span class="text-green-400">"Mohammad"</span>,
  <span class="text-red-400">lastName</span>: <span class="text-green-400">"Jameh Shooran"</span>,
  <span class="text-red-400">role</span>: <span class="text-green-400">"Front-End Developer"</span>,
  <span class="text-red-400">location</span>: <span class="text-green-400">"Tehran"</span>,
};`,
            ],
            typeSpeed: 10,
            showCursor: true,
            cursorChar: "|",
            contentType: "html",
          });

          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
      typedRef.current?.destroy();
    };
  }, []);

  return (
    <div
      ref={container}
      className="bg-[#1e1e1e] rounded-xl shadow-2xl max-w-3xl w-full overflow-hidden font-mono"
    >
      {/* header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[#2d2d2d] border-b border-neutral-700">
        <span className="size-3 bg-red-500 rounded-full"></span>
        <span className="size-3 bg-yellow-400 rounded-full"></span>
        <span className="size-3 bg-green-500 rounded-full"></span>

        <span className="ml-4 text-sm text-neutral-400">user.js</span>
      </div>

      {/* code */}
      <div className="flex text-sm sm:text-base font-mono">
        {/* line numbers */}
        <div
          className="
      px-3 py-4
      text-neutral-500
      text-right
      select-none
      leading-7
      lg:leading-8
    "
        >
          <span className="block">1</span>
          <span className="block">2</span>
          <span className="block">3</span>
          <span className="block">4</span>
          <span className="block">5</span>
          <span className="block">6</span>
        </div>

        {/* code */}
        <pre
          className="
          lg:text-xl
      flex-1
      py-4 pr-4
      whitespace-pre-wrap
      break-words
      leading-7
      lg:leading-8
    "
        >
          <span ref={el}></span>
        </pre>
      </div>
    </div>
  );
}

export default CodeTyping;
