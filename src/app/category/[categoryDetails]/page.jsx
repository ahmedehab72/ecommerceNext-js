"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

const CategoryDetails = ({ params }) => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [hoveredProductId, setHoveredProductId] = useState(false);
  const [selectedImage, setSelectedImage] = useState({
    thumbnail: "",
    title: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/category/${params.categoryDetails}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    };

    fetchProducts();
  }, [params.categoryDetails]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!products) {
    return <p>Loading...</p>;
  }

  const handleClickOpen = (product) => {
    setSelectedImage({ thumbnail: product.thumbnail, title: product.title });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // ADD TO CART SECTION

  const handleAddToCart = (productId) => {
    dispatch(addToCart(productId));
    console.log(productId);
  };

  console.log(products);

  return (
    <div className="w-[85%] mx-auto my-10">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-center">
        {products?.products?.map((product) => (
          <div key={product.id} className="m-4">
            <div
              className="bg-gray-100 rounded-sm p-2 cursor-pointer relative"
              onMouseEnter={() => setHoveredProductId(product.id)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              {/* Favorite and Visibility Icons */}
              <FavoriteBorderIcon className="cursor-pointer absolute top-4 right-4 hover:text-red-500 bg-white rounded-full p-1 text-2xl" />
              <VisibilityIcon
                onClick={() => handleClickOpen(product)}
                className="cursor-pointer absolute top-12 right-4 hover:text-blue-700 bg-white rounded-full p-1 text-2xl"
              />

              {/* Dialog for viewing product image */}
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogContent>
                  <img
                    src={selectedImage.thumbnail}
                    alt={selectedImage.title}
                  />
                </DialogContent>
              </Dialog>

              {/* Product Thumbnail */}
              <Link href={`/products/${product?.id}`}>
                <img src={product.thumbnail} alt={product.title} />
              </Link>

              {/* Show Add to Cart Button only on hovered product */}
              {hoveredProductId === product.id && (
                <div
                  onClick={() => handleAddToCart(product?.id)}
                  className="absolute bottom-0 right-0 left-0 p-2 bg-black  text-center  text-white font-semibold text-lg  transition-opacity duration-300 ease-in-out"
                >
                  <h3>Add to cart</h3>
                </div>
              )}
            </div>

            {/* Product Title */}
            <h3 className="text-lg font-bold py-2 ">
              {product.title.split(" ").slice(0, 3).join(" ")}
            </h3>

            {/* Price and Rating */}
            <div className="flex justify-between items-center">
              <p className="text-sm text-red-500 font-bold">${product.price}</p>
              <Stack
                className="flex items-center flex-row justify-between"
                spacing={1}
              >
                <Rating
                  name="half-rating-read"
                  defaultValue={product.rating}
                  precision={0.5}
                  readOnly
                />
                <Typography className="text-gray-400 ">
                  ( {product.minimumOrderQuantity} )
                </Typography>
              </Stack>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;
