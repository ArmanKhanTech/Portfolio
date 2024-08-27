import React from "react";

import { Link } from "react-router-dom";

import { CTA } from "../components";
import { services } from "../constants";

import DOTS from "vanta/dist/vanta.dots.min";

class Services extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    this.vantaEffect = DOTS({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      size: 5.0,
      spacing: 40.0,
      backgroundColor: 0x1b1212,
      showLines: false,
    });
  }

  componentWillUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }

  render() {
    return (
      <section ref={this.vantaRef} className="fixed inset-0 z-0">
        <div className="relative w-full h-full overflow-y-auto">
          <div className="max-container absolute inset-0">
            <h1 className="text-headingMobile lg:text-5xl">
              <span className="font-semibold orange-gradient-text font-bold">
                Services
              </span>
            </h1>
            <p className="mt-5 text-white p-4 text-xl lg:text-2xl rounded-xl backdrop-blur-xl bg-black bg-opacity-25">
              Passionate about transforming ideas into innovative digital
              solutions, I specialize in creating dynamic applications and
              responsive websites with the latest technologies. In machine
              learning, I employ data-driven approaches to develop intelligent
              algorithms, enhancing application capabilities.
            </p>
            <div className="flex flex-wrap my-20 gap-16">
              {services.map((service) => (
                <div className="lg:w-[432px] w-full" key={service.name}>
                  <div className="block-container w-12 h-12">
                    <div className={`btn-back rounded-xl ${service.theme}`} />
                    <div className="btn-front rounded-xl flex justify-center items-center">
                      <img
                        src={service.iconUrl}
                        alt="threads"
                        className="p-2 object-contain"
                      />
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col backdrop-blur-xl bg-black bg-opacity-25 p-3 rounded-xl">
                    <h4 className="text-2xl font-poppins text-white font-semibold">
                      {service.name}
                    </h4>
                    <p className="mt-2 text-white text-lg lg:text-xl">
                      {service.description}
                    </p>
                    <div className="mt-5 flex items-center gap-2 font-poppins">
                      <Link
                        to={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-orange-600"
                      >
                        Know More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <hr className="border-slate-200" />
            <CTA color={"bg-orange-600"} />
            <hr className="h-2 border-transparent" />
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
