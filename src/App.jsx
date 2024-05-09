import "./App.css";
import Search from "../src/components/Search";
import Header from "./components/Header";
import WeatherMap from "./components/WeatherMap";
import CurrentWeather from "./components/CurrentWeather";
import Background from "./components/BackGround";
function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <>
      <div className="Background">
        <Background />
      </div>
      <div className="weather-app">
        <Header />
        <CurrentWeather />
        <WeatherMap />
      </div>
    </>
  );
}

export default App;
