import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import WeatherMap from "./components/WeatherMap";
import "./App.css";
import WeatherApp from "./components/WeatherApp";
import Backgroundd from "./components/Backgroundd";

function App() {
  return (
    <Router>
      <div className="weather-app">
        <Header />
        <Routes>
          <Route path="/" element={<Backgroundd />} />
          <Route path="/weather-map" element={<WeatherMap />} />
          <Route path="/Weather-app" element={<WeatherApp />} />
        </Routes>

        
      </div>
    </Router>
  );
}
export default App;
