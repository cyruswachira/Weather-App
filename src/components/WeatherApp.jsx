import React, { useState, useEffect } from 'react';

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

  const fetchWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}.png`;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div className="weather-app">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter location"
          className="w-full max-w-sm px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        />
        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out">Search</button>
      </form>

      <div className="mini-cards-container grid grid-cols-4 gap-2">
        {daysOfWeek.map((day, index) => (
          <div className="mini-card" key={index}>
            <div className="day">{day}</div>
            {weatherData[day] && (
              <>
                <div className="temperature">{Math.round(weatherData[day].main.temp)}°C</div>
                <div className="humidity">Humidity: {weatherData[day].main.humidity}%</div>
                <img src={fetchWeatherIcon(weatherData[day].weather[0].icon)} alt="Weather Icon" className="weather-icon" />
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
