import React, { useContext } from "react";

import { HomeContext } from "../context";
import { HomeInfo, Welcome } from "../components";
import SkyCanvas from "../models/Sky";

const Home = () => {
  const { loadingProgress, setLoadingProgress, hasWelcomeShown } =
    useContext(HomeContext);

  return (
    <section className="min-h-screen relative flex items-center justify-center">
      {!hasWelcomeShown && loadingProgress < 100 ? <Welcome /> : null}
      <div className="max-w-5xl mx-5 lg:mx-auto lg:px-12 py-[126px] relative inset-0 z-1 overflow-y-auto">
        <HomeInfo />
      </div>
      <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-slate-900 to-[#1B1212]">
        <SkyCanvas setLoadingProgress={setLoadingProgress} />
      </div>
    </section>
  );
};

export default Home;