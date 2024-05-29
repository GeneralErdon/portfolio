import { FaProjectDiagram } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa6";

export const MenuItems:MenuItem[] = [ //* Lista de componentes en el Sidebar
  { title: "Bio", icon: <FaIdCard /> },
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
  { title: "Profile", spacing: true},
  { title: "Contact" },
]

