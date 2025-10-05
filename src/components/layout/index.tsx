import type { JSX } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ children }: { children?: JSX.Element }) => {
  return (
    <div className="flex flex-col justify-between h-auto bg-white min-h-full">
      <Navbar />
      <div className="pt-[232px] w-full relative">{children || <Outlet />}</div>
      <Footer />
    </div>
  );
};

export default Layout;
