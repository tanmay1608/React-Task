import React from "react";
import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";
import productCategories from "../utils/categoryData";
import { MAIN_HEADING } from "../utils/constants";

const Categories = () => {
  return (
    <div className="flex flex-col items-center mt-4 font-sans h-full ">
      <p className="text-2xl sm:text-3xl p-4 text-center font-semibold">
        {MAIN_HEADING}
      </p>
      <div className="flex flex-wrap  justify-center ">
        {productCategories?.map((category, index) => (
          <Link
            key={index}
            to={`/category/${category?.name}`}
            state={{ color: category?.color, darkShade: category?.darkShade }}
          >
            <CategoryCard
              category={category?.name}
              color={category?.color}
              icon={category?.icon}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
