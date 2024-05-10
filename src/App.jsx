import "./App.css";
import Header from "./components/Header";
import WeatherMap from "./components/WeatherMap";
import CurrentWeather from "./components/CurrentWeather";
import WeatherApp from "./components/WeatherApp";

function App() {

  return (
    <>
      <div className="Background">
      </div>
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