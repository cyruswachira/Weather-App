
function WeatherMap() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold mb-4 flex justify-center">
        <u>World Climate Maps</u>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-200 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">North America</h2>
          <p className="text-gray-800">
            North America has a diverse climate, ranging from Arctic conditions
            in the north to tropical climates in the south.
            <img
              src="https://i.pinimg.com/originals/08/a0/2c/08a02c39edbd9100a959eaabef3e280a.png"
              alt="north-america"
            />
          </p>
        </div>

        <div className="bg-green-200 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">South America</h2>
          <p className="text-gray-800">
            South America features a variety of climates, including tropical
            rainforests, arid deserts, and temperate zones.
            <img
              src="https://i.pinimg.com/originals/ad/70/af/ad70afd869d6d4f1d144f0409d1992b4.png"
              alt="south-america"
            />
          </p>
        </div>

        <div className="bg-yellow-200 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Europe</h2>
          <p className="text-gray-800">
            Europe has a diverse climate, with Mediterranean climates in the
            south and continental climates in the east.
            <img
              src="https://www.researchgate.net/publication/26640584/figure/fig3/AS:669997575725059@1536751278082/Koeppen-Geiger-climate-type-map-of-Europe.png"
              alt="europe"
            />
          </p>
        </div>

        <div className="bg-red-200 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Africa</h2>
          <p className="text-gray-800">
            Africa features a range of climates, including tropical, desert, and
            Mediterranean climates.
            <img
              src="https://www.researchgate.net/publication/353038531/figure/fig1/AS:1042852041736196@1625646710878/Map-of-African-countries-and-their-corresponding-climate-regime-Source-Authors.png"
              alt="africa"
            />
          </p>
        </div>

        <div className="bg-indigo-200 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Asia</h2>
          <p className="text-gray-800">
            Asia has a diverse climate, with tropical climates in the south and
            continental climates in the north.
            <img
              src="https://www.researchgate.net/publication/26640584/figure/fig2/AS:669997575725057@1536751278052/Koeppen-Geiger-climate-type-map-of-Asia.png"
              alt="asia"
            />
          </p>
        </div>

        <div className="bg-purple-200 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Australia</h2>
          <p className="text-gray-800">
            Australia has a range of climates, including tropical, desert, and
            temperate climates.
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Australia-Oceania_K%C3%B6ppen_Map.png"
              alt="australia"
            />
          </p>
        </div>

        <div className="bg-gray-200 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Antarctica</h2>
          <p className="text-gray-800">
            Antarctica is the coldest continent on Earth, with extremely low
            temperatures and ice-covered landscapes.
            <img
              src="https://www.bas.ac.uk/wp-content/uploads/2017/11/Heat-flux-map-image-702x736.jpg"
              alt="antarctica"
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherMap;
