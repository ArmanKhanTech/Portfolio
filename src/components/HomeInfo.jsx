import React from "react";
import { NavLink, Link } from "react-router-dom";

import HireButton from "./HireButton";
import { socialLinks } from "../constants";

const domain = ["Web", "App", "Desktop", "Machine", "Serverless"];

const suffix = [
  "Development",
  "Development",
  "Development",
  "Learning",
  "Computing",
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
        <div className="text-4xl mb-3 lg:text-6xl font-semibold orange-gradient-text lg:lg:hover:backdrop-blur-md lg:hover:rounded-md lg:lg:hover:px-5 lg:lg:hover:py-1 transition-colors duration-500">
          <h1>Hello! there,</h1>
          <h1>
            I am{" "}
            <span className="relative inline-block">
              <span className="orange-gradient-text font-bold relative inline-block stroke-current">
                Arman Khan
                <svg
                  className="absolute -bottom-2 left-0 w-full h-[10px] md:h-[15px] rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
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
          </h1>
        </div>
        <div className="flex flex-col md:flex-row mb-5 md:gap-4 text-4xl lg:text-6xl text-red-600 font-semibold break-words leading-tight">
          <div>
            <p>{domain[index]}</p>
          </div>
          <div>
            <p>{suffix[index]}</p>
          </div>
        </div>
        <div className="sm:mt-10 md:mt-3">
          <NavLink to="/services">
            <HireButton />
          </NavLink>
        </div>
      </div>
      <div className="mt-5 font-semibold text-2xl lg:text-4xl text-red-600 lg:lg:hover:backdrop-blur-md lg:hover:rounded-md lg:lg:hover:px-5 lg:lg:hover:py-1 transition-colors duration-500">
        <span>
          I am a Software Engineer & Computer Engineering Gradaute from India.
        </span>
      </div>
      <div className="mt-5">
        <a
          href="https://drive.google.com/file/d/11vNoVrTD5XG5TvKwXt3cNae08klvXkR8/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className="px-3 py-1.5 font-semibold text-2xl lg:text-3xl text-white transition duration-500 ease-in-out transform bg-gradient-to-r from-orange-400 to-red-600 rounded-md lg:hover:scale-110">
            Résumé
          </button>
        </a>
      </div>
      <div className="mt-10 lg:mt-6 self-start flex gap-2 rounded-lg">
        {socialLinks.map((link) => (
          <Link key={link.name} to={link.link} target="_blank">
            <img
              src={link.iconUrl}
              alt={link.name}
              className="h-12 w-12 object-cover transition-transform duration-300 lg:hover:scale-110 lg:hover:opacity-90"
            />
          </Link>
        ))}
      </div>
      <div className="h-12" />
    </div>
  );
};

export default HomeInfo;
