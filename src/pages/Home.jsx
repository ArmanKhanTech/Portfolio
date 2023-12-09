import React from "react";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { HomeInfo, Loader } from "../components";
import { Navbar } from "../components";
import { Sky } from "../models";

const Home = () => {
  const isMobile = window.innerWidth < 640;

  return (
    <section className='w-full h-screen fixed'>
      <div className={`absolute right-0 left-0 z-10 top-14 ${isMobile ? 'top-4' : 'top-8'}`}>
        <HomeInfo style={{ zIndex: 1 }}/>
      </div>
      <Navbar {
        ...{
          textColor: "text-white-100",
        }
      } />
      <Canvas
        camera={{ near: 0.1, far: 1000 }}
        style={{pointerEvents: 'none'}}>
        <Suspense fallback={<Loader wholePage={true} />}>
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
