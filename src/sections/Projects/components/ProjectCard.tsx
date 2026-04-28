import { ArrowRight } from "lucide-react";

const ProjectCard = ({ project }: { project: any }) => {
  const { title, category, image, tech, url } = project;

  return (
    <div
      tabIndex={0}
      className="
        group relative cursor-pointer overflow-hidden rounded-2xl
        border border-stone-700 bg-stone-900
        focus:cursor-default
        grayscale-100 focus:grayscale-0 duration-500
      "
    >
      {/* IMAGE + OVERLAY */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            h-full w-full object-cover object-top opacity-80
            transition-all duration-500 ease-in-out
            group-focus:scale-125
            group-focus:blur-[4px]
            group-focus:opacity-60
          "
        />

        {/* Gradient + Tech Stack */}
        <div
          className="
            absolute bottom-0 h-20 w-full
            bg-linear-to-t
            from-black from-20%
            via-black/70 via-50%
            to-transparent
            transition-all duration-500 ease-in-out
            group-focus:h-full
          "
        >
          <ul
            className="
              ml-8 mt-6 list-disc space-y-1
              text-sm text-stone-200
              delay-500
            "
          >
            {tech.map((item:any, index:any) => {
              const delay = 300 + index * 200;

              return (
                <li
                  key={item}
                  style={{ "--delay": `${delay}ms` } as React.CSSProperties}

                  className="
                    -translate-x-6 opacity-0
                    transition-all duration-500
                    delay-0
                    group-focus:translate-x-0
                    group-focus:opacity-100
                    group-focus:[transition-delay:var(--delay)]
                "
                >
                  {item}
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group/cta absolute bottom-6 right-6 z-30
              flex items-center gap-2
              translate-y-4 opacity-0 invisible
              transition-all duration-500
              group-focus:translate-y-0
              group-focus:opacity-100
              group-focus:visible
              group-focus:delay-1000
            "
          >
            <div
              className="
                flex size-9 items-center justify-center
                rounded-full border-2 border-stone-400
                transition-all duration-300
                cursor-pointer
                group-hover/cta:bg-stone-800
              "
            >
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover/cta:translate-x-1"
              />
            </div>

            <p className="text-sm tracking-wide text-stone-200">View</p>
          </a>
        </div>

        {/* Title + Category */}
        <div className="absolute bottom-0 left-0 z-10 w-full p-4">
          <p className="text-xl font-semibold text-white">{title}</p>
          <p className="text-sm text-stone-300">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
