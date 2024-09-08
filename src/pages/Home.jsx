import React, { useContext } from "react";

import { HomeContext } from "../context";
import { HomeInfo, Welcome } from "../components";
import SkyCanvas from "../models/Sky";

const Home = () => {
  const { loadingProgress, setLoadingProgress, hasWelcomeShown } =
    useContext(HomeContext);

  return (
    <section className="fixed inset-0 z-0">
      {!hasWelcomeShown && loadingProgress < 100 && <Welcome />}
      <div className="relative w-full h-full overflow-y-auto">
        <HomeInfo />
      </div>
      <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-slate-900 h-full w-full to-[#1B1212]">
        <SkyCanvas setLoadingProgress={setLoadingProgress} />
      </div>
    </section>
  );
};

export default Home;
