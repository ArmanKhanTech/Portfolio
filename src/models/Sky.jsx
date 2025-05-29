import React, { memo, useEffect, useRef, useState, useCallback } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame, Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

import { Welcome } from "../components";

const modelCache = {};

const Sky = memo(({ isDraggable, setLoadingProgress, setRendered }) => {
  const skyRef = useRef();
  const [previousMousePosition, setPreviousMousePosition] = useState(null);
  const [sky, setSky] = useState(null);

  const handleModelLoad = useCallback(
    (gltf) => {
      modelCache["sky"] = gltf;
      setSky(gltf);
      requestAnimationFrame(() => setRendered(true));
    },
    [setRendered],
  );

  const handleLoadProgress = useCallback(
    (xhr) => {
      let progress = xhr.total ? (xhr.loaded / xhr.total) * 100 : 50;
      setLoadingProgress(progress);
    },
    [setLoadingProgress],
  );

  const handleMouseMove = useCallback(
    (event) => {
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
    },
    [isDraggable, previousMousePosition],
  );

  useEffect(() => {
    if (isDraggable) {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    } else {
      setPreviousMousePosition(null);
    }
  }, [isDraggable, handleMouseMove]);

  const handleLoadError = useCallback(
    (_) => {
      setLoadingProgress(100); // Assume completed if error occurs
    },
    [setLoadingProgress],
  );

  useEffect(() => {
    if (modelCache["sky"]) {
      setSky(modelCache["sky"]);
      requestAnimationFrame(() => setRendered(true));
    } else {
      const loader = new GLTFLoader();
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("/draco/");
      loader.setDRACOLoader(dracoLoader);

      loader.load(
        "./sky-v1.glb",
        handleModelLoad,
        handleLoadProgress,
        handleLoadError,
      );
    }
  }, [handleModelLoad, handleLoadProgress, handleLoadError]);

  useFrame((_, delta) => {
    if (!isDraggable && skyRef.current) {
      skyRef.current.rotation.y += delta * 0.02;
    }
  });

  if (!sky) return null;

  return (
    <mesh ref={skyRef} scale={[40, 40, 40]}>
      <primitive object={sky.scene} />
    </mesh>
  );
});

const SkyCanvas = memo(({ isDraggable, setIsLoaded, showWelcome, setShowWelcome }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isRendered, setRendered] = useState(false);

  useEffect(() => {
    if (isRendered) {
      setShowWelcome(false);
      setIsLoaded(true);
    }
  }, [isRendered, setIsLoaded]);

  return (
    <>
      {showWelcome && loadingProgress < 100 && (
        <Welcome progress={loadingProgress} />
      )}
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
        <Sky
          isDraggable={isDraggable}
          setLoadingProgress={setLoadingProgress}
          setRendered={setRendered}
        />
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
