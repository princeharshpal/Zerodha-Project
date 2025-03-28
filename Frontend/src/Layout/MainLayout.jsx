import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  const location = useLocation();
  const isSupportPage = location.pathname === "/support";

  return (
    <div>
      <Navbar />
      <div
        className={isSupportPage ? "w-full" : "px-4 sm:px-6 md:px-8 lg:px-48"}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
