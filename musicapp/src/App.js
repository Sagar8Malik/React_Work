import React from "react";
import "./App.css";
import ReleasedThisWeek from "./components/ReleasedThisWeek";
import FeaturedPlaylists from "./components/FeaturedPlaylists";
import BrowseGenres from "./components/BrowseGenres";

function App() {
  return (
    <div className="App">
      <h1 className="title">Spotify App</h1>
      <ReleasedThisWeek />
      <FeaturedPlaylists />
      <BrowseGenres />
    </div>
  );
}

export default App;
