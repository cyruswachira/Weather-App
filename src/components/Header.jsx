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
            <Link to="/" className="hover:text-black hover:text-black">
              Current Weather
            </Link>
          </div>
          <div>
            <Link
              to="/weather-map"
              className="hover:text-black hover:text-black"
            >
              Climate Maps
            </Link>
          </div>
          <div>
            <Link
              to="/weather-app"
              className="hover:text-black hover:text-black"
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
