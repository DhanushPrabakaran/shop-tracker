import React from "react";
import Search from "./_components/Search";
import Image from "next/image";
import image from "@/public/images/supermarket.webp"
const Home = () => {
  return (
    <div className="text-black w-full min-h-screen justify-center items-center align-middle flex-col font-MintGrotesk ">
      <Search/>
      <div
      className=" flex flex-wrap w-full bg-black h-full ">
        <div
        className=""
        >
            <Image 
            src={image} 
            alt={""}
            width={100}
            />
        </div>
      </div>
    </div>
  );
};

export default Home;
