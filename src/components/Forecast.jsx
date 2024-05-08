function Forecast({ foreCastData }) {
  if (!foreCastData.weather) {
    return null;
  }

  const weatherIconUrl = `http://openweathermap.org/img/w/${foreCastData.weather[0].icon}.png`;

  return (
    <div className="w-[500px] h-[250px] bg-blue-300 shadow-ig rounded-xl m-auto relative px-6 top-[10%]">
      <div className="flex flex-col items-left justify-between h-full">
        <div className="w-full">
          <p className="text-xl text-left">{foreCastData.name}, {foreCastData.sys.country}</p>
          <p className="text-xl text-left">{foreCastData.weather[0].description}</p>
        </div>
        <div className="w-1/2">
          <h1 className="text-6xl font-semibold  text-left  items-end">{foreCastData.main.temp}:TEMP</h1>
        </div>
        <div className="w-1/2">
          <div className="relative">
            <img src={weatherIconUrl} alt={foreCastData.weather[0].description} className="w-1/2 h-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;