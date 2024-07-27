import React from "react";
import ImageItem from "./ImageItem";

const NewProductCard = ({ src, price, description }) => (
  <div className="w-full h-24 shadow-md rounded-md flex">
    <div className="w-24 p-3 mr-4 cursor-pointer">
      <ImageItem className="rounded-md" src={src} alt={description} />
    </div>
    <div className="m-4">
      {description}
      <div className="my-2">
        <span className="main-text text-sm">{price}</span> تومان
      </div>
    </div>
  </div>
);

export default NewProductCard;
