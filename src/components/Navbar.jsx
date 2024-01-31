import React from "react";

import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const isMobile = window.innerWidth <= 768;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (isMenuOpen) {
    return (
      <div
        className="sidebar fixed top-0 bottom-0 right-0 left-0 p-2 w-[100%] z-10 overflow-y-auto text-center backdrop-blur-md bg-opacity-80" >
      <div className="text-gray-100 text-xl">
        <div className="p-2.5 mt-1 ml-1 flex items-center" onClick={toggleMenu}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-8 h-8' >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M15 19l-7-7 7-7' />
          </svg>
        </div>
        </div>
        <div
          className="p-2.5 mt-10 flex items-center justify-center rounded-md px-4 duration-300 cursor-pointer" >
          <span className="text-2xl font-bold text-white">
            <NavLink to='/'>
              Home
            </NavLink>
          </span>
        </div>
        <div
          className="p-2.5 mt-3 flex items-center justify-center rounded-md px-4 duration-300 cursor-pointer" >
          <span className="text-2xl font-bold text-white">
            <NavLink to='/about'>
              About
            </NavLink>
          </span>
        </div>
        <div
          className="p-2.5 mt-3 flex items-center justify-center rounded-md px-4 duration-300 cursor-pointer" >
          <span className="text-2xl font-bold text-white">
            <NavLink to='/projects'>
              Projects
            </NavLink>
          </span>
        </div>
        <div
          className="p-2.5 mt-3 flex items-center justify-center rounded-md px-4 duration-300 cursor-pointer" >
          <span className="text-2xl font-bold text-white">
            <NavLink to='/contact'>
              Contact
            </NavLink>
          </span>
        </div>
      </div>
    );
  }

  if (isMobile) {
    return (
      <header className='header'>
        <button 
          className='text-3xl orange-gradient-text font-bold font-sans rounded-xl border px-2 py-2.5'
          onClick={toggleMenu}>
          AK
        </button>
      </header>
    );
  } else {
    return (
      <header className='header'>
        <NavLink to='/'>
          <button className='text-3xl orange-gradient-text font-bold font-sans rounded-xl border -webkit-padding px-2 py-2.5'>
            AK
          </button>
        </NavLink>
        <nav className='flex text-xl gap-8 font-bold text-white border py-3.5 px-5 rounded-xl'>
          <NavLink to='/'>
            Home
          </NavLink>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/projects'>
            Projects
          </NavLink>
          <NavLink to='/contact'>
            Contact
          </NavLink>
        </nav>
      </header>
    );
  }
};

export default Navbar;
