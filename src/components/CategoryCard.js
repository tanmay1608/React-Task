import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoryCard = ({ category, color, icon }) => {
  return (
    <div
      className={`w-52 h-32  ${color} m-2 rounded-lg shadow-lg flex flex-col justify-between font-sans  `}
    >
      <div className=" text-end p-2 ">
        <FontAwesomeIcon icon={icon} />
      </div>
      <p className="font-sans text-center  w-full p-2">
        {category?.toUpperCase()}
      </p>
    </div>
  );
};

export default CategoryCard;
