import React from "react";
import Search from "./_components/Search";
import Image from "next/image";
import image from "@/public/images/supermarket.webp";
import CarouselElement from "@/app/shop/_components/carouselElement";
import Cart from "./_components/Cart"
const Home = () => {
  return (
    <div className="text-black w-full min-h-screen justify-center items-center align-middle flex-col font-MintGrotesk ">
      
      <Search />
      <div className="flex flex-wrap w-full h-full justify-around ">
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
      </div>
    </div>
  );
};

export default Home;
