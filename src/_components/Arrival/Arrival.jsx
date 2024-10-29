import Image from "next/image";
import React from "react";
import playstationImage from "../../images/playstation.png"; // Replace with actual image paths
import womenImage from "../../images/womans.png";
import speakersImage from "../../images/speakers.png";
import perfumeImage from "../../images/perfume.png";

const Arrival = () => {
  return (
    <>
      <div>
        <div className="flex my-10 items-center ">
          <span className="p-2 h-8 bg-red-500 me-2"></span>
          <span className="text-red-500">Featured</span>
        </div>
        <h2 className="text-3xl font-semibold">New Arrival</h2>
      </div>
      <div className="lg:flex flex-row gap-4 p-4  my-6">
        {/* PlayStation 5 - Large item */}
        <div className="lg:w-1/2 relative bg-black">
          <Image
            src={playstationImage}
            className="imgg"
            alt="Women's Collections"
            layout="responsive"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-xl font-bold">PlayStation 5</h2>
            <p className="text-sm">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="mt-2 px-4 py-2 bg-white text-black">
              Shop Now
            </button>
          </div>
        </div>

        <div className="flex flex-col  lg:w-1/2  gap-4">
          {/* Women's Collections */}
          <div className=" relative  p-2">
            <Image
              src={womenImage}
              alt="Women's Collections"
              layout="responsive"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-xl font-bold">Women's Collections</h2>
              <p className="text-sm">
                Featured women collections that give you another vibe.
              </p>
              <button className="mt-2 px-4 py-2 bg-white text-black">
                Shop Now
              </button>
            </div>
          </div>

          <div className="flex space-x-4">
            {/* Speakers */}
            <div className=" relative p-2 bg-black">
              <Image
                src={perfumeImage}
                alt="Women's Collections"
                layout="responsive"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-xl font-bold">Speakers</h2>
                <p className="text-sm">Amazon wireless speakers</p>
                <button className="mt-2 px-4 py-2 bg-white text-black">
                  Shop Now
                </button>
              </div>
            </div>
            <div className=" relative p-2 bg-black">
              <Image
                src={speakersImage}
                className=""
                alt="Women's Collections"
                layout="responsive"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-xl font-bold">Perfume</h2>
                <p className="text-sm">GUCCI INTENSE OUD EDP</p>
                <button className="mt-2 px-4 py-2 bg-white text-black">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Arrival;
