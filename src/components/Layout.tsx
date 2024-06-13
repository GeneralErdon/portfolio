import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout: React.FC<Props> = () => {
  return (
    <div className="flex flex-col bg-dark-gray-500 h-screen w-screen">
      <Navigation />
      {/* <Menu /> */}
        <div className="bg-dark-gray-500 h-full w-full text-dark-gray-200 p-4 rounded-lg overflow-y-scroll scroll-smooth shadow-lg">
          <Outlet /> 
        </div>
      {/* <main className="p-7 flex-auto">
      </main> */}
    </div>
  );
};

export default Layout;
