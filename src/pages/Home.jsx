import React, { Suspense, lazy, useCallback, useState } from "react";

import { HomeInfo } from "../components";

// The 3D scene (and three.js) loads in parallel; the hero text never waits.
const SkyCanvas = lazy(() => import("../models/Sky"));

const Home = ({ isDraggable, setIsDraggable }) => {
  const [isSkyReady, setIsSkyReady] = useState(false);
  const handleSkyReady = useCallback(() => setIsSkyReady(true), []);

  const handleMouseDown = useCallback(
    (e) => {
      // Let links and buttons behave normally; drag only from empty space,
      // and only once there is a scene to look at.
      if (!isSkyReady || e.target.closest("a, button")) return;
      e.preventDefault();
      setIsDraggable(true);
    },
    [isSkyReady, setIsDraggable],
  );

  const handleMouseUpOrLeave = useCallback(() => {
    setIsDraggable(false);
  }, [setIsDraggable]);

  return (
    <section className="fixed inset-0 z-0 page-backdrop">
      <div
        className="relative min-h-screen w-full"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        <Suspense fallback={null}>
          <SkyCanvas
            isDraggable={isDraggable}
            isReady={isSkyReady}
            onReady={handleSkyReady}
          />
        </Suspense>
        <div
          className={`absolute inset-0 w-full h-full overflow-y-auto pointer-events-auto z-10 transition-opacity duration-300 ${
            isDraggable ? "opacity-0" : "opacity-100"
          }`}
        >
          <HomeInfo />
          {isSkyReady && (
            <p className="absolute bottom-4 right-0 left-0 text-2xl text-red-600 font-semibold text-center hidden lg:block select-none animate-[canvas-fade-in_0.9s_ease-out_both]">
              Hold & drag to see the magic!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
