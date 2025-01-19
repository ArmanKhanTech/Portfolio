import React, { useContext, useState } from "react";

import { HomeContext } from "../context";
import { HomeInfo, Welcome } from "../components";
import SkyCanvas from "../models/Sky";

const Home = () => {
  const { loadingProgress, setLoadingProgress, hasWelcomeShown } =
    useContext(HomeContext);
  const [isDraggable, setIsDraggable] = useState(false);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDraggable(true);
  };

  const handleMouseUpOrLeave = () => {
    setIsDraggable(false);
  };

  return (
    <section
      className="fixed inset-0 z-0"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
    >
      {!hasWelcomeShown && loadingProgress < 100 && (
        <Welcome
          loadingProgress={loadingProgress}
        />
      )}
      <div
        className={`relative w-full h-full overflow-y-auto pointer-events-auto z-10 transition-opacity duration-300 ${isDraggable ? 'opacity-0' : 'opacity-100'
          }`}
      >
        <HomeInfo />
        <p className="absolute bottom-4 right-0 left-0 text-2xl text-red-600 font-semibold text-center hidden lg:block">
          Hold & drag to see the magic!
        </p>
      </div>
      <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-[#1b1212] to-black h-full w-full">
        <SkyCanvas
          setLoadingProgress={setLoadingProgress}
          isDraggable={isDraggable}
        />
      </div>
    </section>
  );
};

export default Home;
