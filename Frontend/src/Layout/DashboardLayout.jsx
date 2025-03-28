import React from "react";
import { Outlet } from "react-router-dom";
import LeftSection from "../landingPages/Dashboard/LeftSection";
import DashNavbar from "../landingPages/Dashboard/components/DashNavbar";

const DashboardLayout = () => {
  return (
    <div className="w-full flex">
      <LeftSection />

      <div className="w-full lg:w-4/6">
        <DashNavbar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
