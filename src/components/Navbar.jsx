import React from "react";

import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { TfiAlignRight } from "react-icons/tfi";
import { logo } from "../assets/images";

const Navbar = ({
  textColor
}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (isMenuOpen) {
    return (
      <div
        className="sidebar fixed top-0 bottom-0 lg:right-0 p-2 w-[100%] z-10 overflow-y-auto text-center backdrop-blur-md bg-opacity-80" >
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
          <span className="text-2xl font-medium text-white">
            <NavLink to='/'>
              Home
            </NavLink>
          </span>
        </div>
        <div
          className="p-2.5 mt-3 flex items-center justify-center rounded-md px-4 duration-300 cursor-pointer" >
          <span className="text-2xl font-medium text-white">
            <NavLink to='/about'>
              About
            </NavLink>
          </span>
        </div>
        <div
          className="p-2.5 mt-3 flex items-center justify-center rounded-md px-4 duration-300 cursor-pointer" >
          <span className="text-2xl font-medium text-white">
            <NavLink to='/projects'>
              Projects
            </NavLink>
          </span>
        </div>
        <div
          className="p-2.5 mt-3 flex items-center justify-center rounded-md px-4 duration-300 cursor-pointer" >
          <span className="text-2xl font-medium text-white">
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
        <img src={logo} alt='logo' className='w-[21%] h-[21%]' />
        <div className='p-2 flex items-center border rounded-md' onClick={toggleMenu}>
          <TfiAlignRight className='w-7 h-7' color="orange" />
        </div>
      </header>
    );
  } else {
    return (
      <header className='header'>
        <NavLink to='/'>
          <img src={logo} alt='logo' className='w-[25%] h-[25%]' />
        </NavLink>
        <nav className='flex text-xl gap-8 font-medium border py-3.5 px-5 rounded-xl'>
          <NavLink to='/' className={textColor}>
            Home
          </NavLink>
          <NavLink to='/about' className={textColor}>
            About
          </NavLink>
          <NavLink to='/projects' className={textColor}>
            Projects
          </NavLink>
          <NavLink to='/contact' className={textColor}>
            Contact
          </NavLink>
        </nav>
      </header>
    );
  }
};

export default Navbar;
