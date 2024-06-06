import { FaProjectDiagram } from "react-icons/fa";
import { FaBookAtlas, FaIdCard, FaChartPie, FaSquarePhone } from "react-icons/fa6";

export const ROUTES = {
  "EDUCATION": "portfolio/education",
  "HOME": "portfolio/",
  "ABOUT": "portfolio/about",
  "SKILLS": "portfolio/skills",
  "PROJECTS": {
    "SYSCAM": "portfolio/projects/syscam",
    "SINTEG": "portfolio/projects/sinteg",
  },
  "CONTACT": "portfolio/contact"
}

export const MenuItems:MenuItem[] = [ //* Lista de componentes en el Sidebar
  { title: "About me", icon: <FaIdCard />, endpoint: ROUTES.ABOUT },
  { title: "Education / Work", icon: <FaBookAtlas />, endpoint: ROUTES.EDUCATION},
  { title: "Skills", icon: <FaChartPie />, endpoint: "portfolio/skills"},
  { 
    title: "Projects", 
    submenu: true,
    icon: <FaProjectDiagram />,
    endpoint: "",
    submenuItems: [
      { title: "syscam", endpoint:ROUTES.PROJECTS.SYSCAM },
      { title: "sinteg", endpoint:ROUTES.PROJECTS.SINTEG },
      // { title: "vitacord", endpoint: ROUTES.PROJECTS },
    ],
  },
  { title: "Contact", icon: <FaSquarePhone />, endpoint: ROUTES.CONTACT},
]


export const SOCIAL_MEDIA = {
  "GITHUB": "https://github.com/GeneralErdon",
  "LINKEDIN": "https://linkedin.com/in/leandro-vincenzo-fermín-de-cicco-220321260",
  "INTAGRAM": "#"
}
