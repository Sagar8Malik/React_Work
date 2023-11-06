import React, { useState } from "react";
import "./ReleasedThisWeek.css";

const ReleasedThisWeek = () => {
  const [audio] = useState(new Audio(require("../assests/Arziyan.mp3")));
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="section">
      <h2>Released This Week</h2>
      <ul className="song-list">
        <li className="song-item">
          <img src="song-image.jpg" alt="Song" />
          <span>Song Name</span>
          <button onClick={handlePlayPause}>
            {isPlaying ? "Pause" : "Play"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ReleasedThisWeek;
