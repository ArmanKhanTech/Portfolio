import React from "react";

import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

import GLOBE from "vanta/dist/vanta.globe.min";

class Projects extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    this.vantaEffect = GLOBE({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      mobileScale: 1.0,
      color: 0xea580c,
      backgroundColor: 0x1b1212,
      minDistance: 15.0,
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
            <h1 className="text-5xl">
              <span className="font-semibold orange-gradient-text">
                Projects
              </span>
            </h1>
            <p className="mt-5 text-white p-4 text-xl lg:text-2xl rounded-xl backdrop-blur-xl bg-black bg-opacity-25">
              I've embarked on numerous projects throughout the years, but these
              are the ones I hold closest to my heart. Many of them are
              open-source, so if you come across something that piques your
              interest, feel free to explore the codebase and contribute your
              ideas for further enhancements. Your collaboration is highly
              valued!
            </p>
            <div className="flex flex-wrap my-20 gap-16">
              {projects.map((project) => (
                <div className="lg:w-[432px] w-full" key={project.name}>
                  <div className="block-container w-12 h-12">
                    <div className="btn-front rounded-xl flex justify-center items-center">
                      <img src={project.iconUrl} alt="threads" />
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col backdrop-blur-xl bg-black bg-opacity-25 p-3 rounded-xl">
                    <h4 className="text-2xl text-white font-semibold">
                      {project.name}
                    </h4>
                    <p className="mt-2 text-white text-lg lg:text-xl">
                      {project.description}
                    </p>
                    <div className="mt-5 flex items-center gap-2">
                      <Link
                        to={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-orange-600"
                      >
                        Link
                      </Link>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-orange-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d={arrow} clipRule="evenodd" />
                      </svg>
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

export default Projects;
