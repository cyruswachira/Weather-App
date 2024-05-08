import React from "react";


function Forecast({ foreCastData }) {
  return (
    <div className="w-[500px] h-[250px] bg-blue-300 shadow-ig rounded-xl m-auto relative px-6 top-[10%]">
      {foreCastData.weather? (
        <div className="flex justify-between w-full">
          <div className="w-1 my-4  mx-auto flex justify-between items-center"></div>
          <div className="flex flex-col items-start justify-between h-full"></div>
          <div>
              <p className="text-xl items-center justify-center">{foreCastData.name},
              {foreCastData.sys.country}</p>
              <p className="text-xl items-center justify-center">{foreCastData.weather[0].description}</p>
             
              <div>
                <h1 className="text-6xl font-semibold ">{foreCastData.main.temp}:TEMP</h1>
              </div>
              <div className="w-1 flex flex-col justify-between items-end">
              <div className="relative">
                <img src={foreCastData.weather[0].icon} alt="" />
                </div>
              </div>
            

          </div>
          
          
        </div>
      ) : null}
    </div>
  );
};

export default Forecast;











