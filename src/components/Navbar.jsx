import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigateToHome = () => {
    navigate("/");
  };

  if (isMenuOpen) {
    return (
      <div
        className={`fixed z-[50] backdrop-blur-md bg-black bg-opacity-50 z-50 font-semibold top-0 bottom-0 right-0 left-0 p-2 w-[100%] overflow-y-auto text-center`}
      >
        <div className="text-xl">
          <div className="p-2.5 mt-1 flex items-center" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 text-white cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
        </div>
        <div className="p-2.5 mt-10 flex items-center justify-center rounded-md px-4 duration-300 cursor-pointer">
          <span className="text-2xl text-white">
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </span>
        </div>
        <div className="p-2.5 mt-3 flex items-center justify-center rounded-md px-4 duration-300 cursor-pointer">
          <span className="text-2xl text-white">
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </span>
        </div>
        <div className="p-2.5 mt-3 flex items-center justify-center rounded-md px-4 duration-300 cursor-pointer">
          <span className="text-2xl text-white">
            <NavLink to="/experience" onClick={closeMenu}>
              Experience
            </NavLink>
          </span>
        </div>
        <div className="p-2.5 mt-3 flex items-center justify-center rounded-md px-4 duration-300 cursor-pointer">
          <span className="text-2xl text-white">
            <NavLink to="/projects" onClick={closeMenu}>
              Projects
            </NavLink>
          </span>
        </div>
        <div className="p-2.5 mt-3 flex items-center justify-center rounded-md px-4 duration-300 cursor-pointer">
          <span className="text-2xl text-white">
            <NavLink to="/services" onClick={closeMenu}>
              Services
            </NavLink>
          </span>
        </div>
        <div className="p-2.5 mt-3 flex items-center justify-center rounded-md px-4 duration-300 cursor-pointer">
          <span className="text-2xl text-white">
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </span>
        </div>
      </div>
    );
  }

  return (
    <header
      className={`fixed z-[50] backdrop-blur-[2px] m-auto max-w-5xl lg:px-12 top-0 left-0 right-0 w-[100%] z-50 bg-transparent`}
    >
      <div className="container flex justify-between items-center py-4 px-5 lg:px-0">
        <button
          className="text-3xl backdrop-blur-sm orange-gradient-text font-bold rounded-xl border px-2 py-2.5 hover:scale-125 transition-transform duration-300"
          onClick={window.innerWidth < 768 ? toggleMenu : navigateToHome}
        >
          AK
        </button>
        <nav className="hidden lg:flex backdrop-blur-sm hover:backdrop-blur-2xl text-xl gap-8 font-semibold text-white border py-3.5 px-5 rounded-xl">
          <NavLink
            className="hover:orange-gradient-text hover:font-bold"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="hover:orange-gradient-text hover:font-bold"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="hover:orange-gradient-text hover:font-bold"
            to="/experience"
          >
            Experience
          </NavLink>
          <NavLink
            className="hover:orange-gradient-text hover:font-bold"
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            className="hover:orange-gradient-text hover:font-bold"
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            className="hover:orange-gradient-text hover:font-bold"
            to="/contact"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
