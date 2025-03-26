import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {
  const navLinks = [
    {
      link: "/signup",
      label: "Signup",
    },
    {
      link: "/about",
      label: "About",
    },
    {
      link: "/products",
      label: "Products",
    },
    {
      link: "/pricing",
      label: "Pricing",
    },
    {
      link: "/support",
      label: "Support",
    },
  ];

  return (
    <div className="sticky top-0 bg-white flex items-center justify-between px-48 py-5 border-b-2 border-gray-100">
      <Link to={"/"}>
        <img className="h-5" src="/images/logo.svg" alt="logo" />
      </Link>

      <nav className="flex items-center gap-10 text-gray-500">
        {navLinks.map((navLink, idx) => (
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
              }`
            }
            key={idx}
            to={navLink.link}
          >
            {navLink.label}
          </NavLink>
        ))}
        <span className="text-xl text-black cursor-pointer">
          <HiOutlineMenu />
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
