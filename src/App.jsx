// App.jsx
// import React, { useStateContext }  from "react";
import "./App.css";
import Background from "./components/BackGround";
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
    </>
  );
}

export default App;
