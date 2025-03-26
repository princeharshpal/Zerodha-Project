import React from "react";
import { NavLink } from "react-router-dom";

const DashNavbar = () => {
  const navItems = [
    {
      link: "/dashboard/component",
      label: "Dashboard",
    },
    {
      link: "/dashboard/orders",
      label: "Orders",
    },
    {
      link: "/dashboard/holdings",
      label: "Holdings",
    },
    {
      link: "/dashboard/positions",
      label: "Positions",
    },
    {
      link: "/dashboard/funds",
      label: "Funds",
    },
    {
      link: "/dashboard/apps",
      label: "Apps",
    },
  ];
  return (
    <div className="flex items-center justify-between">
      <h1>Logo</h1>

      <nav className="flex gap-10">
        {navItems.map((item, idx) => {
          return (
            <NavLink to={item.link} key={idx}>
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default DashNavbar;
