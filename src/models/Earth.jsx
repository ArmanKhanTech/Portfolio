import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  useAnimations,
} from "@react-three/drei";

const Earth = () => {
  const { scene, animations } = useGLTF("./planet.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions) {
      const action = actions[Object.keys(actions)[0]];
      action.play();
    }
  }, [actions]);

  return <primitive object={scene} scale={2} position-y={0} position-x={3} />;
};

const EarthCanvas = () => {
  return (
    <div className="w-full h-full fixed inset-0">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 50,
          near: 0.1,
          far: 100,
        }}
      >
        <directionalLight position={[1, 1, 1]} intensity={3} />
        <ambientLight intensity={1} />
        <pointLight position={[10, 5, 10]} intensity={3} />
        <spotLight
          position={[0, 50, 10]}
          angle={0.15}
          penumbra={1}
          intensity={3}
        />
        <hemisphereLight
          skyColor="#ffffff"
          groundColor="#ffffff"
          intensity={1.5}
        />
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={1.0}
          enableZoom={false}
        />
        <Earth />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
