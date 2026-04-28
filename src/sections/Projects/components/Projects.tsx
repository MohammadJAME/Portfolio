import { useRef } from "react";
import { useRevealTitleOnScroll } from "../../../animations/useRevealTitleOnScroll";
import { projectsData } from "../data/projectsData";
import ProjectGrid from "./ProjectsGrid";
import ChevronDownAnimated from "../../../components/ChevronDownAnimated";

const Projects = () => {
  const aboutSectionRef = useRef(null);
  const aboutTitleRef = useRef(null);

  useRevealTitleOnScroll(aboutTitleRef, aboutSectionRef);

  return (
    <section id="projects" className="w-full relative flex flex-col">
      {/*Title*/}
      <div ref={aboutSectionRef} className="h-screen pt-16 pb-32 px-4">
        <div
          ref={aboutTitleRef}
          className="text-8xl sticky top-16 wrap-break-word"
        >
          Project
        </div>
        <ChevronDownAnimated/>
      </div>

      {/* Grid */}
      <ProjectGrid projects={projectsData} />
    </section>
  );
};

export default Projects;
