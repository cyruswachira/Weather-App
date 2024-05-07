function Forecast() {
  return (
    <div class="flex flex-col space-y-4">
      <h2 class="text-2xl font-bold">Hourly Forecast</h2>
      <div class="grid grid-cols-3 gap-4">
        <div class="bg-gray-100 p-4 rounded-lg">
          <div class="text-center">
            <img
              className="size-10"
              src="src/assets/sunny.png"
              alt="1 PM"
              class="h-15 w-15 mx-auto"
            />
            <p class="text-xl font-semibold">1 PM</p>
          </div>
          <div class="text-center mt-4">
            <p class="text-lg font-medium">75°F</p>
            <p class="text-gray-500">Sunny</p>
          </div>
        </div>
        <div class="bg-gray-100 p-4 rounded-lg">
          <div class="text-center">
            <img src="image-url" alt="2 PM" class="h-20 w-20 mx-auto" />
            <p class="text-xl font-semibold">2 PM</p>
          </div>
          <div class="text-center mt-4">
            <p class="text-lg font-medium">77°F</p>
            <p class="text-gray-500">Sunny</p>
          </div>
        </div>
        <div class="bg-gray-100 p-4 rounded-lg">
          <div class="text-center">
            <img src="image-url" alt="3 PM" class="h-20 w-20 mx-auto" />
            <p class="text-xl font-semibold">3 PM</p>
          </div>
          <div class="text-center mt-4">
            <p class="text-lg font-medium">79°F</p>
            <p class="text-gray-500">Sunny</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
