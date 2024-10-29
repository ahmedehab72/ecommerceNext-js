import Slider from "@/_components/Slider/Slider";
import SliderTodayProducts from "@/_components/SliderTodayProducts/SliderTodayProducts";
import TodayProductsAction from "@/_components/TodayProductsActions/TodayProductsActions";
import Link from "next/link";
import React from "react";

const TodayProductsDetails = async ({ params }) => {
    console.log(params);
    
  const response = await fetch(
    `https://dummyjson.com/recipes/${params.todayProductsDetails}`
  );
  
  if (!response.ok) {
    throw new Error("failed to fetch data ");
  }
  const products = await response?.json();
//   console.log(products);

  return (
    <section className="fix-height mb-12 lg:w-[85%] mx-auto ">
      <section>
        <div className="flex items-center justify-start my-8 ms-16 ">
          <Link
            href={"/"}
            className="font-light text-gray-400 hover:text-gray-600"
          >
            Home{" "}
          </Link>
          <Link href={"/"} className="font-light ms-1 hover:text-gray-600">
            {" "}
            / TodayProducts{" "}
          </Link>
          <Link href={` `} className="font-light ms-1 hover:text-gray-600">
            {" "}
            / {products.name}{" "}
          </Link>
        </div>
      </section>

      <div className="lg:flex items-center justify-between">

        <SliderTodayProducts  products={products} />

        <TodayProductsAction products={products} />

      </div>

    </section>
  );
};

export default TodayProductsDetails;
