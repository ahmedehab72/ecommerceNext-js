// components/TodayProducts.js
"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Link from "next/link";
import { addToCart } from "../../store/cartSlice";
import { getAllTodayProducts } from "@/store/todayProductsSlice";
import Slider from "react-slick";

const TodayProducts = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = useState({
    thumbnail: "",
    title: "",
  });

  const handleClickOpen = (product) => {
    setSelectedImage({ thumbnail: product.image, title: product.name });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const products = useSelector(
    (state) => state.todayProductData.products.recipes
  );
  const isLoading = useSelector((state) => state.todayProductData.isLoading);

  const dispatch = useDispatch();

  const [showAllProducts, setShowAllProducts] = useState(false);
  useEffect(() => {
    dispatch(getAllTodayProducts());
  }, [dispatch]);

  const handleShowAll = () => {
    setShowAllProducts(!showAllProducts);
  };

  const productsAppear = showAllProducts ? products : products?.slice(0, 8);
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const addCartData =useSelector((state) =>state.cartData)
  const handleAddToCart = (productId) => {
    dispatch(addToCart(productId));
    
  };
  console.log(addCartData);
  

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2, 
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <>
      <div className="w-full ">
        <div className="my-10 mx-8 flex justify-between items-center m-auto">
          <div>
            <div className="flex mb-4 items-center ">
              <span className="p-2 h-8 bg-red-500 me-2"></span>
              <span className="text-red-500">Meal's</span>
            </div>
            <h2 className="text-3xl font-semibold">Our Meals</h2>
          </div>
        </div>

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <Slider {...settings} className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-center">
            {productsAppear?.map((product) => (
              <div key={product.id} className="m-4 p-2">
                <div
                  className="rounded-sm p-2 cursor-pointer relative"
                  onMouseEnter={() => setHoveredProductId(product.id)}
                  onMouseLeave={() => setHoveredProductId(null)}
                >
                  <FavoriteBorderIcon className="cursor-pointer absolute top-4 right-4 hover:text-red-500 bg-white rounded-full p-1 text-2xl" />
                  <VisibilityIcon
                    onClick={() => handleClickOpen(product)}
                    className="cursor-pointer absolute top-12 right-4 hover:text-blue-700 bg-white rounded-full p-1 text-2xl"
                  />
                  <Dialog open={open} onClose={handleClose}>
                    <DialogContent>
                      <img src={selectedImage.image} alt={selectedImage.name} />
                    </DialogContent>
                  </Dialog>
                  <Link href={`/todayProducts/${product.id}`}>
                    <img src={product.image} alt={product.name} />
                  </Link>
                  <h2 className="text-sm py-2">{product.name}</h2>
                  <Stack direction="row" spacing={2}>
                    <Rating value={4} readOnly />
                    <Typography>({product.price} $)</Typography>
                  </Stack>
                  <button
                    className="bg-red-600 hover:bg-red-800 text-white px-6 py-2 rounded-sm mt-2"
                    onClick={ ()=>handleAddToCart(product.id)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </>
  );
};

export default TodayProducts;
