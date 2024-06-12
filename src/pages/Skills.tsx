import React, { ReactElement } from "react";
import { IconType } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiDjango,
  SiFastapi,
  SiGit,
  SiDocker,
  SiNginx,
  SiTailwindcss,
  SiRedux,
  SiPandas,
  SiNumpy,
  SiJsonwebtokens,
  SiUbuntu,
  SiGnubash,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiSqlite,
  SiRedis,
  SiRabbitmq,
  SiAxios,
  SiOpenssl,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { RiJavaLine } from "react-icons/ri";
import { ES, IT, US } from "country-flag-icons/react/3x2";
import { ROUTES } from "@utils/constants";

interface Skill {
  name: string;
  icon: ReactElement<IconType> | string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}


const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: <SiPython className="text-[#31648F]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7E123]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#087DCD]" /> },
      { name: "Java", icon: <RiJavaLine className="text-[#ED262C]" /> },
      { name: "Bash", icon: <SiGnubash className="text-dark-gray-100" /> },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Django", icon: <SiDjango className="text-[#135238]" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-[#0C9A8E]" /> },
      { name: "React", icon: <SiReact className="text-[#07D9FF]" /> },
      { name: "Express", icon: <SiJavascript className="text-[#F7E123]" /> },
    ],
  },
  {
    title: "Libraries",
    skills: [
      {
        name: "Django Rest Framework",
        icon: <SiDjango className="text-[#135238]" />,
      },
      { name: "Pandas", icon: <SiPandas className="text-[#1C0B5C]" /> },
      { name: "Numpy", icon: <SiNumpy className="text-[#537AD0]" /> },
      {
        name: "Simple JWT",
        icon: <SiJsonwebtokens className="text-[#D740FF]" />,
      },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="text-[#0DB7D4]" />,
      },
      { name: "Redux", icon: <SiRedux className="text-[#7950BD]" /> },
      { name: "Axios", icon: <SiAxios className="text-[#894798]" /> },
    ],
  },
  {
    title: "Servers and DevOps",
    skills: [
      { name: "Nginx", icon: <SiNginx className="text-[#07993F]" /> },
      { name: "Git", icon: <SiGit className="text-[#F05539]" /> },
      { name: "Docker", icon: <SiDocker className="text-[#2367EE]" /> },
      { name: "GNU/Linux", icon: <SiUbuntu className="text-[#DD460F]" /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#396B94]" /> },
      { name: "MySQL", icon: <GrMysql className="text-[#07658F]" /> },
      { name: "SQLServer", icon: <SiMicrosoftsqlserver className="text-[#C42D2D]" /> },
      { name: "SQLite", icon: <SiSqlite className="text-[#0A3B54]" /> },
      { name: "Redis", icon: <SiRedis className="text-[#DD3E33]" /> },
    ],
  },
  {
    title: "Other",
    skills: [
      { name: "HTML", icon: <SiHtml5 className="text-[#F15E30]" /> },
      { name: "CSS", icon: <SiCss3 className="text-[#1D78BD]" /> },
      { name: "RabbitMQ", icon: <SiRabbitmq className="text-[#FF6A07]" /> },
      { name: "openSSL", icon: <SiOpenssl className="text-[#751A18]" /> },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "English", icon: <US className=" size-[1.5rem]" />},
      { name: "Spanish", icon: <ES className=" size-[1.5rem]" />},
      { name: "Italian", icon:  <IT className=" size-[1.5rem]" />},
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <div id={ROUTES.SKILLS} className="p-4">
      <div className="flex justify-center">
        <h1 className="text-3xl typing-text max-w-fit font-bold mb-8 text-center">
          My Skills
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className="bg-dark-gray-700 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-2xl font-semibold mb-4 text-center border-b-2 border-dark-gray-500 pb-2">
              {category.title}
            </h2>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="text-lg flex justify-between items-center"
                >
                  <span>{skill.name}</span>
                  <span className="text-gray-400 text-2xl">{skill.icon}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
