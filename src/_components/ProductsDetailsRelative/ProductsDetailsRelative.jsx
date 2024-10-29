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

const ProductsDetailsRelative = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = useState({
    thumbnail: "",
    title: "",
  });

  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleClickOpen = (product) => {
    setSelectedImage({ thumbnail: product.thumbnail, title: product.title });

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //   end  open alert dialog

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

  //   end  of select all products from state (store)

  // handle  show all products
  const handleShowAll = () => {
    setShowAllProducts(!showAllProducts);
  };
  const productsAppear = products?.slice(4, 8);
  // end  of handle show all products

  return (
    <>
      <div className="flex my-10 items-center ms-16">
        <span className="p-2 h-8 bg-red-500 me-2"></span>
        <span className="text-red-500">Related Item</span>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-center">
          {productsAppear?.map((product) => (
            <>
              <div key={product.id} className="m-4">
                <div
                  className="bg-gray-100 rounded-sm  p-2 cursor-pointer relative"
                  onMouseEnter={() => setHoveredProductId(product.id)}
                  onMouseLeave={() => setHoveredProductId(null)}
                >
                  <FavoriteBorderIcon className="cursor-pointer absolute top-4 right-4 hover:text-red-500 bg-white rounded-full p-1 text-2xl" />
                  <VisibilityIcon
                    onClick={() => handleClickOpen(product)}
                    className="cursor-pointer absolute top-12 right-4 hover:text-blue-700 bg-white rounded-full p-1 text-2xl"
                  />
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
                  <Link href={`/products/${product.id}`}>
                    <img src={product.thumbnail} alt={product.title} />
                  </Link>
                  {hoveredProductId === product.id && (
                    <div className="absolute bottom-0 right-0 left-0 p-2 bg-black  text-center  text-white font-semibold text-lg  transition-opacity duration-300 ease-in-out">
                      <h3>Add to cart</h3>
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-bold py-2 ">
                  {product.title.split(" ").slice(0, 3).join(" ")}
                </h3>
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
            </>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsDetailsRelative;
