import { FaProjectDiagram } from "react-icons/fa";
import { FaBookAtlas, FaIdCard, FaChartPie, FaSquarePhone } from "react-icons/fa6";

export const MenuItems:MenuItem[] = [ //* Lista de componentes en el Sidebar
  { title: "About me", icon: <FaIdCard />, endpoint: "about" },
  { title: "Education / Work", icon: <FaBookAtlas />, endpoint: "education"},
  { title: "Skills", icon: <FaChartPie />, endpoint: "skills"},
  { 
    title: "Projects", 
    submenu: true,
    icon: <FaProjectDiagram />,
    endpoint: "",
    submenuItems: [
      { title: "syscam", endpoint:"syscam" },
      { title: "sinteg", endpoint: "sinteg" },
      { title: "vitacord", endpoint: "vitacord" },
    ],
  },
  { title: "Contact", icon: <FaSquarePhone />, endpoint: "contact"},
]


export const SOCIAL_MEDIA = {
  "GITHUB": "https://github.com/GeneralErdon"
}