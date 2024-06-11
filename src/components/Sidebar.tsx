// Imports
import { useState } from "react";
import {
  FaAngleLeft,
  FaBookAtlas,
  FaIdCard,
  FaChartPie,
  FaPython,
  FaAngleDown,
} from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@utils/constants";
import { FaProjectDiagram } from "react-icons/fa";

const SidebarItem: React.FC<SidebarProps> = ({
  title,
  icon,
  open,
  submenu,
  submenuItems,
  endpoint,
}) => {
  const [subMenuOpen, setSubMenuOpen] = useState<boolean>(false);
  const navigator = useNavigate();

  return (
    <>
      <li
        className={`text-dark-gray-200 flex items-center gap-x-4 cursor-pointer rounded-md p-2 hover:bg-light-white transition-all duration-300 ${
          open ? "justify-start" : "justify-center"
        }`}
        onClick={() => {
          if (submenu) {
            setSubMenuOpen(!subMenuOpen);
          } else {
            navigator(endpoint);
          }
        }}
      >
        <span className="text-2xl text-orange-500">
          {icon ?? <MdDashboard />}
        </span>
        <span
          className={`text-lg font-semibold transition-all duration-200 ${
            !open && "hidden"
          }`}
        >
          {title}
        </span>
        {submenu && open && (
          <FaAngleDown
            className={`${
              subMenuOpen && "rotate-180"
            } transition-all duration-300 ml-auto`}
            onClick={() => setSubMenuOpen(!subMenuOpen)}
          />
        )}
      </li>
      {submenu && subMenuOpen && open && (
        <ul className="pl-8 mt-2">
          {submenuItems?.map((subItem, index) => (
            <li
              key={index}
              className="text-gray-300 text-md flex items-center gap-x-4 cursor-pointer rounded-md p-2 hover:bg-light-white transition-all duration-300"
              onClick={() => navigator(subItem.endpoint)}
            >
              {subItem.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const MenuItems: MenuItem[] = [
  { title: "About me", icon: <FaIdCard />, endpoint: ROUTES.ABOUT },
  {
    title: "Education / Work",
    icon: <FaBookAtlas />,
    endpoint: ROUTES.EDUCATION,
  },
  { title: "Skills", icon: <FaChartPie />, endpoint: ROUTES.SKILLS },
  {
    title: "Projects",
    icon: <FaProjectDiagram />,
    endpoint: ROUTES.PROJECTS,
  },
];

const Sidebar: React.FC<Props> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigator = useNavigate();

  return (
    <div
      className={`bg-dark-gray-800 p-5 pt-8 ${
        open ? "w-72" : "w-20"
      } duration-300 relative`}
    >
      <FaAngleLeft
        className={`text-purple-500 bg-dark-gray-200 border-2 border-purple-500 cursor-pointer text-3xl rounded-full absolute -right-3 top-9 transition-all duration-500 ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      <div
        className="flex items-center cursor-pointer"
        onClick={() => navigator(ROUTES.HOME)}
      >
        <FaPython
          className={`text-orange-500 text-4xl transition-all duration-500 ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-dark-gray-200 text-2xl font-semibold ml-3 transition-all duration-300 ${
            !open && "hidden"
          }`}
        >
          My Portfolio
        </h1>
      </div>
      <ul className="mt-4 pt-2">
        {MenuItems.map((val, index) => (
          <SidebarItem {...val} key={index} open={open} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
