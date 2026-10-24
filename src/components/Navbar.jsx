import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { TbMenu2, TbX } from "react-icons/tb";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const desktopLinkClass = ({ isActive }) =>
  isActive
    ? "orange-gradient-text font-bold"
    : "lg:hover:orange-gradient-text lg:hover:font-bold";

const BurgerMenu = ({ closeMenu }) => {
  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && closeMenu();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeMenu]);

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      className="fixed z-[50] backdrop-blur-md bg-black bg-opacity-50 font-semibold inset-0 p-2 w-full overflow-y-auto text-center"
    >
      <div className="py-4 px-3 flex items-center justify-end">
        <button
          type="button"
          onClick={closeMenu}
          aria-label="Close menu"
          className="text-white p-2"
        >
          <TbX className="w-9 h-9" aria-hidden="true" />
        </button>
      </div>
      <nav className="mt-6 flex flex-col items-center gap-3">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end
            onClick={closeMenu}
            className={({ isActive }) =>
              `p-2.5 px-4 text-2xl ${isActive ? "orange-gradient-text" : "text-white"}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

const Navbar = ({ hidden, overlay }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  if (isMenuOpen) {
    return <BurgerMenu closeMenu={closeMenu} />;
  }

  if (hidden) return null;

  return (
    <header
      className={`fixed z-[50] top-0 left-0 right-0 w-full ${
        overlay
          ? "bg-gradient-to-b from-[#1b1212] from-60% to-transparent"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-5xl mx-auto lg:px-12 flex justify-between items-center py-4 px-5 backdrop-blur-[2px]">
        <Link
          to="/"
          aria-label="Arman Khan, home"
          className="text-3xl backdrop-blur-sm orange-gradient-text font-bold rounded-xl border px-2 py-2.5 lg:hover:scale-125 transition-transform duration-300"
        >
          AK
        </Link>
        <nav className="hidden lg:flex backdrop-blur-sm lg:hover:backdrop-blur-2xl text-xl gap-8 font-semibold text-white border py-3.5 px-5 rounded-xl">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} end className={desktopLinkClass}>
              {label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded="false"
          aria-controls="mobile-menu"
          className="lg:hidden text-white backdrop-blur-sm border rounded-xl p-2.5"
        >
          <TbMenu2 className="w-8 h-8" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
