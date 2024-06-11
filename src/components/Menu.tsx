import React, { useState } from "react";
import { FaIdCard, FaChartPie, FaProjectDiagram } from "react-icons/fa";
// import { MdDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@utils/constants";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FaBookAtlas, FaPhone } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { MdWork } from "react-icons/md";

const MenuItems = [
  { title: "Contact", icon: <FaPhone />, endpoint: ROUTES.HOME },
  { title: "About me", icon: <FaIdCard />, endpoint: ROUTES.ABOUT },
  { title: "Education", icon: <FaBookAtlas />, endpoint: ROUTES.EDUCATION, },
  { title: "Experience", icon: <MdWork />, endpoint: ROUTES.EXPERIENCE, },
  { title: "Skills", icon: <FaChartPie />, endpoint: ROUTES.SKILLS },
  { title: "Projects", icon: <FaProjectDiagram />, endpoint: ROUTES.PROJECTS },
];

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

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
            onClick={() => navigate(item.endpoint)}
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
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer(true)}
          style={{
            position: "fixed",
            top: 16,
            left: 16,
            zIndex: 1300,
            padding: "1rem",
            backgroundColor: "#de5431",
            border: 2,
            borderColor: "black",
          }}
        >
          <TiThMenu className=" text-dark-gray-900" />
        </IconButton>
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
