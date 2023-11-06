import React, { useState, useEffect } from "react";
import "./FeaturedPlaylists.css";
import { getFeaturedPlaylists } from "../api/api";

const FeaturedPlaylists = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    getFeaturedPlaylists()
      .then((playlists) => setPlaylists(playlists))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="section">
      <h2>Featured Playlists</h2>
      <ul className="playlist-list">
        {playlists.map((playlist) => (
          <li className="playlist-item" key={playlist.id}>
            <img src={playlist.images[0].url} alt={playlist.name} />
            <span>{playlist.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedPlaylists;
