import React from "react";
import ImageItem from "./ImageItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsLeftRight, faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ src, price, description }) => (
  <div className="shadow-md w-72 h-auto rounded-lg leading-8">
    <div className="mx-3 mt-2 float-right bg-red-600 p-0.5 rounded-full text-white">
      <span>%10</span>
    </div>
    <div className="float-left p-1 text-xs font-bold bg-yellow-400 w-fit text-white rounded-s-full m-3 rounded-tl-full">
      <span>فروش ویژه</span>
    </div>
    <div className="px-12 pt-6">
      <ImageItem className="cursor-pointer" src={src} alt={description} />
    </div>
    <div className="m-2">
      <span className="main-text">{price}</span> تومان
      <div>{description}</div>
      <div className="flex gap-2 lg:mt-4">
        <div className="cursor-pointer border-2 border-black w-8 h-8 text-center rounded-full">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <div className="cursor-pointer border-2 border-black w-8 h-8 text-center rounded-full">
          <FontAwesomeIcon icon={faArrowsLeftRight} />
        </div>
        <div className="cursor-pointer border-2 border-black w-8 h-8 text-center rounded-full">
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;
