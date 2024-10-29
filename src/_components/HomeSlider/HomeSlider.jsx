'use client'
import React from "react";
import Slider from "react-slick";

import AppleIcon from '@mui/icons-material/Apple';
import iphoneImage from '../../images/iphone.png'
import Image from 'next/image';



const HomeSlider = () => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      rows: 2,
      className: "center flex",
    
    }
  return (
    <>
      {/* <div className="slider-container">
      <Slider {...settings}> */}
      <div className="bg-black lg:w-4/5 w-full md:flex justify-center items-center lg:m-12 p-5 ">
                <div className='lg:w-1/2  text-white p-8  '>
                    <div className='flex items-center '>
                        <AppleIcon className='text-5xl me-2'/>
                        <p >iPhone 14 Series</p>
                    </div>
                    <h1 className='text-5xl font-semibold my-5'>Up to 10% <br /> off Voucher</h1>
                    <p className='underline-offset-4 '>{`Shop Now ->`}</p>
                </div>
                <div className='lg:w-1/2 bg-fuchsia-900 '>
                <Image src={iphoneImage}   width={'90%'}  alt="register image"/>
                </div>
            </div>


      {/* </Slider>
    </div> */}

            

    </>
  )
}

export default HomeSlider ;