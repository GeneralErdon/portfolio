import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout: React.FC<Props> = () => {
  return (
    <div className=" flex  bg-dark-gray-500 ">
      <Sidebar />
      <main className="p-7 flex-auto "><Outlet /></main>
    </div>
  );
};

export default Layout;
