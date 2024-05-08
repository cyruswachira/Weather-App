// Import the necessary dependencies
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

// Define the API options for making requests to the GeoDB API
export const APIoptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "56fe6f8386msh247b9eef3349e0fp194e99jsnccc2599275f2",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

// Define the GeoDB API URL
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

/**
 * Search component for searching cities using the GeoDB API
 * @param {function} onSearchChange - Callback function to handle changes in the selected city
 */

function Search({ onSearchChange }) {
  // Initialize state to store the selected city
  const [search, setSearch] = useState();

  /**
   * Load city options based on user input
   * @param {string} inputValue - User input value for searching cities
   * @returns {Promise<{options: {value: string, label: string}[]}>} - Promise that resolves to an object containing an array of city options
   */
  // Define the loadOptions function to fetch city options from the GeoDB API
  const loadOptions = (inputValue) => {
    // Fetch cities from the API with the given input value as a prefix
    return fetch(`${GEO_API_URL}/cities?&namePrefix=${inputValue}`, APIoptions)
      .then((response) => {
        // Throw an error if the response is not OK
        if (!response.ok) {
          throw new Error("Failed to fetch cities");
        }
        return response.json();
      })
      .then((response) => {
        // Map the response data to an array of city options
        if (!response || !response.data || !Array.isArray(response.data)) {
          throw new Error("Invalid response data");
        }
        return {
          options: response.data.map((city) => ({
            value: `${city.latitude}, ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}, ${city.regionCode}`,
          })),
        };
      })
      .catch((err) => {
        // Log the error and return an empty array of options if there's an error
        console.error(err);
        return { options: [] };
      });
  };

  /**
   * Handle changes in the selected city
   * @param {object} searchData - Selected city data
   */
  const handleOnChange = (searchData) => {
    // Update the state with the selected city
    setSearch(searchData);
    console.log(searchData);
    onSearchChange(searchData);
  };

  // Render the AsyncPaginate component with the necessary props
  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
}

export default Search;
