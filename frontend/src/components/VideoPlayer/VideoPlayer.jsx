import React, { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";

function VideoPlayer() {
  const location = useLocation();
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const player = playerRef.current;
    if (player) {
      setIsPlaying(!isPlaying);
      player.play ? player.pause : player.play;
    }
  };

  return (
    <div className="relative w-full my-8 h-full">
      <div className="">
        <ReactPlayer
          ref={playerRef}
          style={{
            boxShadow: "shadow-2xl",
            border: "1px solide white",
            position: "absolute",
            top: "0",
            left: "0",
            borderRadius: " 15px",
          }}
          url="/Video/media1.mp4"
          width="80%"
          height="100%"
          playing={isPlaying}
          controls={true}
        />
      </div>
      <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2">
        <button
          onClick={handlePlayPause}
          className="bg-blue-600 w-full p-3 rounded-md cursor-pointer"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        {/* Autres contrôles (volume, plein écran, etc.) */}
      </div>
      <div>
        <p className="">{location.state.title}</p>
      </div>
    </div>
  );
}

export default VideoPlayer;
