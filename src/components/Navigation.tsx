import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button, Link } from "@nextui-org/react";
import { ROUTES } from "@utils/constants";
import { useState } from "react";
import { FaPhone, FaProjectDiagram } from "react-icons/fa";
import { FaBookAtlas, FaChartPie, FaIdCard } from "react-icons/fa6";
import { MdWork } from "react-icons/md";

const menuItems = [
  { title: "About me", icon: <FaIdCard />, endpoint: ROUTES.ABOUT },
  { title: "Experience", icon: <MdWork />, endpoint: ROUTES.EXPERIENCE },
  { title: "Education", icon: <FaBookAtlas />, endpoint: ROUTES.EDUCATION },
  { title: "Skills", icon: <FaChartPie />, endpoint: ROUTES.SKILLS },
  { title: "Projects", icon: <FaProjectDiagram />, endpoint: ROUTES.PROJECTS },
  // { title: "Contact", icon: <FaPhone />, endpoint: ROUTES.CONTACT },
];

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      className="bg-dark-gray-800 text-dark-gray-200"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Boton de open close para celular */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Navbar items en modo desktop */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              className="font-semibold cursor-pointer text-dark-gray-100"
              onClick={() =>
                document.getElementById(item.endpoint)?.scrollIntoView()
              }
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Botones al final del navbar  */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Button className="bg-orange-500 font-semibold" onClick={() => {
            document.getElementById(ROUTES.CONTACT)?.scrollIntoView();
            if(!isMenuOpen) setIsMenuOpen(false);
            
          }}>
            <span><FaPhone /></span>
            Contact me
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Botones dle Menu open close del celular */}
      <NavbarMenu className=" bg-dark-gray-800">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.title}-${index}`}>
            <Link
              className="w-full text-2xl my-3 text-dark-gray-200 font-semibold cursor-pointer"
              onClick={() => {
                document.getElementById(item.endpoint)?.scrollIntoView();
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <span className="mr-4">{item.icon}</span>
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Navigation;
