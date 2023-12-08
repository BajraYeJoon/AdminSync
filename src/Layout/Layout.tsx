import { Outlet } from "react-router-dom";
import Header from "../screen/Header/Header";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import SidebarPanel from "../screen/Sidebar/Sidebar";

const Layout = () => {
  return (
    <MaxWidthWrapper>
      <Header />
      <div className="flex mt-10 gap-4">
        <SidebarPanel />

        <Outlet />
      </div>
    </MaxWidthWrapper>
  );
};

export default Layout;
