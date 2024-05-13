import React, { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";
import Clear from "../assets/images/Clear.jpg";
import Cloudy from "../assets/images/Cloudy.jpg";
import Fog from "../assets/images/Fog.jpg";
import Rainy from "../assets/images/Rainy.jpg";
import Snowy from "../assets/images/Snowy.jpg";
import Stormy from "../assets/images/Stormy.jpg";
import Sunny from "../assets/images/Sunny.jpg";

function Backgroundd() {
  const { weather } = CurrentWeather();
  const [image, setImage] = useState(Clear);

  useEffect(() => {
    if (weather && weather.conditions) {
      let imageString = weather.conditions;
      if (imageString.toLowerCase().includes("clear")) {
        setImage(Clear);
      } else if (imageString.toLowerCase().includes("cloudy")) {
        setImage(Cloudy);
      } else if (imageString.toLowerCase().includes("fog")) {
        setImage(Fog);
      } else if (
        imageString.toLowerCase().includes("rain") ||
        imageString.toLowerCase().includes("shower")
      ) {
        setImage(Rainy);
      } else if (imageString.toLowerCase().includes("snow")) {
        setImage(Snowy);
      } else if (
        imageString.toLowerCase().includes("thunder") ||
        imageString.toLowerCase().includes("storm")
      ) {
        setImage(Stormy);
      } else if (imageString.toLowerCase().includes("sun")) {
        setImage(Sunny);
      }
    }
  }, [weather && weather.conditions]);

  return (
    <div>
      <img
        src={image}
        alt="weather_image"
        className="h-screen w-full fixed left-0 top-0 -z-[10]"
      />{" "}
      <CurrentWeather />
    </div>
  );
}

export default Backgroundd;
