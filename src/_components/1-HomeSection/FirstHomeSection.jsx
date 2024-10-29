import React from 'react'
import HomeSideBar from '../HomeSideBar/HomeSideBar'
import HomeSlider from '../HomeSlider/HomeSlider'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const FirstHomeSection = () => {
  return (
    <div className='lg:flex justify-center items-center '> 
        <HomeSideBar />
        <HomeSlider />

    </div>
  )
}

export default FirstHomeSection