import React, { memo, useEffect, useRef } from "react";
import { useProgress, OrbitControls } from "@react-three/drei";
import { useFrame, useLoader, Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Sky = memo(({ setLoadingProgress }) => {
  const { progress } = useProgress();
  const sky = useLoader(GLTFLoader, "./sky.glb");
  const skyRef = useRef();

  useFrame((state, delta) => {
    if (skyRef.current) {
      skyRef.current.rotation.y += delta / 50;
    }
  });

  useEffect(() => {
    const handler = setTimeout(() => setLoadingProgress(progress), 100);
    return () => clearTimeout(handler);
  }, [progress, setLoadingProgress]);

  return (
    <mesh ref={skyRef} scale={[40, 40, 40]}>
      <primitive object={sky.scene} />
    </mesh>
  );
});

const SkyCanvas = ({ setLoadingProgress }) => {
  return (
    <Canvas camera={{ near: 0.1, far: 100 }} style={{ position: "fixed" }}>
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
      <Sky setLoadingProgress={setLoadingProgress} />
      <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} />
    </Canvas>
  );
};

export default SkyCanvas;
