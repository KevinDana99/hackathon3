import type { JSX } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="flex flex-col justify-between h-full bg-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
