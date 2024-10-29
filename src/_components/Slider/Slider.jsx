'use client'
import React, { useState } from "react";

const Slider = ({ products }) => {
  const [mainImage, setMainImage] = useState(products.images[0]); // Set the first image as the main image initially

  // Handle thumbnail click to update the main image
  const handleImageClick = (src) => {
    setMainImage(src);
  };

  return (
    <div className=" lg:w-3/5  w-full flex items-start justify-start  lg:-mt-28">
      {/* Thumbnail Images */}
      <div className="w-1/4 flex flex-col  ms-2   h-[500px] ">
        {products.images.map((image, index) => (
          <img
            src={image}
            key={index}
            className="bg-gray-100 m-2 w-3/4 img-pointer h-[150px] "
            width={150}
            alt={`Product Thumbnail ${index + 1}`}
            onClick={() => handleImageClick(image)} // Set the main image when thumbnail is clicked
          />
        ))}
      </div>

      {/* Main Image */}
      <div  className="w-3/4  bg-gray-100 flex items-center justify-center">
        <img src={mainImage} id="main" className="w-1/2 h-[500px]"  alt="Main Product" />
      </div>
    </div>
  );
};

export default Slider;
