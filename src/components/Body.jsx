
import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestarurantsCard";
import ApiCalling from "./ApiCalling";
import Search from "./Search";

export default function Body() {

  useEffect(() => {
    async function fetchData() {
      const data = await ApiCalling(); // ✅ Await async function
      setRestArr(data);
    }
    fetchData();
  }, []);


  const [restArr, setRestArr] = useState([]);
  const [allRestArr, setAllRestArr] = useState(restArr)

  //we use use effect if api takes some time then the states are updated with undefined so, we have to use use effect to provide api data after rendering 
  useEffect(() => {
    if (restArr && restArr.length) {
      setAllRestArr(restArr)
    }
  }, [restArr])

  function filterTopRatedRest(restArr) {
    let ratingFilteresArr = restArr.filter(restaurants => restaurants.info.avgRating > 4.2)
    setAllRestArr(ratingFilteresArr)
  }

  function resetFilter(restArr) {
    setAllRestArr(restArr)
  }



  return (
    <div className="px-10 py-8 bg-gray-50 min-h-screen">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">
          Top Restaurants in Hyderabad
        </h1>

        <div className="flex space-x-4">
          <button onClick={() => filterTopRatedRest(restArr)} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg shadow-sm font-medium transition duration-200">
            Rating 4.2+
          </button>
          <button onClick={() => resetFilter(restArr)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow-sm font-medium transition duration-200">
            Reset Rating
          </button>
        </div>
      </div>

      <div>
        <Search restArr={restArr} setAllRestArr={setAllRestArr}></Search>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <RestaurantCard restArr={allRestArr} />
      </div>

    </div>
  );
}
