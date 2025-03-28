import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { link: "/signup", label: "Signup" },
    { link: "/about", label: "About" },
    { link: "/products", label: "Products" },
    { link: "/pricing", label: "Pricing" },
    { link: "/support", label: "Support" },
  ];

  return (
    <div className="sticky top-0 bg-white flex items-center justify-between lg:px-48 px-5 py-5 border-b-2 border-gray-100">
      <Link to={"/"}>
        <img className="h-5" src="/images/logo.svg" alt="logo" />
      </Link>

      <div
        className="lg:hidden text-2xl text-black cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoClose /> : <HiOutlineMenu />}
      </div>

      <nav className="hidden lg:flex items-center gap-10 text-gray-500">
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
      </nav>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full text-xl bg-white shadow-lg flex flex-col gap-5 items-center py-5 lg:hidden">
          {navLinks.map((navLink, idx) => (
            <NavLink
              className="py-2 text-gray-600 hover:text-blue-500"
              key={idx}
              to={navLink.link}
              onClick={() => setIsOpen(false)}
            >
              {navLink.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
