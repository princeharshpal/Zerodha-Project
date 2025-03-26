import React from "react";
import DashNavbar from "./DashNavbar";
import { Outlet } from "react-router-dom";

const RightSection = () => {
  return (
    <div className="w-4/6">
      <DashNavbar />
      <Outlet />
    </div>
  );
};

export default RightSection;
