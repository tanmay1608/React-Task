import React from "react";
import { Link } from "react-router-dom";
import {
  ERROR_CODE_404,
  GO_BACK_HOME,
  PAGE_NOT_FOUND_MESSAGE,
  PAGE_NOT_FOUND_TITLE,
} from "../utils/constants";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
      <div className="w-24 h-24 bg-red-500 text-white rounded-full flex items-center justify-center mb-4">
        <p className="text-4xl font-bold">{ERROR_CODE_404}</p>
      </div>
      <p className="text-2xl font-semibold text-gray-800 mb-2">
        {PAGE_NOT_FOUND_TITLE}
      </p>
      <p className="text-lg text-gray-600">{PAGE_NOT_FOUND_MESSAGE}</p>
      <Link to="/" className="mt-4 text-blue-500 hover:underline">
        {GO_BACK_HOME}
      </Link>
    </div>
  );
};

export default PageNotFound;
