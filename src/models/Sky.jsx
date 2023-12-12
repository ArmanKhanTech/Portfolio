import React from "react";

import { useEffect, useRef } from "react";
import { useProgress } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function Sky({ setLoadingProgress }) {
  const { progress } = useProgress();
  const sky = useLoader(GLTFLoader, './sky/scene.gltf');
  const skyRef = useRef();

  useFrame((_, delta) => {
    skyRef.current.rotation.y += 0.05 * delta;
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
}

export default Sky;