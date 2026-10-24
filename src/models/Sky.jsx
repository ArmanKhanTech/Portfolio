import React, { memo, useEffect, useRef, useState } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

import { Welcome } from "../components";

const SKY_MODEL = "/models/sky.glb";

const modelCache = {};

const Sky = memo(({ isDraggable, setLoadingProgress, setRendered }) => {
  const skyRef = useRef();
  const previousMousePosition = useRef(null);
  const [sky, setSky] = useState(() => modelCache.sky ?? null);

  // Rotate with the mouse while dragging. Positions live in a ref so a drag
  // doesn't re-render React on every mouse move.
  useEffect(() => {
    if (!isDraggable) {
      previousMousePosition.current = null;
      return;
    }

    const handleMouseMove = ({ clientX, clientY }) => {
      const previous = previousMousePosition.current;
      if (previous && skyRef.current) {
        const deltaX = clientX - previous.x;
        const deltaY = clientY - previous.y;

        skyRef.current.rotation.y += deltaX * 0.002;
        skyRef.current.rotation.x = Math.max(
          -Math.PI / 4,
          Math.min(Math.PI / 4, skyRef.current.rotation.x + deltaY * 0.002),
        );
      }
      previousMousePosition.current = { x: clientX, y: clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isDraggable]);

  useEffect(() => {
    if (modelCache.sky) {
      requestAnimationFrame(() => setRendered(true));
      return;
    }

    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/vendor/draco/");
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      SKY_MODEL,
      (gltf) => {
        modelCache.sky = gltf;
        setSky(gltf);
        requestAnimationFrame(() => setRendered(true));
      },
      (xhr) => {
        setLoadingProgress(xhr.total ? (xhr.loaded / xhr.total) * 100 : 50);
      },
      () => {
        // Don't leave the visitor stuck on the loading screen.
        setLoadingProgress(100);
        setRendered(true);
      },
    );

    return () => dracoLoader.dispose();
  }, [setLoadingProgress, setRendered]);

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

const SkyCanvas = memo(
  ({ isDraggable, setIsLoaded, showWelcome, setShowWelcome }) => {
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isRendered, setRendered] = useState(false);

    useEffect(() => {
      if (isRendered) {
        setShowWelcome(false);
        setIsLoaded(true);
      }
    }, [isRendered, setIsLoaded, setShowWelcome]);

    return (
      <>
        {showWelcome && loadingProgress < 100 && (
          <Welcome progress={loadingProgress} />
        )}
        <Canvas
          camera={{ near: 0.1, far: 100 }}
          dpr={[1, 1.5]}
          style={{ position: "fixed" }}
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
          <Sky
            isDraggable={isDraggable}
            setLoadingProgress={setLoadingProgress}
            setRendered={setRendered}
          />
        </Canvas>
      </>
    );
  },
);

export default SkyCanvas;
