import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import ItemCard from "./ItemCard";
import Shimmer from "./Shimmer";
import {
  API_URL,
  COLOR_CYAN_200,
  COLOR_CYAN_300,
  NEXT,
  PAGE_NEXT_ARROW,
  PAGE_PREVIOUS_ARROW,
  PAGE_SIZE,
  PREVIOUS,
} from "../utils/constants";
import NoDataFound from "./NoDataFound";

const ProductCards = () => {
  const { category } = useParams();
  const location = useLocation();
  const state = location?.state || {};
  const color = state?.color || COLOR_CYAN_200;
  const darkShade = state?.darkShade || COLOR_CYAN_300;

  const [categoryItems, setCategoryItems] = useState(null);
  const [page, setPage] = useState(1);
  const fetchCategoryItems = async () => {
    try {
      const data = await fetch(`${API_URL}${category}`);
      const json = await data?.json();
      setCategoryItems(json?.products);
    } catch (e) {
      alert(`An error occurred: ${e.message}`);
    }
  };

  const handlePageClick = (selectedPage) => {
    setPage(selectedPage);
  };

  const handlePreviousPage = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page === Math.ceil(categoryItems?.length / PAGE_SIZE)) return;
    setPage(page + 1);
  };

  useEffect(() => {
    fetchCategoryItems();
  }, []);

  return !categoryItems ? (
    <Shimmer />
  ) : categoryItems?.length === 0 ? (
    <NoDataFound />
  ) : (
    <div className="pt-3 flex flex-col items-center  font-sans ">
      <p className="p-4 text-2xl text-center font-semibold">{`${category?.toUpperCase()}`}</p>
      <div className="flex flex-wrap justify-center">
        {categoryItems
          ?.slice(page * PAGE_SIZE - PAGE_SIZE, page * PAGE_SIZE)
          ?.map((item) => {
            return (
              <ItemCard
                key={item?.id}
                image={item?.images?.[0]}
                title={item?.title}
              />
            );
          })}
      </div>
      <div
        className={`min-w-80 w-8/12 flex justify-center p-2 cursor-pointer font-sans ${color} rounded-lg`}
      >
        <span
          className={`m-2 py-1 px-3 cursor-pointer shadow-lg  md:hidden ${darkShade}`}
          onClick={handlePreviousPage}
        >
          {PAGE_PREVIOUS_ARROW}
        </span>
        <span
          className={`${darkShade}  mr-5 text-white shadow-lg rounded-lg py-1 px-3 hidden  md:flex items-center justify-center`}
          onClick={handlePreviousPage}
        >
          {PREVIOUS}
        </span>
        <span className="flex">
          {[...Array(Math.ceil(categoryItems?.length / PAGE_SIZE))]?.map(
            (_, index) => (
              <span
                className={`m-2 py-1 px-3 cursor-pointer  ${
                  index + 1 === page &&
                  `${darkShade} rounded-lg shadow-lg text-white`
                }`}
                key={index}
                onClick={() => {
                  handlePageClick(index + 1);
                }}
              >
                {index + 1}{" "}
              </span>
            )
          )}
        </span>
        <span
          className={`m-2 py-1 px-3 cursor-pointer shadow-lg  ${darkShade}  md:hidden`}
          onClick={handleNextPage}
        >
          {PAGE_NEXT_ARROW}
        </span>
        <span
          className={`${darkShade}  text-white shadow-lg rounded-lg py-1 px-3 hidden ml-5  md:flex items-center justify-center`}
          onClick={handleNextPage}
        >
          {NEXT}
        </span>
      </div>
    </div>
  );
};

export default ProductCards;
