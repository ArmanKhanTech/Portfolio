import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";

export function Sky() {
  const sky = useGLTF("./sky/scene.gltf");
  const skyRef = useRef();

  useFrame((_, delta) => {
    skyRef.current.rotation.y += 0.05 * delta;
  });

  return (
    <mesh 
      ref={skyRef} 
      scale={[50, 50, 50]} >
      <primitive object={sky.scene} />
    </mesh>
  );
}

export default Sky;