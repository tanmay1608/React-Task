import React from "react";

const Shimmer = () => {
  const shimmerItems = Array(8).fill(0);

  return (
    <div className="flex flex-col items-center pt-11 w-full h-full">
      <div className="p-4 bg-gray-300 animate-pulse w-40"></div>
      <div className="flex flex-wrap justify-center">
        {shimmerItems.map((_, index) => (
          <div
            key={index}
            className="m-2 rounded-lg flex flex-col justify-end "
          >
            <div className="flex flex-col items-center">
              <div className="w-80 h-80 bg-gray-300 animate-pulse"></div>
              <div className="w-72 h-6 mt-2 bg-gray-300 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
