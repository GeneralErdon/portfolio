import { FaProjectDiagram } from "react-icons/fa";
import { FaBookAtlas, FaIdCard, FaChartPie, FaSquarePhone } from "react-icons/fa6";

export const MenuItems:MenuItem[] = [ //* Lista de componentes en el Sidebar
  { title: "About me", icon: <FaIdCard /> },
  { title: "Education / Work", icon: <FaBookAtlas />},
  { title: "Skills", icon: <FaChartPie />},
  { 
    title: "Projects", 
    submenu: true,
    icon: <FaProjectDiagram />,
    submenuItems: [
      { title: "syscam" },
      { title: "sinteg" },
      { title: "vitacord" },
    ],
  },
  { title: "Contact", icon: <FaSquarePhone />},
]

