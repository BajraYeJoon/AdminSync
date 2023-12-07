import { Outlet } from "react-router-dom";
import Header from "../screen/Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
