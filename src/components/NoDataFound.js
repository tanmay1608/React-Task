import React from "react";
import {
  NO_DATA_FOUND,
  NO_DATA_TITLE,
  NO_ITEMS_AVAILABLE,
} from "../utils/constants";

const NoDataFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full py-8">
      <div className="w-24 h-24 bg-gray-300  flex items-center justify-center mb-4">
        <p className="text-gray-600 text-lg font-semibold">{NO_DATA_TITLE}</p>
      </div>
      <p className="text-lg font-semibold text-gray-600">{NO_DATA_FOUND}</p>
      <p className="text-sm text-gray-400 text-center">{NO_ITEMS_AVAILABLE}</p>
    </div>
  );
};

export default NoDataFound;
