import React, { memo, useEffect, useRef, useState } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

const SKY_MODEL = "/models/sky.glb";

const modelCache = {};

const Sky = memo(({ isDraggable, onReady }) => {
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
      requestAnimationFrame(onReady);
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
        // Wait a frame so the first render has happened before fading in.
        requestAnimationFrame(onReady);
      },
      undefined,
      () => {
        // The page content is already visible; keep the gradient backdrop.
      },
    );

    return () => dracoLoader.dispose();
  }, [onReady]);

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

// The scene stays transparent until the model is ready, then fades in behind
// content that is already on screen.
const SkyCanvas = memo(({ isDraggable, isReady, onReady }) => {
  return (
    <div className={`fixed inset-0 ${isReady ? "scene-fade-in" : "opacity-0"}`}>
      <Canvas camera={{ near: 0.1, far: 100 }} dpr={[1, 1.5]}>
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
        <Sky isDraggable={isDraggable} onReady={onReady} />
      </Canvas>
    </div>
  );
});

export default SkyCanvas;
