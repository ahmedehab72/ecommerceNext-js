'use client'
import { getAllCategory } from '@/store/categorySlice'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { getAllTodayProducts } from "@/store/todayProductsSlice";
import Slider from "react-slick";
import CategoryIcon from '@mui/icons-material/Category';
import ClassIcon from '@mui/icons-material/Class';

const Category =async () => {
    const  categories = useSelector(state => state?.categoryData?.categories)
    
    const isLoading = useSelector((state) => state?.categoryData?.isLoading);
    const error = useSelector((state) => state?.categoryData?.error);
    
    const dispatch= useDispatch()
    useEffect(() => {
      dispatch(getAllCategory())
    }, [dispatch])
    // console.log(categories);
    
    

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow:6,
      slidesToScroll: 3,
      autoplay:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    
    };
  return (
    <>
    <div className="w-full ">
      <div className="my-10 mx-8 flex justify-between items-center m-auto">
        <div>
          <div className="flex mb-4 items-center ">
            <span className="p-2 h-8 bg-red-500 me-2"></span>
            <span className="text-red-500">Categories</span>
          </div>
          <h2 className="text-3xl font-semibold">Browse By Category</h2>
        </div>

        <div className="flex">
          <Link
            href="/ "
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
          </Link>
          <Link
            href="/"
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
          </Link>
        </div>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <div className='slider-container'>
  <Slider {...settings} className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-center">

          {categories?.map((product) => (
            <Link href={`/category/${product?.slug}`} key={product?.slug} className="m-4  p-4  text-center " >
              <div
                className=" rounded-sm px-2 py-4 cursor-pointer relative border hover:bg-red-500 hover:text-white "
              
              >
                <ClassIcon  className="w-8 h-8 m-2" />

               {/* Product Title */}
              <h3 className="text-lg font-bold py-2 ">
                {product.name.split(" ").slice(0, 1).join(" ")}
              </h3>
              </div>

            

            </Link>
          ))}  
          </Slider>
        </div>
      )}
    </div>
  </>
  )
}

export default Category