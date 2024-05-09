import "./App.css";
import Search from "../src/components/Search";
import Header from "./components/Header";
import WeatherMap from "./components/WeatherMap";
import CurrentWeather from "./components/CurrentWeather";
import WeatherApp from "./components/WeatherApp";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <>
      <div className="weather-app">
        <Header />
        <CurrentWeather/>
        <WeatherApp/>
        <WeatherMap/>
      </div>
    </>
  );
}

export default App;
