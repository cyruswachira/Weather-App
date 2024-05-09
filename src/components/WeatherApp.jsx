import React, { useState } from 'react';
import './WeatherApp.css';

const WeatherApp = () => {
    const [query, setQuery] = useState('');
    const [weatherData, setWeatherData] = useState([]);

    const fetchWeather = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=08dead54eae17a7e45d013b4a4358b59&units=metric`);
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            const data = await response.json();
            setWeatherData(data.list.slice(0, 7));
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchWeather();
    };

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
                {weatherData.map((day, index) => (
                    <div className="mini-card" key={index}>
                        <div className="day">{new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</div>
                        <div className="temperature">{Math.round(day.main.temp)}°C</div>
                        <div className="humidity">Humidity: {day.main.humidity}%</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeatherApp;
