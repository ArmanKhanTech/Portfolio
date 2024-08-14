import React, { useContext } from "react";
import { Canvas } from "@react-three/fiber";

import { HomeContext } from "../context";
import { HomeInfo, Welcome } from "../components";
import { Sky } from "../models";

const Home = () => {
  const { loadingProgress, setLoadingProgress, hasWelcomeShown } =
    useContext(HomeContext);

  return (
    <section className="bg-gradient-to-r from-slate-900 to-[#1B1212] min-h-screen relative">
      {!hasWelcomeShown && loadingProgress < 100 ? <Welcome /> : null}
      <div className="absolute inset-0 z-10">
        <HomeInfo />
      </div>
      <Canvas
        camera={{ near: 0.1, far: 100 }}
        style={{ pointerEvents: "none", position: "fixed" }}
      >
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight
          position={[0, 50, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
        />
        <hemisphereLight
          skyColor="#000000"
          groundColor="#000000"
          intensity={2}
        />
        <Sky setLoadingProgress={setLoadingProgress} />
      </Canvas>
    </section>
  );
};

export default Home;
