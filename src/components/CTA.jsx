import React from "react";

import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta rounded-xl bg-blur p-3 lg:px-5">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        Let’s build something together!
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
