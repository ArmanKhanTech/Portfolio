import React from "react";

import { socialLinks } from "../constants";

const SocialLinks = ({ className = "" }) => {
  return (
    <div className={`flex gap-3 items-center ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
        >
          <img
            src={link.iconUrl}
            alt=""
            width="48"
            height="48"
            className="h-12 w-12 object-cover transition-transform duration-300 lg:hover:scale-110 lg:hover:opacity-90"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
