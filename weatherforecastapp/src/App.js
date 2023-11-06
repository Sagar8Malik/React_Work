import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherForecast from "./components/WeatherForecast";
import "./App.css";

const apiKey = "ec2893d88f3ace304354f96e56ec8cd6";

function App() {
  const [selectedCity, setSelectedCity] = useState("");

  const handleSearch = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="App">
      <h1>5-Day Weather Forecast App</h1>
      <SearchBar onSearch={handleSearch} />
      {selectedCity && <WeatherForecast apiKey={apiKey} city={selectedCity} />}
    </div>
  );
}

export default App;
