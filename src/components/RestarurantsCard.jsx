
import React from "react";

export default function RestaurantCard({ restArr = [] }) {
  return (
    <>
      {restArr.length > 0 ? (
        restArr.map((item) => {
          const info = item.info;

          return (
            <div
              key={info.id}
              className="w-64 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
            >
              {/* Image */}
              <div className="w-full h-44 overflow-hidden">
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`}
                  alt={info.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col justify-between h-44">
                {/* Title & Rating Row */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <h1 className="text-base font-semibold text-gray-800 line-clamp-1">
                      {info.name}
                    </h1>
                    <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
                      ⭐ {info.avgRating ?? "--"}
                    </span>
                  </div>

                  {/* Time */}
                  <p className="text-xs text-gray-500 mb-2">
                    ⏱️ {info.sla?.slaString || "N/A"}
                  </p>

                  {/* Cuisine */}
                  <p className="text-sm text-gray-700 font-medium line-clamp-1">
                    {info.cuisines?.join(", ")}
                  </p>
                </div>

                {/* Location */}
                <p className="text-xs text-gray-500 mt-2 line-clamp-1">
                  📍 {info.locality}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-gray-500 text-center w-full">Loading restaurants...</p>
      )}
    </>
  );
}
