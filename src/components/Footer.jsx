import React from "react";

import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="footer mt-10">
      <hr className="border-white" />
      <div className="footer-container text-white text-xl">
        <p>
          © 2024 <strong>Arman Khan</strong>. All rights reserved.
        </p>
        <div className="flex gap-3 justify-center items-center">
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target="_blank">
              <img
                src={link.iconUrl}
                alt={link.name}
                className={`${link.name === "LinkedIn" ? "linkedin-icon" : "h-11 w-11"} object-cover`}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
