// Imports
import { useState } from "react";
import { FaAngleLeft, FaPython } from "react-icons/fa6";
import SidebarItem from "./SidebarItem";
import { MenuItems } from "@utils/constants";
import { useNavigate } from "react-router-dom";





//* Sidebar
const Sidebar: React.FC<Props> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigator = useNavigate();

  return (
    <div 
      className={`
      h-screen  bg-dark-gray-800 p-5 pt-8 ${open ? "w-72 max-sm:w-96" : "w-20"} duration-300 relative font-custom
      
      `} >

      {/* Sidebar Arrow button */}
      <FaAngleLeft 
        className={
          `text-purple-500 bg-dark-gray-200 border-2 border-purple-500
            cursor-pointer  text-3xl rounded-full absolute -right-3 top-9
            ${!open && "rotate-180"} duration-500 
            
            
            `
        }
        onClick={() => {setOpen(!open)}}
      />

      {/* Logotype  */}
      <div className="inline-flex " onClick={() => navigator("/")}>
        <FaPython className= {
          `text-orange-500 text-4xl  rounded cursor-pointer
            block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`
          } 
          
          />
        <h1 className={`text-dark-gray-200 origin-left text-md text-center  ${!open && "hidden"} cursor-pointer`}>My Portfolio</h1>
        
      </div>

      {/* Sidebar items or Options */}
      <ul className="mt-4 pt-2">
          {MenuItems.map((val, index) => (<SidebarItem {...val} key={index} open={open}/>))}
      </ul>

    </div>
  )
}

export default Sidebar;