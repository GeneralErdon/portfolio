// src/components/ProjectPage.tsx

import React from "react";
import { Project } from "types/Project";
import ProjectCard from "@components/ProjectCard";
import { ROUTES } from "@utils/constants";

// Imagenes Sinteg
import sintegDashboardIMG from "@assets/images/sinteg/sinteg_dashboard.webp";
import sintegFormIMG from "@assets/images/sinteg/sinteg_formulario_contratante.webp";
import sintegLoginIMG from "@assets/images/sinteg/sinteg_login.webp";
import sintegReport1IMG from "@assets/images/sinteg/sinteg_reporte_1.webp";
import sintegValesIMG from "@assets/images/sinteg/sinteg_vales.webp";
import sintegValeIMG from "@assets/images/sinteg/sinteg_vale_1.webp";

// Imagenes Syscam
import syscamLoginIMG from "@assets/images/syscam/syscam_login.webp";
import syscamCarnetIMG from "@assets/images/syscam/syscam_carnet.webp";
import syscamMovIMG from "@assets/images/syscam/syscam_movimientos.webp";
import syscamReport1IMG from "@assets/images/syscam/syscam_reporte_1.webp";
import syscamReport2IMG from "@assets/images/syscam/syscam_reporte_2.webp";
import syscamReportpageIMG from "@assets/images/syscam/syscam_reporte_page.webp";

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
    images: [
      sintegLoginIMG,
      sintegDashboardIMG,
      sintegFormIMG,
      sintegReport1IMG,
      sintegValesIMG,
      sintegValeIMG,
    ],
    isPrivate: true,
  },
  {
    id: 2,
    title: "Syscam",
    description:
      "HR system to control employee attendance, working hours, medical leaves, absences, night shift bonus hours, overtime, and other related matters.",
    technologies: [
      "Django",
      "HTML",
      "CSS",
      "JavaScript",
      "Pandas",
      "Numpy",
      "Docker",
    ],
    images: [
      syscamLoginIMG,
      syscamMovIMG,
      syscamCarnetIMG,
      syscamReportpageIMG,
      syscamReport1IMG,
      syscamReport2IMG,
    ],
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
