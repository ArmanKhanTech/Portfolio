import React, { useContext } from "react";

import { HomeContext } from '../context';
import { Canvas } from "@react-three/fiber";
import { HomeInfo, Navbar, Welcome } from "../components";
import { Sky } from "../models";

const Home = () => {
  const { 
    isMobile, 
    loadingProgress, 
    setLoadingProgress, 
    hasWelcomeShown } = useContext(HomeContext); 

  return (
    <section className='w-screen h-screen'>
      {!hasWelcomeShown && loadingProgress < 100 ? <Welcome /> : null}
      <div className={`absolute right-0 left-0 z-10 ${isMobile ? 'top-0' : 'top-8'}`}>
        <HomeInfo />
      </div>
      <Navbar {
        ...{
          textColor: "text-white-100",
        }
      } />
      <Canvas
        className='fixed inset-0 z-0'
        camera={{ near: 0.1, far: 100 }}
        style={{pointerEvents: 'none'}}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2} />
          <hemisphereLight
            skyColor='#000000'
            groundColor='#000000'
            intensity={2} />
          <Sky setLoadingProgress={setLoadingProgress} className='fixed' />
      </Canvas>
    </section>
  );
};

export default Home;
