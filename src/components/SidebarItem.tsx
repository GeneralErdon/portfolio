import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";

const SidebarItem: React.FC<SidebarProps> = ({
  title,
  key,
  icon,
  open,
  submenu,
  submenuItems,
  spacing,
}) => {
  const [subMenuOpen, setSubMenuOpen] = useState<boolean>(false);

  return (
    <>
      <li
        key={key}
        className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer rounded-md p-2 hover:bg-light-white
        ${spacing ? "mt-9" : "mt-2"}
        `}
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        {/* Icon */}
        <span className="text-2xl block float-left">
          {icon ?? <MdDashboard />}
        </span>

        <span
          className={`text-base font-medium flex-1 duration-200 ${
            !open && "hidden"
          }`}
        >
          {title}
        </span>
        {/* Sub Menu config */}
        {(submenu && open) && (
          <FaAngleDown
            className={`${subMenuOpen && "rotate-180"} duration-300`}
            onClick={() => setSubMenuOpen(!subMenuOpen)}
          />
        )}
      </li>
      {/* Sub Menu Items */}
      {(submenu && subMenuOpen && open) && (
        <ul>
          {
            submenuItems?.map((subItem, index) => (
              <li key={index}
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer rounded-md p-2 hover:bg-light-white
                ${spacing ? "mt-9" : "mt-2"} px-5
                `}
              >
                <span>{subItem.title}</span>
              </li>
            ))
          }
        </ul>
      )}
    </>
  );
};

export default SidebarItem;
