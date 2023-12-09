import React from "react";
import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const Footer = ({
  textColor
}) => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className={`footer-container ${textColor}`}>
        <p>
          © 2023 <strong>Arman Khan</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className={`w-8 ${link.name === 'LinkedIn' ? 'h-10' : 'h-8'} object-cover`}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
