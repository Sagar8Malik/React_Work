import React, { useState, useEffect } from "react";

const WeatherForecast = ({ apiKey, city }) => {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        setError(null);

        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "200") {
          const groupedData = groupForecastByDay(data.list);
          const selectedForecastData = selectOneForecastPerDay(groupedData);
          setForecastData(selectedForecastData);
        } else {
          setError("City not found");
          setForecastData([]);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError("Error fetching weather data");
        setForecastData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [apiKey, city]);

  const groupForecastByDay = (forecastList) => {
    const groupedData = {};

    forecastList.forEach((forecast) => {
      const date = forecast.dt_txt.split(" ")[0];

      if (!groupedData[date]) {
        groupedData[date] = [];
      }

      groupedData[date].push(forecast);
    });

    return groupedData;
  };

  const selectOneForecastPerDay = (groupedData) => {
    const selectedData = [];

    for (const date in groupedData) {
      const forecastsForDay = groupedData[date];
      const selectedForecast = forecastsForDay[0];

      selectedData.push(selectedForecast);
    }

    return selectedData;
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="weather-forecast">
      <h2>Weather Forecast for {city}</h2>
      {forecastData.map((forecast, index) => (
        <div key={index}>
          <p>Date and Time: {forecast.dt_txt}</p>
          <p>Temperature: {forecast.main.temp}°C</p>
          <img
            src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
            alt={forecast.weather[0].description}
          />
          <p>Weather: {forecast.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;
