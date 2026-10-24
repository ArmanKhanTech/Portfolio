import React from "react";

import { CTA, PageHeader, Timeline } from "../components";
import useVanta from "../hooks/useVanta";
import { achievements, education, intros, skillGroups } from "../constants";

const About = () => {
  const vantaRef = useVanta(() => import("vanta/dist/vanta.net.min"), {
    points: 15,
    maxDistance: 20,
    showDots: false,
    spacing: window.innerWidth < 1024 ? 36 : 20,
    backgroundColor: 0x1b1212,
    color: 0xea580c,
  });

  return (
    <section ref={vantaRef} className="fixed inset-0 z-0 bg-[#1b1212]">
      <div className="relative w-full h-full overflow-y-auto">
        <div className="max-container absolute inset-0">
          <PageHeader title="About Me" intro={intros.about} />
          <div className="py-10 flex flex-col">
            <h2 className="section-title">Skills</h2>
            <div className="mt-6 flex flex-col gap-8">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-white text-xl lg:text-2xl font-semibold">
                    {group.title}
                  </h3>
                  <ul className="mt-4 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
                    {group.skills.map((skill) => (
                      <li
                        className="h-24 w-full max-w-24 p-2 backdrop-blur-md rounded-xl flex flex-col gap-2 justify-center items-center"
                        key={skill.name}
                      >
                        <img
                          src={skill.imageUrl}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className="w-12 h-12 object-contain lg:hover:scale-110 transition-transform"
                        />
                        <p className="text-white text-xs lg:text-sm font-semibold text-center">
                          {skill.name}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="py-2">
            <h2 className="section-title">Achievements</h2>
            <ul className="card mt-6 list-disc pl-10 space-y-3 text-white text-lg lg:text-xl">
              {achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </div>
          <div className="py-10">
            <h2 className="section-title">Education</h2>
            <div className="mt-8">
              <Timeline items={education} />
            </div>
          </div>
          <hr className="border-slate-200 mt-10" />
          <CTA />
          <hr className="h-2 border-transparent" />
        </div>
      </div>
    </section>
  );
};

export default About;
