import React, { useState } from 'react';
import Search from './Search'; 

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "08dead54eae17a7e45d013b4a4358b59";
  
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

  const getWeatherIcon = (temperature) => {
    if (temperature > 25) {
      return "☀️"; 
    } else if (temperature < 8) {
      return "❄️"; 
    } else {
      return "🌥️"; 
    }
  };

  const handleSearchChange = (selectedCity) => {
    if(selectedCity) {
      fetchData(selectedCity.label.split(',')[0]); 
    }
  };

  return (
    <div>
      <Search onSearchChange={handleSearchChange} />
      {weatherData && (
        <div className='weatherData'>
            <p className='location'> {weatherData.name}</p>
          <p className='temperature'> {weatherData.main.temp} °C {getWeatherIcon(parseFloat(weatherData.main.temp))}</p>
          <ul className='list'>
          <p className='Wind'>Wind Speed: {weatherData.wind.speed} m/s</p>
          <p className='humidity'>Humidity: {weatherData.main.humidity}%</p>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;



  
  