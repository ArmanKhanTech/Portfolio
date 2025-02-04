import React, { memo, useEffect, useRef, useState, useCallback } from "react";

import { OrbitControls } from "@react-three/drei";
import { useFrame, Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three';

import { LoadingProgress } from "../components";

const Sky = memo(({ isDraggable, setLoadingProgress }) => {
  const skyRef = useRef();
  const [previousMousePosition, setPreviousMousePosition] = useState(null);
  const [sky, setSky] = useState(null);

  const handleModelLoad = useCallback((gltf) => {
    setSky(gltf);
    setLoadingProgress(100);
  }, [setLoadingProgress]);

  const handleLoadProgress = useCallback((xhr) => {
    const progress = (xhr.loaded / xhr.total) * 100;
    setLoadingProgress(progress);
  }, [setLoadingProgress]);

  const handleLoadError = useCallback((error) => {
    console.error("An error occurred while loading the model", error);
    setLoadingProgress(0);
  }, [setLoadingProgress]);

  useEffect(() => {
    const loadingManager = new THREE.LoadingManager();
    const loader = new GLTFLoader(loadingManager);

    loader.load(
      './sky.glb',
      handleModelLoad,
      handleLoadProgress,
      handleLoadError
    );
  }, [handleModelLoad, handleLoadProgress, handleLoadError]);

  useFrame((_, delta) => {
    if (!isDraggable && skyRef.current) {
      skyRef.current.rotation.y += delta * 0.02;
    }
  });

  const handleMouseMove = useCallback((event) => {
    if (isDraggable && skyRef.current) {
      const { clientX, clientY } = event;

      if (previousMousePosition) {
        const deltaX = clientX - previousMousePosition.x;
        const deltaY = clientY - previousMousePosition.y;

        skyRef.current.rotation.y += deltaX * 0.002;
        skyRef.current.rotation.x = Math.max(
          -Math.PI / 4,
          Math.min(Math.PI / 4, skyRef.current.rotation.x + deltaY * 0.002)
        );
      }

      setPreviousMousePosition({ x: clientX, y: clientY });
    }
  }, [isDraggable, previousMousePosition]);

  useEffect(() => {
    if (isDraggable) {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    } else {
      setPreviousMousePosition(null);
    }
  }, [isDraggable, handleMouseMove]);

  if (!sky) return null;

  return (
    <mesh ref={skyRef} scale={[40, 40, 40]}>
      <primitive object={sky.scene} />
    </mesh>
  );
});

const SkyCanvas = memo(({ isDraggable, onLoad }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    if (loadingProgress === 100) {
      onLoad(true);
    }
  }, [loadingProgress, onLoad]);

  return (
    <>
      {loadingProgress < 100 && <LoadingProgress progress={loadingProgress} />}
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
        <Sky isDraggable={isDraggable} setLoadingProgress={setLoadingProgress} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </>
  );
});

export default SkyCanvas;