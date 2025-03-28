import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const DashNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { link: "/dashboard", label: "Dashboard" },
    { link: "/dashboard/orders", label: "Orders" },
    { link: "/dashboard/holdings", label: "Holdings" },
    { link: "/dashboard/positions", label: "Positions" },
  ];

  return (
    <div className="sticky top-0 bg-white flex items-center justify-between px-4 lg:pl-12 lg:pr-5 border-b border-gray-300">
      <Link to={"/dashboard"}>
        <img className="w-10" src="/images/kiteLogo.svg" alt="logo" />
      </Link>

      <button
        className="lg:hidden text-2xl py-5"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className="hidden lg:flex items-center gap-5">
        <nav className="flex gap-10 my-8 border-r-2 pr-5 border-gray-300">
          {navItems.map((item, idx) => (
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
          ))}
        </nav>

        <div className="flex items-center gap-2 cursor-pointer">
          <span className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center text-xl font-semibold">
            H
          </span>
          <span>Harsh</span>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-5 lg:hidden">
          {navItems.map((item, idx) => (
            <NavLink
              end
              className={({ isActive }) =>
                `block py-2 ${
                  isActive
                    ? "text-blue-500 font-semibold"
                    : "hover:text-blue-500"
                }`
              }
              to={item.link}
              key={idx}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashNavbar;
