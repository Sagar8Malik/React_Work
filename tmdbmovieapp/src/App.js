import React, { useState, useEffect } from "react";
import "./App.css";
import GenreTabs from "./components/Genretabs";
import SearchBar from "./components/Searchbar";
import Pagination from "./components/Pagination";
import useDebounce from "./components/useDebounce";

const apiKey = "7413a55f35038d6bb6b975b5d6517088";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    if (selectedGenre) {
      fetchMoviesByGenre(selectedGenre, currentPage);
    }
  }, [selectedGenre, currentPage]);

  useEffect(() => {
    if (searchQuery) {
      handleSearch();
    }
  }, [searchQuery]);

  const fetchMoviesByGenre = (genreId, page) => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=${genreId}&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.results);
        setTotalPages(data.total_pages);
      })
      .catch((error) => console.error("Error fetching genre movies:", error));
  };

  const handleSearch = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=${currentPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.results);
        setTotalPages(data.total_pages);
      })
      .catch((error) => console.error("Error searching movies:", error));
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="App">
      <header>
        <h1>MoviesInfo</h1>
      </header>

      <div className="section">
        <GenreTabs apiKey={apiKey} onGenreSelect={setSelectedGenre} />
      </div>

      <div className="section">
        <div className="search-bar">
          {/* <input
            type="text"
            placeholder="Enter Keywords to search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button onClick={handleSearch}>Search</button> */}
          <SearchBar onSearch={setSearchQuery} />
        </div>
      </div>

      <div className="section">
        <div className="search-results">
          <h2>Search Results</h2>

          <div className="search-results_container">
            {searchResults?.map((movie) => (
              <div key={movie.id} className="card movie-card">
                {/* <MovieDetailsOverlay movie={movie} /> */}

                <img
                  src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                  alt={`${movie.title} Poster`}
                />
                <div className="card__info">
                  <p>{movie?.overview}</p>
                  <br />
                  <p className="release-rating">
                    Release Date: {movie.release_date} | Rating:{" "}
                    {movie.vote_average}
                  </p>
                </div>
                <div className="card-details">
                  <span className="card-title">{movie.title}</span>
                </div>
              </div>
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
