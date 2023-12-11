import React from "react";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { HomeInfo } from "../components";
import { Navbar } from "../components";
import { Sky } from "../models";
import { Html } from "@react-three/drei";

const Home = () => {
  const isMobile = window.innerWidth < 640;

  const Loader = () => {
    return (
      <Html>
        
      </Html>
    );
  }

  return (
    <section className='w-screen h-screen'>
      <div className={`absolute right-0 left-0 z-10 ${isMobile ? 'top-0' : 'top-8'}`}>
        <HomeInfo />
      </div>
      <Navbar {
        ...{
          textColor: "text-white-100",
        }
      } />
      <Canvas
        camera={{ near: 0.1, far: 100 }}
        style={{pointerEvents: 'none'}}>
        <Suspense fallback={<Loader />}>
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
            intensity={1} />
          <Sky />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
