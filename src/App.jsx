
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import CurrentWeather from './components/CurrentWeather';
import WeatherMap from './components/WeatherMap';

function App() {
  return (
    <Router>
      <div className="weather-app">
        <Header />
        <Routes>
          <Route path="/" element={<CurrentWeather />} />
          <Route path="/weather-map" element={<WeatherMap />} />
        </Routes>

// App.jsx
// import React, { useStateContext }  from "react";
import "./App.css";
import Header from "./components/Header";
import WeatherApp from "./components/WeatherApp";
import WeatherMap from "./components/WeatherMap";
// import Backgroundd from "./components/Backgroundd";
import BackGround from "./components/BackGround"


// const { weather } = useStateContext(); // Assuming weather is a value provided by your context
// console.log(weather);

function App() {
  return (
    <>
      <div className="Background"></div>
      <div className="weather-app">
        <Header />
        {/* <Backgroundd /> */}
        <BackGround />
        <WeatherApp />
        <WeatherMap />

      </div>
    </Router>
  );
}
export default App;