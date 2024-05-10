// App.jsx
// import React, { useStateContext }  from "react";
import "./App.css";
import Header from "./components/Header";
import WeatherMap from "./components/WeatherMap";
import Backgroundd from "./components/Backgroundd";
function App() {
  // const { weather } = useStateContext(); // Assuming weather is a value provided by your context
  // console.log(weather);
=
import CurrentWeather from "./components/CurrentWeather";
import WeatherApp from "./components/WeatherApp";

function App() {

  return (
    <>
      <div className="Background">
      </div>
      <div className="weather-app">
        <Header />
        <Backgroundd />
        <WeatherMap />
        <CurrentWeather/>
        <WeatherApp/>
        <WeatherMap/>

      </div>
    </>
  );
}

export default App;