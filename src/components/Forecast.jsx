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











// <header className="hourly-header"><h1 class="text-3xl font-bold">{title}</h1></header>
      
// <div class="card">
// <div class="flex flex-col space-y-4">
// <div class="grid grid-cols-3 gap-4">
// <div class="bg-blue-100 p-4 rounded-lg">
//  <div class="text-center">
//    <img src="src/assets/sunny.png" alt="1 PM" class="h-10 w-10  mx-auto" />
//    <p class="text-xl font-semibold">1 PM</p>
//  </div>
//  <div class="text-center mt-4">
//    <p class="text-lg font-medium">75°F</p>
//    <p class="text-gray-500">Sunny</p>
//  </div>
// </div>


// <div class="bg-blue-100 p-4 rounded-lg">
//  <div class="text-center">
//    <img src="src/assets/sunny.png" alt="2 PM" class="h-10 w-10 mx-auto" />
//    <p class="text-xl font-semibold">2 PM</p>
//  </div>
//  <div class="text-center mt-4">
//    <p class="text-lg font-medium">77°F</p>
//    <p class="text-gray-500">Sunny</p>
//  </div>
// </div>
// <div class="bg-blue-100 p-4 rounded-lg">
//  <div class="text-center">
//    <img src="src/assets/sunny.png" alt="3 PM" class="h-10 w-10 mx-auto" />
//    <p class="text-xl font-semibold">3 PM</p>
//  </div>
//  <div class="text-center mt-4">
//    <p class="text-lg font-medium">79°F</p>
//    <p class="text-gray-500">Sunny</p>
//  </div>
// </div>
// </div>
// </div>
// </div>
