import React from "react";

import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-10">
      <hr className="border-white" />
      <div className="footer-container py-10 text-white text-xl">
        <p>
          © 2025 <strong>Arman Khan</strong>. All rights reserved.
        </p>
        <div className="flex gap-3 justify-center items-center">
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target="_blank">
              <img
                src={link.iconUrl}
                alt={link.name}
                className="h-12 w-12 object-cover transition-transform duration-300 lg:hover:scale-110 lg:hover:opacity-90"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
