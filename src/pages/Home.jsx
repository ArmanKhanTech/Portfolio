import React, { useContext } from "react";

import { HomeContext } from "../context";
import { HomeInfo, Welcome } from "../components";
import SkyCanvas from "../models/Sky";

const Home = () => {
  const { loadingProgress, setLoadingProgress, hasWelcomeShown } =
    useContext(HomeContext);

  return (
    <section className="bg-gradient-to-r from-slate-900 to-[#1B1212] min-h-screen relative">
      {!hasWelcomeShown && loadingProgress < 100 ? <Welcome /> : null}
      <div className="absolute inset-0 z-10">
        <HomeInfo />
      </div>
      <SkyCanvas setLoadingProgress={setLoadingProgress} />
    </section>
  );
};

export default Home;
