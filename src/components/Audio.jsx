import React, { useEffect, useRef, useState, useContext } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Html } from "@react-three/drei";
import { FaPlay, FaPause } from "react-icons/fa";

import piano from "../assets/audio/piano.mp3";

const AudioComponent = () => {
  const { camera } = useThree();
  const audioRef = useRef();

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const listener = new THREE.AudioListener();
    camera.add(listener);

    const sound = new THREE.Audio(listener);
    audioRef.current = sound;

    const audioLoader = new THREE.AudioLoader();
    audioLoader.load(piano, (buffer) => {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.5);
    });

    return () => {
      sound.stop();
      camera.remove(listener);
    };
  }, [camera]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Html>
      <div className="flex justify-end items-end hover:scale-110 transform duration-300">
        <button
          onClick={handlePlayPause}
          className="p-4 bg-gradient-to-br from-orange-400 to-red-600 text-white rounded-full"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </Html>
  );
};

const Audio = () => {
  return (
    <div className={`fixed bottom-0 right-0`}>
      <Canvas
        style={{ background: "transparent", width: "125px", height: "125px" }}
      >
        <AudioComponent />
      </Canvas>
    </div>
  );
};

export default Audio;
