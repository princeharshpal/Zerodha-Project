import React from "react";
import { Link, NavLink } from "react-router-dom";

const DashNavbar = () => {
  const navItems = [
    {
      link: "/dashboard",
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
    <div className="sticky top-0 bg-white flex items-center justify-between pl-12 pr-5 border-b border-gray-300">
      <Link to={"/dashboard"}>
        <img className="w-10" src="/images/kiteLogo.svg" alt="logo" />
      </Link>

      <div className="flex items-center gap-5">
        <nav className="flex gap-10 my-8 border-r-2 pr-5 border-gray-300">
          {navItems.map((item, idx) => {
            return (
              <NavLink
                end
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-blue-500 font-semibold"
                      : "hover:text-blue-500"
                  }`
                }
                to={item.link}
                key={idx}
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 cursor-pointer">
          <span className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center text-xl font-semibold">
            H
          </span>
          <span>Harsh</span>
        </div>
      </div>
    </div>
  );
};

export default DashNavbar;
