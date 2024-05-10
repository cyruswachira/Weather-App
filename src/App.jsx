// App.jsx
// import React, { useStateContext }  from "react";
import "./App.css";
import Header from "./components/Header";
import WeatherMap from "./components/WeatherMap";
import Background from "./components/Background";

function App() {
  // const { weather } = useStateContext(); // Assuming weather is a value provided by your context
  // console.log(weather);

  return (
    <>
      <div className="weather-app">
        <Header />
        <Background />
        <WeatherMap />
      </div>
    </>
  );
}

export default App;
