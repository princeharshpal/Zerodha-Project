import React from "react";
import { Outlet } from "react-router-dom";
import LeftSection from "../landingPages/Dashboard/components/components/LeftSection";
import DashNavbar from "../landingPages/Dashboard/components/components/components/DashNavbar";

const DashboardLayout = () => {
  return (
    <div className="w-full flex">
      <LeftSection />

      <div className="w-4/6">
        <DashNavbar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
