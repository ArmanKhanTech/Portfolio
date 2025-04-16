import React, { Suspense, useState, useCallback } from "react";

import { SkyCanvas } from "../models";
import { HomeInfo } from "../components";

const Home = () => {
  const [isDraggable, setIsDraggable] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    setIsDraggable(true);
  }, []);

  const handleMouseUpOrLeave = useCallback(() => {
    setIsDraggable(false);
  }, []);

  const handleLoad = useCallback((status) => {
    setIsLoaded(status);
  }, []);

  return (
    <section>
      <div
        className="relative min-h-screen w-full bg-gradient-to-r from-[#1b1212] to-black"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        <div className="absolute inset-0">
          <Suspense fallback={<div className="h-screen" />}>
            <SkyCanvas isDraggable={isDraggable} onLoad={handleLoad} />
          </Suspense>
        </div>
        {isLoaded && (
          <div
            className={`relative w-full h-full overflow-y-auto pointer-events-auto z-10 transition-opacity duration-300 ${
              isDraggable ? "opacity-0" : "opacity-100"
            }`}
          >
            <HomeInfo />
            <p className="absolute bottom-4 right-0 left-0 text-2xl text-red-600 font-semibold text-center hidden lg:block">
              Hold & drag to see the magic!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
