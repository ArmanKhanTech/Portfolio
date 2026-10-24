import React, { Suspense, useCallback, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  useAnimations,
} from "@react-three/drei";

const Earth = ({ onReady }) => {
  const { scene, animations } = useGLTF("/models/planet.glb", "/vendor/draco/");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions) {
      const action = actions[Object.keys(actions)[0]];
      action.play();
    }
  }, [actions]);

  // Runs once the model has loaded and mounted; wait a frame so it is drawn.
  useEffect(() => {
    const frame = requestAnimationFrame(onReady);
    return () => cancelAnimationFrame(frame);
  }, [onReady]);

  return <primitive object={scene} scale={2} position-y={0} position-x={3} />;
};

// Stays transparent until the planet has loaded, then fades in.
const EarthCanvas = () => {
  const [isReady, setIsReady] = useState(false);
  const handleReady = useCallback(() => setIsReady(true), []);

  return (
    <div
      className={`w-full h-full fixed inset-0 ${isReady ? "scene-fade-in" : "opacity-0"}`}
    >
      <Canvas
        dpr={[1, 1.5]}
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
        {/* Catch the model load here; otherwise the Canvas suspends the page
            around it and hides the whole scene area while the planet loads. */}
        <Suspense fallback={null}>
          <Earth onReady={handleReady} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
