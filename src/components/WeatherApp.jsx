import React, { useState, useEffect } from 'react';
import './WeatherApp.css';

const WeatherApp = () => {
  const [query, setQuery] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [currentDayData, setCurrentDayData] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=08dead54eae17a7e45d013b4a4358b59&units=metric`);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      const filteredData = data.list.reduce((acc, day) => {
        const dayOfWeek = new Date(day.dt * 10000).toLocaleDateString('en-US', { weekday: 'long' });
        acc[dayOfWeek] = day;
        return acc;
      }, {});
      setWeatherData(filteredData);
      setCurrentDayData(filteredData[new Date().toLocaleDateString('en-US', { weekday: 'long' })]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div className="weather-app">
      <h1>Weather Forecast</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter location"
        />
        <button type="submit">Search</button>
      </form>
      <div className="mini-cards-container">
        {daysOfWeek.map((day, index) => (
          <div className="mini-card" key={index}>
            <div className="day">{day}</div>
            {weatherData[day] && (
              <>
                <div className="temperature">{Math.round(weatherData[day].main.temp)}°C</div>
                <div className="humidity">Humidity: {weatherData[day].main.humidity}%</div>
                {currentDayData && currentDayData.dt_txt === weatherData[day].dt_txt && (
                  <div className="current-day">
                    <h2>Current Day</h2>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherApp;