import React from "react";

import { CTA, PageHeader, Timeline } from "../components";
import useVanta from "../hooks/useVanta";
import { experience, intros } from "../constants";

const Experience = () => {
  const vantaRef = useVanta(() => import("vanta/dist/vanta.birds.min"), {
    minHeight: 200.0,
    minWidth: 200.0,
    colorMode: "lerp",
    birdSize: 1.0,
    quantity: 4.0,
    wingSpan: 30.0,
    speedLimit: 3.0,
    separation: 20.0,
    alignment: 20.0,
    cohesion: 20.0,
    color1: 0xea580c,
    color2: 0xdc2626,
    backgroundColor: 0x1b1212,
  });

  return (
    <section ref={vantaRef} className="fixed inset-0 z-0 bg-[#1b1212]">
      <div className="relative w-full h-full overflow-y-auto">
        <div className="max-container absolute inset-0">
          <PageHeader title="Experience" intro={intros.experience} />
          <div className="mt-12">
            <Timeline items={experience} />
          </div>
          <hr className="border-slate-200 mt-16" />
          <CTA />
          <hr className="h-2 border-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
