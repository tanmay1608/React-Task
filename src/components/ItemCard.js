import React from "react";

const ItemCard = ({ image, title }) => {
  return (
    <div className="  m-2 rounded-lg flex flex-col justify-end bg-lightBlack font-sans">
      <div className="flex flex-col items-center">
        <div className="w-80 h-80">
          <img className="w-full h-full" src={image} alt={title} />
        </div>
        <p className="text-white p-2 text-lg">{title}</p>
      </div>
    </div>
  );
};

export default ItemCard;
