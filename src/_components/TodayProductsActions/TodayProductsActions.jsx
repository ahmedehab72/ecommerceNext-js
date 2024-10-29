"use client";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { Rating, Stack } from "@mui/material";
import React, { useState } from "react";
import Link from "next/link";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const TodayProductsAction = ({ products }) => {

  //   const [selectedColor, setSelectedColor] = useState(products.colors[0]);
  //   const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  // Handle quantity increment/decrement
  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : 1
    );
  };

  return (
    <div className="p-8 lg:w-[37%]  w-full m-4  border">
      {/* Products Title */}
      <h1 className="text-2xl font-bold">{products.name}</h1>

      {/* Rating */}
      <div className="flex items-center my-2">
        <Stack
          className="flex items-center flex-row justify-between"
          spacing={1}
        >
          <Rating
            name="half-rating-read"
            defaultValue={products.rating}
            precision={0.5}
            readOnly
          />
        </Stack>{" "}
        <span className="ml-2 text-gray-500">
          ({products.reviewCount} Reviews)
        </span>
        <span className="ml-4 text-green-600">{products.stock}</span>
      </div>

 
      {/* Products Description */}
      <p className="text-gray-700">{products.description}</p>



      {/* Size Selector */}
      <div className="my-8">
        <span className="font-bold">Size:</span>
        <div className="flex items-center space-x-2 mt-2">
          <button
            className={`border px-4 py-1 rounded `}
            onClick={() => setSelectedSize(size)}
          >
            sm
          </button>
          <button
            className={`border px-4 py-1 rounded `}
            onClick={() => setSelectedSize(size)}
          >
            lg
          </button>
          <button
            className={`border px-4 py-1 rounded `}
            onClick={() => setSelectedSize(size)}
          >
            xl
          </button>
          <button
            className={`border px-4 py-1 rounded `}
            onClick={() => setSelectedSize(size)}
          >
            xxl
          </button>
        </div>
      </div>

      {/* Quantity Selector */}
      <div className="my-4 flex items-center space-x-4">
        <div className="flex border items-center">
          <button
            className="px-3 py-1"
            onClick={() => handleQuantityChange("decrease")}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            readOnly
            className="w-12 text-center border-none focus:outline-none"
          />
          <button
            className="px-3 py-1"
            onClick={() => handleQuantityChange("increase")}
          >
            +
          </button>
        </div>

        {/* Buy Now Button */}
        <button className="px-8 py-2 bg-red-500 text-white rounded-lg">
          Buy Now
        </button>
        <button className="px-4 py-2 text-red-500 rounded-lg border">
        <FavoriteBorderIcon />
        </button>

      </div>

      {/* Delivery & Return Info */}
      <div className="border-t pt-4 mt-4">
        <div className="mb-4 flex items-center">
          <LocalShippingIcon className="mt-2 me-2" />
          <div>
            <strong>Free Delivery</strong>
            <p className="text-gray-500">
              Enter your postal code for Delivery Availability
            </p>
          </div>
        </div>
        <div className="mb-4 flex items-center">
          <AutorenewIcon className="mt-2 me-2" />

          <div>
            <strong>Return Delivery</strong>
            <p className="text-gray-500">
              Free 30 Days Delivery Returns.{" "}
              <Link href=" " className="underline">
                Details
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayProductsAction;
