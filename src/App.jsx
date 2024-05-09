import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import CurrentWeather from './components/CurrentWeather';
import WeatherMap from './components/WeatherMap';

function App() {
  return (
    <Router>
      <div className="weather-app">
        <Header />
        <Routes>
          <Route path="/" element={<CurrentWeather />} />
          <Route path="/weather-map" element={<WeatherMap />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;