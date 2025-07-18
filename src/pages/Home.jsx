import React, { Suspense, useCallback } from "react";

import { SkyCanvas } from "../models";
import { HomeInfo } from "../components";

const Home = ({ isLoaded, setIsLoaded, isDraggable, setIsDraggable, showWelcome, setShowWelcome }) => {
  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    setIsDraggable(true);
  }, []);

  const handleMouseUpOrLeave = useCallback(() => {
    setIsDraggable(false);
  }, []);

  return (
    <section className="fixed inset-0 z-0">
      <div
        className="relative min-h-screen w-full bg-gradient-to-r from-[#1b1212] to-black"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        <div className="absolute inset-0">
          <Suspense fallback={<div className="h-screen" />}>
            <SkyCanvas isDraggable={isDraggable} setIsLoaded={setIsLoaded} showWelcome={showWelcome} setShowWelcome={setShowWelcome} />s
          </Suspense>
        </div>
        {isLoaded && (
          <div
            className={`absolute inset-0 w-full h-full overflow-y-auto pointer-events-auto z-10 transition-opacity duration-300 ${isDraggable ? "opacity-0" : "opacity-100"
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
