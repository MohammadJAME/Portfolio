import { useState } from "react";
import { SOCIALS } from "../data/footer.data";

export function FooterSocials({
  socialsRef
}: {
  socialsRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div ref={socialsRef} className="flex gap-10 text-2xl">
      {SOCIALS.map(({ icon: Icon, link, label, color }, i) => (
        <div key={i} className="relative">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              transform: hovered === i ? "scale(1.1)" : "scale(1)",
              transition: "all .3s"
            }}
          >
            <Icon
              style={{
                color: hovered === i ? color : "#555555",
                transition: "color .3s"
              }}
            />
          </a>

          <span
            className={`absolute left-1/2 -translate-x-1/2 mt-3 px-3 py-1 text-xs bg-neutral-900 text-white rounded transition-all whitespace-nowrap ${
              hovered === i ? "opacity-100 translate-y-1" : "opacity-0"
            }`}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
