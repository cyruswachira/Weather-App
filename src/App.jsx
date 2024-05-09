import "./App.css";
import Header from "./components/Header";
import WeatherMap from "./components/WeatherMap";


function App() {
  return (
    <>
      <div className="weather-app">
        <Header />
        <Search onSearchChange={handleOnSearchChange} />
        <WeatherMap/>
 
      </div>
    </>
  );
}

export default App;
