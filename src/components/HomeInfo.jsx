import React from "react";
import { NavLink } from "react-router-dom";

import HireButton from "./HireButton";
import SocialLinks from "./SocialLinks";
import { resumeUrl } from "../constants";

const domain = ["Backend", "System", "API", "Cloud &", "AI"];

const suffix = [
  "Engineering",
  "Architecture",
  "Design",
  "DevOps",
  "Integration",
];

const HomeInfo = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => (index + 1) % domain.length),
      2500,
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="max-container flex flex-col items-start justify-start min-h-screen overflow-y-auto mb-40 lg:mb-0 pt-20 lg:pt-24">
      <div>
        <h1 className="text-4xl mb-3 lg:text-6xl font-semibold orange-gradient-text lg:hover:backdrop-blur-md lg:hover:rounded-md lg:hover:px-5 lg:hover:py-1 transition-colors duration-500">
          <span className="block">Hello! there,</span>
          <span className="block">
            I am{" "}
            <span className="relative inline-block">
              <span className="orange-gradient-text font-bold relative inline-block stroke-current">
                Arman Khan
                <svg
                  className="absolute -bottom-2 left-0 w-full h-[10px] md:h-[15px] rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 5 C20 10, 80 10, 95 5"
                    fill="transparent"
                    stroke="rgb(255, 99, 71)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>{" "}
            and I do
          </span>
        </h1>
        <p
          className="flex flex-col md:flex-row mb-5 md:gap-4 text-4xl lg:text-6xl text-red-600 font-semibold break-words leading-tight"
          aria-live="off"
        >
          <span>{domain[index]}</span>
          <span>{suffix[index]}</span>
        </p>
        <div className="sm:mt-10 md:mt-3">
          <NavLink to="/services" aria-label="Hire me: see services">
            <HireButton />
          </NavLink>
        </div>
      </div>
      <p className="mt-5 font-semibold text-2xl lg:text-4xl text-red-600 lg:hover:backdrop-blur-md lg:hover:rounded-md lg:hover:px-5 lg:hover:py-1 transition-colors duration-500">
        I am a backend-focused Software Engineer from India, building systems
        that scale.
      </p>
      <div className="mt-5">
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-3 py-1.5 font-semibold text-2xl lg:text-3xl text-white transition duration-500 ease-in-out transform bg-gradient-to-r from-orange-400 to-red-600 rounded-md lg:hover:scale-110"
        >
          Resume
        </a>
      </div>
      <SocialLinks className="mt-10 lg:mt-6 self-start" />
      <div className="h-12" />
    </div>
  );
};

export default HomeInfo;
