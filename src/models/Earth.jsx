import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  useAnimations,
} from "@react-three/drei";

const Earth = () => {
  const earth = useGLTF("./planet.glb");
  const { actions } = useAnimations(earth.animations, earth.scene);

  useEffect(() => {
    if (actions) {
      const action = actions[Object.keys(actions)[0]];
      action.reset().fadeIn(0.5).play();
    }
  }, [actions]);

  return (
    <primitive
      object={earth.scene}
      scale={2}
      position-y={0}
      rotation-y={0}
      position-x={3}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
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
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Earth />
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
