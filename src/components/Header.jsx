import React from "react";
import { Link } from 'react-router-dom';


export const Header = () => {
  /**
   * The outermost div element provides basic margin styling to the header.
   */
  return (
    <>
    <div className="mt-0 mb-5">
      {/* This div element is used to apply font styling to the title.  */}
      <div className="font-bold">
        {/* This div element is used to apply font size styling to the title. */}

        <div className="text-5xl">
          {/* This div element is used to center the title horizontally.  */}

          <div className="flex justify-center">
            {/* This div element is used to apply an underline decoration to the title. */}

            <div className="underline decoration-solid">
              {/* The h1 element represents the title of the Weather App. */}

              <h1>WEATHER APP</h1>
       
            </div>
          </div>
        </div>
      </div>
    </div>
        <div>   
        <nav>
          <ul>
            <li><Link to="/">Current Weather</Link></li>
            <li><Link to="/weather-map">Climate Maps</Link></li>
          </ul>
        </nav>
        </div>
        </>
  );
};

export default Header;
