"use client";
import React, { useState } from "react";

import { useRouter } from "next/router";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="header flex flex-row w-full justify-between lg:px-12 px-8 py-3 h-[64px] font-MintGrotesk text-primary-black ">
      <ul className="gap-3 items-center lg:flex  hidden text-[11px]">
        <a
          href="/"
          className="border-primary-black relative
           lg:flex hidden 
           content-center border  px-3 py-[10px] leading-[11px] group"
        >
          <span className="z-10 group-hover:text-primary-white ">HOME</span>
          <span className=" absolute w-full   bg-primary-black h-0 top-1/2 left-0 -z-40 group-hover:h-full group-hover:top-0 duration-500 ease-in-out"></span>
        </a>
        <a
          href="/upload"
          className="border-primary-black relative
           lg:flex hidden 
           content-center border  px-3 py-[10px] leading-[11px] group"
        >
          <span className="z-10 group-hover:text-primary-white ">UPLOAD</span>
          <span className=" absolute w-full   bg-primary-black h-0 top-1/2 left-0 -z-40 group-hover:h-full group-hover:top-0 duration-500 ease-in-out"></span>
        </a>
        <a
          href="/shop"
          className="border-primary-black relative
           lg:flex hidden 
           content-center border  px-3 py-[10px] leading-[11px] group"
        >
          <span className="z-10 group-hover:text-primary-white ">SHOP</span>
          <span className=" absolute w-full   bg-primary-black h-0 top-1/2 left-0 -z-40 group-hover:h-full group-hover:top-0 duration-500 ease-in-out"></span>
        </a>
      </ul>
      <h1 className="text-3xl  text-logo px-4 h-full font-bold uppercase ">
        ShopTraker
      </h1>
      <ul className=" items-center flex text-xs gap-3">
        <a
          href="/"
          className="border-primary-black relative lg:flex hidden content-center border  px-3 py-[10px] leading-[11px] group"
        >
          <span className="z-10 group-hover:text-primary-white ">CONTACT</span>
          <span className=" absolute w-full   bg-primary-black h-0 top-1/2 left-0 -z-40 group-hover:h-full group-hover:top-0 duration-500 ease-in-out"></span>
        </a>
        <a
          href="/"
          className="border-primary-black relative
           lg:flex hidden 
           content-center border  px-3 py-[10px] leading-[11px] group"
        >
          <span className="z-10 group-hover:text-primary-white ">
            {" "}
            ABOUT US
          </span>
          <span className=" absolute w-full   bg-primary-black h-0 top-1/2 left-0 -z-40 group-hover:h-full group-hover:top-0 duration-500 ease-in-out"></span>
        </a>

        {/* Menu Toggle Button for Mobile */}
        <button
          className="
          lg:hidden flex items-center border-primary-black content-center border  px-3 py-[10px] leading-[11px] z-50"
          onClick={toggleMenu}
        >
          MENU
        </button>
      </ul>
      {/* Sliding Menu */}
      <div
        className={`  w-full  align-middle fixed z-50 bg-primary-white transform left-0 ${
          isMenuOpen ? "translate-y-full" : "-translate-y-96"
        } transition-transform duration-300 ease-in-out lg:hidden `}
      >
        <ul className="absolute  flex flex-col items-center mt-[12vh] text-black  w-full  bg-white z-40  rounded-lg border border-primary-black">
          <a
            href="/"
            className="relative
           lg:flex  
           content-center  rounded-lg  px-3 py-[10px] leading-[11px] group w-full text-center h-10 "
          >
            <span className="z-10 group-hover:text-primary-white ">HOME</span>
            <span className=" absolute w-full  rounded-lg bg-primary-black h-0 top-1/2 left-0 -z-40 group-hover:h-full group-hover:top-0 duration-500 ease-in-out"></span>
          </a>
          <a
            href="/"
            className="relative
           lg:flex  
           content-center   px-3 py-[10px] leading-[11px] group w-full text-center h-10"
          >
            <span className="z-10 group-hover:text-primary-white ">
              CATALOG
            </span>
            <span className=" absolute w-full rounded-lg  bg-primary-black h-0 top-1/2 left-0 -z-40 group-hover:h-full group-hover:top-0 duration-500 ease-in-out"></span>
          </a>
          <a
            href="/shop"
            className="relative
           lg:flex  
           content-center   px-3 py-[10px] leading-[11px] group w-full text-center h-10"
          >
            <span className="z-10 group-hover:text-primary-white ">SHOP</span>
            <span className=" absolute w-full  rounded-lg bg-primary-black h-0 top-1/2 left-0 -z-40 group-hover:h-full group-hover:top-0 duration-500 ease-in-out"></span>
          </a>
          <a
            href="/upload"
            className="relative
           lg:flex  
           content-center   px-3 py-[10px] leading-[11px] group w-full text-center h-10"
          >
            <span className="z-10 group-hover:text-primary-white uppercase ">
              Upload
            </span>
            <span className=" absolute w-full  rounded-lg bg-primary-black h-0 top-1/2 left-0 -z-40 group-hover:h-full group-hover:top-0 duration-500 ease-in-out"></span>
          </a>
          <a
            href="/product"
            className="relative
           lg:flex  
           content-center   px-3 py-[10px] leading-[11px] group w-full text-center h-10"
          >
            <span className="z-10 group-hover:text-primary-white uppercase">
              Products
            </span>
            <span className=" absolute w-full  rounded-lg bg-primary-black h-0 top-1/2 left-0 -z-40 group-hover:h-full group-hover:top-0 duration-500 ease-in-out"></span>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
