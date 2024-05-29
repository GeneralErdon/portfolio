// Imports
import { useState } from "react";
import { FaAngleLeft, FaPython } from "react-icons/fa6";
import SidebarItem from "./SidebarItem";
import { MenuItems } from "@utils/constants";





//* Sidebar
const Sidebar: React.FC<Props> = () => {
  const [open, setOpen] = useState<boolean>(true);
  

  return (
    <div 
      className={`h-screen bg-dark-purple p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`} >

      {/* Sidebar Arrow button */}
      <FaAngleLeft 
        className={
          `text-dark-purple bg-white border-2 border-dark-purple
            cursor-pointer  text-3xl rounded-full absolute -right-3 top-9
            ${!open && "rotate-180"} duration-500`
        }
        onClick={() => {setOpen(!open)}}
      />

      {/* Logotype  */}
      <div className="inline-flex ">
        <FaPython className= {
          `text-white text-4xl rounded cursor-pointer
            block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`
          } />
        <h1 className={`text-white origin-left font-medium text-2xl ${!open && "hidden"}`}>My Portfolio</h1>
      </div>

      {/* Sidebar items or Options */}
      <ul className="mt-4 pt-2">
          {MenuItems.map((val, index) => (<SidebarItem {...val} key={index} open={open}/>))}
      </ul>

    </div>
  )
}

export default Sidebar;