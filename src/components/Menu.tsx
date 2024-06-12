import React, { useState } from "react";
import { FaIdCard, FaChartPie, FaProjectDiagram } from "react-icons/fa";
import { ROUTES } from "@utils/constants";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FaBookAtlas, FaPhone } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { MdWork } from "react-icons/md";
import { Button } from "@nextui-org/react";

const MenuItems = [
  { title: "About me", icon: <FaIdCard />, endpoint: ROUTES.ABOUT },
  { title: "Experience", icon: <MdWork />, endpoint: ROUTES.EXPERIENCE, },
  { title: "Education", icon: <FaBookAtlas />, endpoint: ROUTES.EDUCATION, },
  { title: "Skills", icon: <FaChartPie />, endpoint: ROUTES.SKILLS },
  { title: "Projects", icon: <FaProjectDiagram />, endpoint: ROUTES.PROJECTS },
  { title: "Contact", icon: <FaPhone />, endpoint: ROUTES.CONTACT },
];

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpen(open);
    };

  const list = () => (
    <div
      className="w-64"
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List className="bg-dark-gray-800 text-dark-gray-200 h-screen">
        {MenuItems.map((item, index) => (
          <ListItem
            key={index}
            onClick={() => document.getElementById(item.endpoint)?.scrollIntoView()}
            className="cursor-pointer hover:bg-dark-gray-400 duration-300"
          >
            <ListItemButton>
              <ListItemIcon>
                <span className="text-dark-gray-200 text-2xl">{item.icon}</span>
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {!open && (
        <Button
          isIconOnly
          aria-label="open drawer"
          className=" z-50 top-4 left-4 fixed bg-orange-500 hover:bg-orange-600 border-2 border-dark-gray-900 text-xl rounded-full"
          onClick={toggleDrawer(true)}
          
        >
          <TiThMenu className=" text-dark-gray-900" />
        </Button>
      )}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        classes={{}}
      >
        {list()}
      </Drawer>
    </div>
  );
};

export default Menu;
