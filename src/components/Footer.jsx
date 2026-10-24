import React from "react";

import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="mt-10">
      <hr className="border-white" />
      <div className="footer-container py-10 text-white text-xl">
        <p>
          © {new Date().getFullYear()} <strong>Arman Khan</strong>. All rights
          reserved.
        </p>
        <SocialLinks className="justify-center" />
      </div>
    </footer>
  );
};

export default Footer;
