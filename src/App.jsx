import "./App.css";
import Search from "../src/components/Search";
import Header from "./components/Header";
import WeatherMap from "./components/WeatherMap";
import CurrentWeather from "./components/CurrentWeather";
<<<<<<< HEAD
import Background from "./components/BackGround";
=======
import WeatherApp from "./components/WeatherApp";

>>>>>>> 12f73abcceda04bf979fccdcd51e73e4ada4b2fa
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
<<<<<<< HEAD
        <CurrentWeather />
        <WeatherMap />
=======
        <CurrentWeather/>
        <WeatherApp/>
        <WeatherMap/>
>>>>>>> 12f73abcceda04bf979fccdcd51e73e4ada4b2fa
      </div>
    </>
  );
}

export default App;
