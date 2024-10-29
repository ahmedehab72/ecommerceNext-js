import ProductDetailsAction from "@/_components/ProductDetailsActions/ProductDetailsActions";
import ProductsDetailsRelative from "@/_components/ProductsDetailsRelative/ProductsDetailsRelative";
import Slider from "@/_components/Slider/Slider";
import Link from "next/link";
import React from "react";

const MonthProductDetails = async ({ params }) => {
  const response = await fetch(
    `https://dummyjson.com/products/${params.productsDetails}`
  );
  if (!response.ok) {
    throw new Error("failed to fetch data ");
  }
  const products = await response?.json();
  // console.log(products);

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
            / monthProducts{" "}
          </Link>
          <Link href={` `} className="font-light ms-1 hover:text-gray-600">
            {" "}
            / {products.title}{" "}
          </Link>
        </div>
      </section>

      <div className="lg:flex items-center justify-between">
        <Slider products={products} />

        <ProductDetailsAction products={products} />
      </div>
      <ProductsDetailsRelative  products={products} />

    </section>
  );
};

export default MonthProductDetails;
