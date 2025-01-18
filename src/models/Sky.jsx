import React, { memo, useEffect, useRef, useState } from "react";
import { useProgress, OrbitControls } from "@react-three/drei";
import { useFrame, useLoader, Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Sky = memo(({ setLoadingProgress, isDraggable }) => {
  const { progress } = useProgress();
  const sky = useLoader(GLTFLoader, "./sky.glb");
  const skyRef = useRef();
  const [previousMousePosition, setPreviousMousePosition] = useState(null);

  useFrame((_, delta) => {
    if (!isDraggable && skyRef.current) {
      skyRef.current.rotation.y += delta * 0.02;
    }
  });

  const handleMouseMove = (event) => {
    if (isDraggable && skyRef.current) {
      const { clientX, clientY } = event;

      if (previousMousePosition) {
        const deltaX = clientX - previousMousePosition.x;
        const deltaY = clientY - previousMousePosition.y;

        skyRef.current.rotation.y += deltaX * 0.002;
        skyRef.current.rotation.x = Math.max(
          -Math.PI / 4,
          Math.min(Math.PI / 4, skyRef.current.rotation.x + deltaY * 0.002),
        );
      }

      setPreviousMousePosition({ x: clientX, y: clientY });
    }
  };

  useEffect(() => {
    if (isDraggable) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      setPreviousMousePosition(null);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDraggable, previousMousePosition]);

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

const SkyCanvas = ({ setLoadingProgress, isDraggable }) => {
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
      <Sky setLoadingProgress={setLoadingProgress} isDraggable={isDraggable} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
};

export default SkyCanvas;
