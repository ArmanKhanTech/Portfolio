import React, { memo, useEffect, useRef } from "react";

import { useProgress } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

let frameCount = 0;

export const Sky = memo(({ setLoadingProgress }) => {
  const { progress } = useProgress();
  const sky = useLoader(GLTFLoader, './sky.glb');
  const skyRef = useRef();

  useFrame((_, delta) => {
    frameCount++;
    if (frameCount % 1.5 === 0) { 
      skyRef.current.rotation.y += 0.05 * delta;
    }
  });

  useEffect(() => {
    setLoadingProgress(progress);
  }, [progress, setLoadingProgress]);

  return (
    <mesh
      ref={skyRef} 
      scale={[50, 50, 50]}>
      <primitive object={sky.scene} />
    </mesh>
  );
});

export default Sky;