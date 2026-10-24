import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

import piano from "../assets/audio/piano.mp3";

// A plain <audio> element: nothing is downloaded until the visitor presses play.
const Audio = ({ hidden }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = 0.5;
  }, []);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className={`fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[10] ${hidden ? "hidden" : ""}`}
    >
      <audio ref={audioRef} src={piano} loop preload="none" />
      <button
        type="button"
        onClick={handlePlayPause}
        aria-label={
          isPlaying ? "Pause background music" : "Play background music"
        }
        aria-pressed={isPlaying}
        className="p-4 bg-gradient-to-br from-orange-400 to-red-600 text-white rounded-full lg:hover:scale-110 transition-transform duration-300"
      >
        {isPlaying ? (
          <FaPause aria-hidden="true" />
        ) : (
          <FaPlay aria-hidden="true" />
        )}
      </button>
    </div>
  );
};

export default Audio;
