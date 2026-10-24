import React from "react";

import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta rounded-xl my-10 backdrop-blur-md p-3 lg:px-5">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        Let’s build something together!
      </p>
      <Link
        to="/contact"
        className="cta-button w-full text-center text-xl lg:w-32 text-orange-600 border border-orange-600 p-2 lg:px-5 font-semibold rounded-xl lg:hover:bg-orange-600 lg:hover:text-white transition-colors"
      >
        Contact
      </Link>
    </section>
  );
};

export default CTA;
