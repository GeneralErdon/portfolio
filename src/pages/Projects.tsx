// src/components/ProjectPage.tsx

import React from "react";
import GutsImg from "@assets/images/guts_bigote.jpg";
import { Project } from "types/Project";
import ProjectCard from "@components/ProjectCard";
import { ROUTES } from "@utils/constants";

const projects: Project[] = [
  {
    id: 1,
    title: "Sinteg",
    description:
      "A system for medic plans, assurance plans for companies, families or particulars and ocupational medicine.",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Django",
      "Redux",
      "Axios",
      "MaterialUI",
      "SimpleJWT",
      "Pandas",
      "PostgreSQL",
      "Docker",
    ],
    images: [GutsImg, GutsImg, GutsImg],
    isPrivate: true,
  },
  {
    id: 2,
    title: "Syscam",
    description:
      "HR system to control employee attendance, working hours, medical leaves, absences, night shift bonus hours, overtime, and other related matters.",
    technologies: ["Django", "HTML", "CSS", "JavaScript", "Pandas", "Numpy", "Docker"],
    images: [GutsImg, GutsImg, GutsImg, GutsImg, GutsImg, GutsImg],
    isPrivate: true,
  },
  // More projects here
];

const ProjectPage: React.FC = () => {
  return (
    <div id={ROUTES.PROJECTS} className="container mx-auto p-4">
      <div className="flex justify-center">
        <h1 className="text-4xl typing-text max-w-fit font-bold mb-8">
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
