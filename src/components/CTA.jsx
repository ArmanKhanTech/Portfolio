import React from "react";

import { Link } from "react-router-dom";

const CTA = ({color}) => {
  return (
    <section className='cta rounded-xl my-10 bg-black bg-opacity-25 bg-blur p-3 lg:px-5'>
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        Let’s build something together!
      </p>
      <Link 
        to="/contact"
        className={`cta-button ${color} w-full text-center lg:w-28 bg-opacity-25 bg-blur p-2 lg:px-5 text-white font-semibold rounded-xl`}
      >
        Contact
      </Link>
    </section>
  );
};

export default CTA;
