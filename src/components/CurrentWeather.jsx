import React, { useState, useEffect } from 'react';
import Search from './Search';

function CurrentWeather() {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "08dead54eae17a7e45d013b4a4358b59";
 
  // Nairobi is displayed as the default before the user searches for any other city
  useEffect(() => {
    fetchData('Nairobi');
  }, []); 

  const fetchData = (selectedCity) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${API_KEY}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const celsiusTemp = data.main.temp - 273.15;
        data.main.temp = celsiusTemp.toFixed(2);
        setWeatherData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  const getWeatherIcon = (temperature, weatherCondition) => {
    if (weatherCondition === 'Rain') {
      return "🌧️"; //Rain icon - Displayed only if it is raining
    } else if (temperature > 25) {
      return "☀️"; // Sunny icon - Displayed if the temperature is above 25 degrees
    } else if (temperature < 2) {
      return "❄️"; // Snow icon - Displayed if the temperature is below 2 degrees
    } else {
      return "🌥️"; // Default icon indicating calm weather
    }
  };

  const calculateHeatIndex = (temperature, humidity) => {
    return (temperature + humidity) / 2;
  };

  const handleSearchChange = (selectedCity) => {
    if (selectedCity) {
      fetchData(selectedCity.label.split(',')[0]);
    }
  };

  return (
    <div>
      <Search onSearchChange={handleSearchChange} />
      {weatherData && (
        <div className="weatherData">
          <p className="location text-3xl"> {weatherData.name}</p>
          <p className="temperature">
            {" "}
            {weatherData.main.temp} °C{" "}
            {getWeatherIcon(parseFloat(weatherData.main.temp), weatherData.weather[0].main)}
          </p>
          <p className="date text-2xl">
            {" "}
            Date: {new Date().toLocaleDateString()}
          </p>
          <p className="time text-2xl">
            {" "}
            Time: {new Date().toLocaleTimeString()}
          </p>
          <ul className="list">
            <div className="flex-1 text-center p-2 font-bold bg-blue-400 mr-1 shadow rounded-lg">
              <li className="Wind">Wind Speed: {weatherData.wind.speed} m/s</li>
            </div>
            <div className="flex-1 text-center p-2 font-bold rounded-lg bg-green-400">
              <li className="pressure">
                Pressure: {weatherData.main.pressure} hPa
              </li>
            </div>
            <div className='flex-1 text-center p-0 font-bold bg-red-400 rounded-lg mt-2'>
              <li className="humidity">Humidity: {weatherData.main.humidity}%</li>
            </div>
          </ul>
          <p className="heatIndex text-2xl">
            {" "}
            Heat Index:{" "}
            {calculateHeatIndex(
              weatherData.main.temp,
              weatherData.main.humidity
            )}{" "}
            °C
          </p>
        </div>
      )}
    </div>
  );
}

export default CurrentWeather;





  
  