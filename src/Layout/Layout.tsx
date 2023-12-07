import { Outlet } from "react-router-dom";
import Header from "../screen/Header/Header";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

const Layout = () => {
  return (
    <MaxWidthWrapper>
      <Header />
      <Outlet />
    </MaxWidthWrapper>
  );
};

export default Layout;
