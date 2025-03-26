import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import OpenAccount from "../components/OpenAccount";

const MainLayout = () => {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <div
        className={`${location.pathname === "/support" ? "w-full" : "mx-48 "}`}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
