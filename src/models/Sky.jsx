import React, { memo, useEffect, useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame, Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const LoadingProgress = ({ progress }) => {
  return (
    <div className="fixed inset-0 h-screen w-screen backdrop-blur-xl z-[9999] flex items-center justify-center">
      <p className="text-4xl font-bold orange-gradient-text">
        {Math.round(progress)}%
      </p>
    </div>
  );
};

const Sky = memo(({ isDraggable, setLoadingProgress }) => {
  const skyRef = useRef();
  const [previousMousePosition, setPreviousMousePosition] = useState(null);

  const loadingManager = new THREE.LoadingManager();
  const [sky, setSky] = useState(null);

  useEffect(() => {
    const loader = new GLTFLoader(loadingManager);
    loader.load(
      './sky.glb',
      (gltf) => {
        setSky(gltf);
      },
      (xhr) => {
        const progress = (xhr.loaded / xhr.total) * 100;
        setLoadingProgress(progress);
      },
      (error) => {
        console.error("An error occurred while loading the model", error);
      }
    );
  }, [setLoadingProgress]);

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

  return sky ? (
    <mesh ref={skyRef} scale={[40, 40, 40]}>
      <primitive object={sky.scene} />
    </mesh>
  ) : null;
});

const SkyCanvas = ({ isDraggable, onLoad }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    if (loadingProgress === 100) {
      onLoad(true);
    }
  }, [loadingProgress, onLoad]);

  return (
    <>
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
      {loadingProgress < 100 && <LoadingProgress progress={loadingProgress} />}
    </>
  );
};

export default SkyCanvas;
