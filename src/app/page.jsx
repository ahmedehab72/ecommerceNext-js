'use client'
import FirstHomeSection from "@/_components/1-HomeSection/FirstHomeSection";
import Products from "@/app/products/page";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TodayProducts from "./todayProducts/page";
import Category from "./category/page";
import CategoryAd from "@/_components/CategoryAd/CategoryAd";
import MonthProducts from "./monthProducts/page";
import Arrival from "@/_components/Arrival/Arrival";
import LastSection from "@/_components/LastSection/LastSection";



export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('fakeUser');
    if (!token) {
      router.push('/login'); 
    }
  }, []);
  return (
    <>
    <div className="fix-height lg:w-[85%] mx-auto">
          <FirstHomeSection />
          <TodayProducts />
          <Category />
          <MonthProducts />
          <CategoryAd />
          <Products />
          <Arrival />
          <LastSection />
    </div>

    </>
  );
}
