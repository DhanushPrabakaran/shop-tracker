import React from "react";
import Image from "next/image";
import iam from "@/public/images/supermarket.webp";
const Cart = () => {
  return (
    <div className=" relative w-[300px] h-fit p-3 bg-primary-black m-1 rounded-lg font-MintGrotesk font-bold">
      <span className="  absolute bg-black "></span>

      <span className=" bg-primary-black">
        <Image className="rounded-t-lg"
         src={iam} alt="" 
         placeholder="blur"	/>

        <div className="pt-3">
          <a href="#">
            <h5 className="res-heading-lg  text-primary-white text-justify">
              Cucumer
            </h5>
          </a>
          <p className="mb-3 font-normal text-slate-300">
            pandian store,chennai
          </p>
          <div
          className=" w-full flex justify-between align-middle items-center" >
          <a href="/" className="border-primary-white relative flex content-center border  px-3 py-[10px] leading-[11px] res-text-lg group w-fit ">
            <span className="z-10 group-hover:text-primary-black text-primary-white ">Buy</span>
            <span className=" absolute w-full  z-0  bg-primary-white h-0 top-1/2 left-0  group-hover:h-full group-hover:top-0 duration-500 ease-in-out"></span>
          </a>
          
            <div className="text-primary-white "><span className="text-xl" >$</span>200</div>
            
          </div>
        </div>
      </span>
    </div>
  );
};

export default Cart;
