import React, { useState } from "react";
import { motion } from "framer-motion";
import Loading from "../components/Loading";

const ImageItem = ({ src, alt, className }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      animate={
        isHovering
          ? {
              y: [0, -10, 10, 0],
              transition: {
                y: {
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              },
            }
          : { y: 0 }
      }
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <Loading />
        </div>
      )}
      <img
        onLoad={() => setLoading(false)}
        className={`rounded-lg cursor-pointer transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        src={src}
        alt={alt}
      />
    </motion.div>
  );
};

export default ImageItem;
