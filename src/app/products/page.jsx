"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/ProductsSlice";
import Loading from "../../_components/Loading/Loading";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Link from "next/link";
import { addToCart } from "../../store/cartSlice";
import toast from "react-hot-toast";
const Products = ({product}) => {



  // open alert  dialog
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = useState({
    thumbnail: "",
    title: "",
  });

  const handleClickOpen = (product) => {
    setSelectedImage({ thumbnail: product.thumbnail, title: product.title });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // select  all products from state (store)
  const products = useSelector(
    (state) => state?.productsData?.products?.products
  );  
  const isLoading = useSelector((state) => state?.productsData?.isLoading);
  const error = useSelector((state) => state?.productsData?.error);

  const dispatch = useDispatch();

  const [showAllProducts, setShowAllProducts] = useState(false);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // handle  show all products
  const handleShowAll = () => {
    setShowAllProducts(!showAllProducts);
  };

  const productsAppear = showAllProducts ? products : products?.slice(0, 8);

  // State to handle hover for individual products
  const [hoveredProductId, setHoveredProductId] = useState(null);

  // ADD TO CART SECTION


  const handleAddToCart = (productId) => {
    dispatch(addToCart(productId))
    console.log(productId);
 
  };
  
 
  return (
    <>
      <div className="w-full ">
        <div className="my-10 mx-8 flex justify-between items-center m-auto">
          <div>
            <div className="flex mb-4 items-center ">
              <span className="p-2 h-8 bg-red-500 me-2"></span>
              <span className="text-red-500">Our Products</span>
            </div>
            <h2 className="text-3xl font-semibold">Explore Our Products</h2>
          </div>

          <div className="flex">
            <a
              href=" "
              className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
            </a>
            <a
              href=" "
              className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>

        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-center">
            {productsAppear?.map((product) => (
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
                    <div onClick={()=>handleAddToCart(product?.id)} className="absolute bottom-0 right-0 left-0 p-2 bg-black  text-center  text-white font-semibold text-lg  transition-opacity duration-300 ease-in-out">
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
                  <p className="text-sm text-red-500 font-bold">
                    ${product.price}
                  </p>
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
        )}

        <div className="flex justify-center items-center py-5 ">
          <button
            onClick={handleShowAll}
            className="bg-red-500 px-8 py-2 rounded-lg text-white cursor-pointer"
          >
            {showAllProducts ? "Hide Products" : "View All Products"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
