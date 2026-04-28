import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ projects }: { projects: any }) => {
  return (
    <div className="min-h-screen w-full">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project: any) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
