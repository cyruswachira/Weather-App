import "./App.css";
import Header from "./components/Header";
import CurrentWeather from "./components/CurrentWeather";

function App() {
  return (
    <>
      <div className="weather-app">
        <Header />
        <CurrentWeather />
      </div>
    </>
  );
}

export default App;
