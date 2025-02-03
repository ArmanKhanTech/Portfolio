import React, { Suspense, useState, useCallback, memo } from "react";

const SkyCanvas = React.lazy(() => import("../models/Sky"));
const HomeInfo = React.lazy(() => import("../components/HomeInfo"));

const MemoizedHomeInfo = memo(() => <HomeInfo />);

const DragInstruction = memo(() => (
  <p className="absolute bottom-4 right-0 left-0 text-2xl text-red-600 font-semibold text-center hidden lg:block">
    Hold & drag to see the magic!
  </p>
));

const HomeSection = memo(() => {
  const [isDraggable, setIsDraggable] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    setIsDraggable(true);
  }, []);

  const handleMouseUpOrLeave = useCallback(() => {
    setIsDraggable(false);
  }, []);

  return (
    <section
      className="relative min-h-screen w-full bg-gradient-to-r from-[#1b1212] to-black"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
    >
      <div
        className={`relative w-full h-full overflow-y-auto pointer-events-auto z-10 transition-opacity duration-300 ${isDraggable ? "opacity-0" : "opacity-100"
          }`}
      >
        <Suspense fallback={<div className="h-screen" />}>
          <MemoizedHomeInfo />
        </Suspense>
        {loaded && <DragInstruction />}
      </div>
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="h-screen" />}>
          <SkyCanvas isDraggable={isDraggable} onLoad={setLoaded} />
        </Suspense>
      </div>
    </section>
  );
});

const Home = () => {
  return (
    <Suspense fallback={<div className="h-screen" />}>
      <HomeSection />
    </Suspense>
  );
};

export default Home;
