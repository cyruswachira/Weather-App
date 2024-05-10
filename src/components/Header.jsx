import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="flex justify-center pt-2 text-5xl font-serif">
        <h1>WEATHER APP</h1>
      </div>

      <div className="pl-2 flex flex-row">
        <nav className="flex">
          <div className="mr-4">
            <Link to="/" className="text-blue-500 hover:text-blue-700">
              Current Weather
            </Link>
          </div>
          <div>
            <Link
              to="/weather-map"
              className="text-blue-500 hover:text-blue-700"
            >
              Climate Maps
            </Link>
          </div>
          <div>
            <Link
              to="/weather-app"
              className="text-blue-500 hover:text-blue-700"
            >
              Weekly Weather
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
