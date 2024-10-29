"use client";

import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";

const HomeSideBar = () => {
  return (
    <>
      <Sidebar aria-label=" multi-level dropdown example"
      className="xl:w-1/5  lg:w-1/4 w-full " >
        <Sidebar.Items className="text-start">
          <Sidebar.ItemGroup >
           
            <Sidebar.Collapse  label="Woman’s Fashion">
              <Sidebar.Item href="">Products</Sidebar.Item>
              <Sidebar.Item href="">Sales</Sidebar.Item>
          
            </Sidebar.Collapse>
            <Sidebar.Collapse  label="Men’s Fashion">
              <Sidebar.Item href="">Products</Sidebar.Item>
              <Sidebar.Item href="">Sales</Sidebar.Item>
              <Sidebar.Item href="">Refunds</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Item href="" className="text-start flex justify-start">
            Electronics
            </Sidebar.Item>
            <Sidebar.Item href="" className="text-start flex justify-start" >
            Home & Lifestyle
            </Sidebar.Item>
            <Sidebar.Item href="" className="text-start flex justify-start" >
            Medicine
            </Sidebar.Item>
            <Sidebar.Item href="" className="text-start flex justify-start" >
            Sports & Outdoor
            </Sidebar.Item>
            <Sidebar.Item href="" className="text-start flex justify-start" >
            Baby’s & Toys
            </Sidebar.Item>
            <Sidebar.Item href="" className="text-start flex justify-start" >
            Groceries & Pets
            </Sidebar.Item>
            <Sidebar.Item href="" className="text-start flex justify-start" >
            Health & Beauty
            </Sidebar.Item>
     
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      
    </>
  );
};

export default HomeSideBar;
