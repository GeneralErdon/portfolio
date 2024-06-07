import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout: React.FC<Props> = () => {
  return (
    <div className="flex bg-dark-gray-500 h-screen w-screen">
      <Sidebar />
      <main className="p-7 flex-auto">
        <div className="bg-dark-gray-800 h-full w-full text-dark-gray-200 p-4 rounded-lg overflow-y-scroll scroll-smooth shadow-lg">
          <Outlet /> 
        </div>
      </main>
    </div>
  );
};

export default Layout;
