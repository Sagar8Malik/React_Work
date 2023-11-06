import React, { useState, useEffect } from "react";

const GenreTabs = ({ apiKey, onGenreSelect }) => {
  const [genres, setGenres] = useState([]);
  const [activeGenre, setActiveGenre] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setGenres(data.genres);
        setActiveGenre(data.genres[0]?.id);
      })
      .catch((error) => console.error("Error fetching genres:", error));
  }, [apiKey]);

  useEffect(() => {
    if (activeGenre) {
      onGenreSelect(activeGenre);
    }
  }, [activeGenre, onGenreSelect]);

  return (
    <div className="genre-tabs-container">
      <h2>Movie Genres</h2>
      <div className="genre-tabs">
        {genres.map((genre) => (
          <button
            key={genre.id}
            className={`genre-tab ${activeGenre === genre.id ? "active" : ""}`}
            onClick={() => setActiveGenre(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreTabs;
