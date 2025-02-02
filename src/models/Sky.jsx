import React, { memo, useEffect, useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame, Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const LoadingProgress = ({ progress }) => {
  return (
    <div className="fixed bottom-0 left-1/2 transform orange-gradient-text -translate-x-1/2 text-white p-4">
      <p>Loading: {Math.round(progress)}%</p>
      <div className="w-48 h-2 bg-transparent border rounded-full overflow-hidden">
        <div
          className="h-full bg-orange-600 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
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

const SkyCanvas = ({ isDraggable }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);

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
