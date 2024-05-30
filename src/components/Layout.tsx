import Sidebar from "./Sidebar";

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className=" flex bg-slate-500">
      <Sidebar />
      <main className="p-7">{children}</main>
    </div>
  );
};

export default Layout;
