import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import OpenAccount from "../components/OpenAccount";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-48">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
