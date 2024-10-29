'use client'
import React, { useState } from "react";


const SliderTodayProducts = ({ products }) => {
  const [mainImage, setMainImage] = useState(products.image); // Set the first image as the main image initially

  // Handle thumbnail click to update the main image
  const handleImageClick = (src) => {
    setMainImage(src);
  };

  return (
    <div className=" lg:w-4/5  w-full flex items-center justify-center ">

      {/* Main Image */}
      <div  className="  bg-gray-100 flex items-center justify-center">
        <img src={mainImage} id="main" className=" h-[500px] object-cover"  alt="Main Product" />
      </div>
    </div>
  );
};

export default SliderTodayProducts;
