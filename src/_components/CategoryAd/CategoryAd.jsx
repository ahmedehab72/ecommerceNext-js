import React from "react";
import Image from "next/image";
import supImage from "../../images/sup.png";

const CategoryAd = () => {
  return (
    <div className="bg-black  w-full md:flex justify-between items-center my-10 ">
      <div className="md:w-1/2  text-white p-8  ">
          <h2 className="text-green-600">Categories</h2>
        
        <h1 className="text-5xl font-semibold my-5">
        Enhance Your <br /> Music Experience
        </h1>
        <div className="flex items-center justify-start my-5">
          <div className="bg-white h-16 w-16 rounded-full p-2 me-2 flex items-center justify-center "><p className="text-sm text-center text-black">23 <br /> hours</p> </div>
          <div className="bg-white h-16 w-16 rounded-full p-2 me-2 flex items-center justify-center "><p className="text-sm text-center text-black">23 <br /> hours</p> </div>
          <div className="bg-white h-16 w-16 rounded-full p-2 me-2 flex items-center justify-center "><p className="text-sm text-center text-black">23 <br /> hours</p> </div>
          <div className="bg-white h-16 w-16 rounded-full p-2 me-2 flex items-center justify-center "><p className="text-sm text-center text-black">23 <br /> hours</p> </div>
        </div>
      <button className=" text-white px-6 py-2  bg-green-500 hover:bg-green-600"> Buy Now</button>
      </div>
      <div className="md:w-1/2  ">
        <Image src={supImage} className="h-[350px] w-full"  alt="login image" />
      </div>
    </div>
  );
};

export default CategoryAd;
