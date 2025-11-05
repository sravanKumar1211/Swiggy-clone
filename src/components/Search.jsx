
import React from "react";

export default function Search({ restArr, setAllRestArr }) {
  function handleInp(searchText) {
    const searchedRest = restArr.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setAllRestArr(searchedRest);
  }

  return (
    <div className="flex justify-center mb-8 mt-4">
      <div className="relative w-full sm:w-1/2 md:w-1/3">
        <input
          onChange={(e) => handleInp(e.target.value)}
          type="text"
          placeholder="Search for restaurants..."
          className="w-full px-5 py-3 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-700 placeholder-gray-400 transition duration-200"
        />
        <span className="absolute right-4 top-3.5 text-gray-400">
          🔍
        </span>
      </div>
    </div>
  );
}
