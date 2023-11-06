import React, { useState, useEffect } from "react";
import "./BrowseGenres.css";
import { getBrowseGenres } from "../api/api";

const BrowseGenres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getBrowseGenres()
      .then((genres) => setGenres(genres))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="section">
      <h2>Browse Genres</h2>
      <ul className="genre-list">
        {genres.map((genre) => (
          <li className="genre-item" key={genre.id}>
            {genre.icons.length > 0 && (
              <img src={genre.icons[0].url} alt={genre.name} />
            )}
            <span>{genre.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseGenres;
