import React from "react";
import ImageItem from "./ImageItem";

const BlogCard = ({ src, title }) => (
  <div className="w-72 h-80 shadow-md m-4 rounded-lg flex-shrink-0">
    <div className="p-2 text-xs m-2 float-left main-bg w-fit text-white rounded-b-xl rounded-tr-xl">
      وبلاگ
    </div>
    <div className="w-full cursor-pointer my-10 mx-4">
      <ImageItem src={src} alt={title} />
    </div>
    <div className="my-12 mx-4">{title}</div>
    <div className="text-xs bg-yellow-300 w-fit p-3 float-left m-2 rounded-bl-full hover:rounded-t-full hover:bg-yellow-400 hover:text-white transition-all cursor-pointer">
      بزن بریم!
    </div>
  </div>
);

export default BlogCard;
