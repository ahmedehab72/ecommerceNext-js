import React from "react";
import Image from "next/image";
import storyImage from "../../images/story.png";
import Link from "next/link";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CurtainsClosedIcon from "@mui/icons-material/CurtainsClosed";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import personOne from '../../images/person1.png'
import personTwo from '../../images/person2.png'
import personThree from "../../images/person3.png";
import LastSection from "@/_components/LastSection/LastSection";
const About = () => {
  return (
    <section className="w-[85%] mx-auto">
      <section>
        <div className="flex items-center justify-start my-8 ms-16 ">
          <Link
            href={"/"}
            className="font-light text-gray-400 hover:text-gray-600"
          >
            Home{" "}
          </Link>
          <Link href={"/about"} className="font-light ms-1 hover:text-gray-600">
            {" "}
            / About{" "}
          </Link>
        </div>
      </section>
      <section className="lg:flex flex-row  justify-between items-center my-12">
        <div className="lg:w-1/2 p-4 ">
          <h1 className="text-3xl font-bold text-gray-900">Our Story</h1>
          <p className="text-gray-600  my-4">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p className="text-gray-600 ">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="lg:w-1/2 p-4 ">
          <Image src={storyImage} alt="story image" className="w-full" />
        </div>
      </section>
      <section className="flex md:flex-row flex-col justify-around items-center my-14 ">
        <div className="text-center p-4  m-2 hover:text-white hover:bg-red-500">
          <PointOfSaleIcon className="h-14 w-14 rounded-full bg-slate-800 text-white p-2 text-center mb-3" />
          <h2 className="my-2 font-semibold"> 10.5k </h2>
          <p>Sallers active our site</p>
        </div>
        <div className="text-center p-4  m-2 bg-red-400 hover:text-white hover:bg-red-500">
          <AttachMoneyIcon className="h-14 w-14 rounded-full bg-slate-800 text-white p-2 text-center mb-3" />
          <h2 className="my-2 font-semibold">33k</h2>
          <p>Mopnthly Produduct Sale</p>
        </div>
        <div className="text-center p-4  m-2 hover:text-white hover:bg-red-500">
          <CurtainsClosedIcon className="h-14 w-14 rounded-full bg-slate-800 text-white p-2 text-center mb-3" />
          <h2 className="my-2 font-semibold">45.5k</h2>
          <p>Customer active in our site</p>
        </div>
        <div className="text-center p-4 m-2   hover:text-white hover:bg-red-500">
          <LocalMallIcon className="h-14 w-14 rounded-full bg-slate-800 text-white p-2 text-center mb-3" />
          <h2 className="my-2 font-semibold">25k</h2>
          <p>Anual gross sale in our site</p>
        </div>
      </section>
      <section className="lg:flex flex-row  justify-between items-center my-16">
        
        <div  className="lg:w-1/3   "> 

          <Image
            src={personOne}
            alt="person one"
            className=" w-[90%]"
          />
          <h3  className="text-2xl my-2 font-semibold">Tom Cruise</h3>
          <p>Founder & Chaiman</p>
          <div className="flex justify-start items-center my-4">
            <TwitterIcon />
            <InstagramIcon className="mx-2"/>
            <LinkedInIcon />
          </div>
        </div>
        
        <div className="lg:w-1/3  ">
          <Image
            src={personTwo}
            alt="person two"
            className=" w-[90%]"
          />
          <h3  className="text-2xl my-2 font-semibold">Emma Watson</h3>
          <p>Managing Director</p>
          <div className="flex justify-start items-center my-4">
            <TwitterIcon />
            <InstagramIcon className="mx-2" />
            <LinkedInIcon />
          </div>
        </div>
        
        <div  className="lg:w-1/3   ">
          <Image
            src={personThree}
            alt="person three"
            className=" w-[90%]"
          />
          <h3  className="text-2xl my-2 font-semibold">Will Smith</h3>
          <p>Product Designer</p>
          <div className="flex justify-start items-center my-4">
            <TwitterIcon />
            <InstagramIcon className="mx-2"/>
            <LinkedInIcon />
          </div>
        </div>
      </section>
      <LastSection />
    </section>
  );
};

export default About;
