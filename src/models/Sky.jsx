import React, { memo, useEffect, useRef } from "react";
import { useProgress } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const Sky = memo(({ setLoadingProgress }) => {
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

export default Sky;
