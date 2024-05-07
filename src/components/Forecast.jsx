function Forecast({foreCastData}) {

  return (
    <div>
     {foreCastData.weather ? (

      <div className="w-[500px] h=[250px] bg-blue-300  shadow-lg rounded" ></div>
     ):null}
    </div>
  )
}

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
