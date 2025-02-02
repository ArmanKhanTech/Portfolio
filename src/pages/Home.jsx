import React, { Suspense, useEffect, useState, useCallback, memo } from "react";
import { Welcome } from "../components";

const SkyCanvas = React.lazy(() => import("../models/Sky"));
const HomeInfo = React.lazy(() => import("../components/HomeInfo"));

// Memoized HomeInfo component to prevent unnecessary re-renders
const MemoizedHomeInfo = memo(() => <HomeInfo />);

// Separate component for the drag instruction text
const DragInstruction = memo(() => (
  <p className="absolute bottom-4 right-0 left-0 text-2xl text-red-600 font-semibold text-center hidden lg:block">
    Hold & drag to see the magic!
  </p>
));

const HomeSection = memo(({ isLoaded, setIsLoaded }) => {
  const [isDraggable, setIsDraggable] = useState(false);

  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    setIsDraggable(true);
  }, []);

  const handleMouseUpOrLeave = useCallback(() => {
    setIsDraggable(false);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, [setIsLoaded]);

  return (
    <section
      className="relative min-h-screen w-full bg-gradient-to-r from-[#1b1212] to-black"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
    >
      {isLoaded && (
        <div
          className={`relative w-full h-full overflow-y-auto pointer-events-auto z-10 transition-opacity duration-300 ${
            isDraggable ? "opacity-0" : "opacity-100"
          }`}
        >
          <Suspense fallback={<div className="h-screen" />}>
            <MemoizedHomeInfo />
          </Suspense>
          <DragInstruction />
        </div>
      )}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="h-screen" />}>
          <SkyCanvas isDraggable={isDraggable} />
        </Suspense>
      </div>
    </section>
  );
});

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Suspense fallback={<div className="h-screen" />}>
        <HomeSection isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
      </Suspense>
      {!isLoaded && <Welcome />}
    </>
  );
};

export default Home;
