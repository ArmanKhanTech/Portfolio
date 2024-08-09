import React from "react";

import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (isMenuOpen) {
    return (
      <div className="fixed backdrop-blur-lg top-0 bottom-0 right-0 left-0 p-2 w-[100%] overflow-y-auto text-center">
        <div className="text-xl">
          <div
            className="p-2.5 mt-1 ml-1 flex items-center"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
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
            <NavLink to="/">Home</NavLink>
          </span>
        </div>
        <div className="p-2.5 mt-3 flex items-center justify-center rounded-md px-4 duration-300 cursor-pointer">
          <span className="text-2xl text-white">
            <NavLink to="/about">About</NavLink>
          </span>
        </div>
        <div className="p-2.5 mt-3 flex items-center justify-center rounded-md px-4 duration-300 cursor-pointer">
          <span className="text-2xl text-white">
            <NavLink to="/projects">Projects</NavLink>
          </span>
        </div>
        <div className="p-2.5 mt-3 flex items-center justify-center rounded-md px-4 duration-300 cursor-pointer">
          <span className="text-2xl text-white">
            <NavLink to="/services">Services</NavLink>
          </span>
        </div>
        <div className="p-2.5 mt-3 flex items-center justify-center rounded-md px-4 duration-300 cursor-pointer">
          <span className="text-2xl text-white">
            <NavLink to="/contact">Contact</NavLink>
          </span>
        </div>
      </div>
    );
  }

  return (
    <header className="header">
      <button
        className="text-3xl orange-gradient-text font-bold rounded-xl border px-2 py-2.5"
        onClick={window.innerWidth < 768 ? toggleMenu : null}
      >
        AK
      </button>
      <nav className="hidden lg:flex text-xl gap-8 font-semibold text-white border py-3.5 px-5 rounded-xl">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
