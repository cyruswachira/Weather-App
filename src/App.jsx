import "./App.css";
import Search from "../src/components/Search";
import Header from "./components/Header";
import WeatherMap from "./components/WeatherMap";
import CurrentWeather from "./components/CurrentWeather";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <>
      <div className="weather-app">
        <Header />
        <CurrentWeather/>
        <WeatherMap/>
      </div>
    </>
  );
}

export default App;
