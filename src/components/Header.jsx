import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="flex justify-center pt-2 text-5xl font-serif font-bold">
        <h1><u>WEATHER APP</u></h1>
      </div>

      <div className="pl-2 flex flex-row font-bold mt-5 mb-5">
        <nav className="flex gap-2">
          <div className="mr-4">
            <Link to="/" className="text-black text-black hover:text-white">
              Current Weather
            </Link>
          </div>
          <div className="mr-5">
            <Link
              to="/weather-map"
              className="text-black text-black hover:text-white"
            >
              Climate Maps
            </Link>
          </div>
          <div>
            <Link
              to="/weather-app"
              className="text-black text-black hover:text-white"
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
