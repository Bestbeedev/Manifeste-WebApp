import React, {  useRef, useState } from "react";
import ReactPlayer from "react-player";

function VideoPlayer() {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    console.log("playing");
    const player = playerRef.current;
    if (player) {
      player.playing ? player.pause() : player.play();
      setIsPlaying(!isPlaying);
    }
  };


  return (
    <div className="relative w-full my-8 border h-[30rem]">
      <ReactPlayer
        ref={playerRef}
        className="absolute rounded-xl top-0 left-0 h-full w-full"
        url="/Video/media1.mp4"
        width="100%"
        height="100%"
        playing={isPlaying}
        controls={false}
      />
      <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2">
        <button
          onClick={handlePlayPause}
          className="bg-blue-600 rounded-md cursor-pointer"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        {/* Autres contrôles (volume, plein écran, etc.) */}
      </div>
    </div>
  );
}

export default VideoPlayer;
