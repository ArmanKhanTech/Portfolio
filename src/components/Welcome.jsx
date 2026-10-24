import React from "react";

import useVanta from "../hooks/useVanta";

const Welcome = ({ progress }) => {
  const vantaRef = useVanta(() => import("vanta/dist/vanta.waves.min"), {
    color: 0x000000,
    waveHeight: 20,
    shininess: 100,
  });

  return (
    <section ref={vantaRef} className="fixed inset-0 z-50 bg-black">
      <div className="h-screen w-screen flex flex-col items-start md:items-center justify-center p-5">
        <h1 className="text-5xl lg:text-7xl orange-gradient-text font-semibold">
          Welcome to my Portfolio
        </h1>
        <p
          className="text-3xl lg:text-5xl mt-5 text-white-100"
          role="status"
          aria-live="polite"
        >
          Setting up {Math.round(progress)}%
        </p>
      </div>
    </section>
  );
};

export default Welcome;
