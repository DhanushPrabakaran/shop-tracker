"use client";
import React, { useState } from "react";
// import Image from "next/image";
// import cam from "@/public/cam.svg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="header flex flex-row w-full justify-between lg:px-12 px-8 py-3 h-[64px] font-MintGrotesk text-primary-black ">
      <ul className="gap-3 items-center lg:flex hidden text-[11px]">
        <a
          href="/"
          className="border-primary-black relative
           lg:flex hidden 
           content-center border rounded-full px-3 py-[10px] leading-[11px] group"
        >
          <span className="z-10 group-hover:text-primary-white ">HOME</span>
          <span className=" absolute w-full  rounded-full bg-primary-black h-0 top-1/2 left-0 -z-40 group-hover:h-full group-hover:top-0 duration-500 ease-in-out"></span>
        </a>
        <a
          href="/"
          className="border-primary-black relative
           lg:flex hidden 
           content-center border rounded-full px-3 py-[10px] leading-[11px] group"
        >
          <span className="z-10 group-hover:text-primary-white ">CATALOG</span>
          <span className=" absolute w-full  rounded-full bg-primary-black h-0 top-1/2 left-0 -z-40 group-hover:h-full group-hover:top-0 duration-500 ease-in-out"></span>
        </a>
        <a
          href="/"
          className="border-primary-black relative
           lg:flex hidden 
           content-center border rounded-full px-3 py-[10px] leading-[11px] group"
        >
          <span className="z-10 group-hover:text-primary-white ">SHOP</span>
          <span className=" absolute w-full  rounded-full bg-primary-black h-0 top-1/2 left-0 -z-40 group-hover:h-full group-hover:top-0 duration-500 ease-in-out"></span>
        </a>
      </ul>
      <h1 className="text-3xl  text-logo px-4 h-full font-bold uppercase ">ShopTraker</h1>
      <ul className=" items-center flex text-xs gap-3">
        <a
          href="/"
          className="border-primary-black relative lg:flex hidden content-center border rounded-full px-3 py-[10px] leading-[11px] group"
        >
          <span className="z-10 group-hover:text-primary-white ">CONTACT</span>
          <span className=" absolute w-full  rounded-full bg-primary-black h-0 top-1/2 left-0 -z-40 group-hover:h-full group-hover:top-0 duration-500 ease-in-out"></span>
        </a>
        <a
          href="/"
          className="border-primary-black relative
           lg:flex hidden 
           content-center border rounded-full px-3 py-[10px] leading-[11px] group"
        >
          <span className="z-10 group-hover:text-primary-white ">
            {" "}
            ABOUT US
          </span>
          <span className=" absolute w-full  rounded-full bg-primary-black h-0 top-1/2 left-0 -z-40 group-hover:h-full group-hover:top-0 duration-500 ease-in-out"></span>
        </a>

        {/* Menu Toggle Button for Mobile */}
        <button
          className="
          lg:hidden 
          flex items-center border-primary-black content-center border rounded-full px-3 py-[10px] leading-[11px]"
          onClick={toggleMenu}
        >
          MENU
        </button>
      </ul>
      {/* Sliding Menu */}
      <div
        className={`fixed top-0 z-50 bg-black right-[35%] w-64 h-full bg-transparent  transform ${
          isMenuOpen ? "translate-y-full" : "-translate-y-96"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <ul className="flex flex-col items-center mt-9 text-white bg-opacity-95 w-[70vw]  bg-primary-black rounded-2xl z-40">
          <a
            href="/"
            className="border-primary-black relative
           lg:flex hidden 
           content-center border rounded-full px-3 py-[10px] leading-[11px] group"
          >
            <span className="z-10 group-hover:text-primary-white ">
              CONTACT
            </span>
            <span className=" absolute w-full  rounded-full bg-primary-black h-0 top-1/2 left-0 -z-40 group-hover:h-full group-hover:top-0 duration-500 ease-in-out"></span>
          </a>
          <a
            href="/"
            className="border-primary-black relative
           lg:flex hidden 
           content-center border rounded-full px-3 py-[10px] leading-[11px] group"
          >
            <span className="z-10 group-hover:text-primary-white ">
              CONTACT
            </span>
            <span className=" absolute w-full  rounded-full bg-primary-black h-0 top-1/2 left-0 -z-40 group-hover:h-full group-hover:top-0 duration-500 ease-in-out"></span>
          </a>
          <a
            href="/"
            className="border-primary-black relative
           lg:flex hidden 
           content-center border rounded-full px-3 py-[10px] leading-[11px] group"
          >
            <span className="z-10 group-hover:text-primary-white ">
              CONTACT
            </span>
            <span className=" absolute w-full  rounded-full bg-primary-black h-0 top-1/2 left-0 -z-40 group-hover:h-full group-hover:top-0 duration-500 ease-in-out"></span>
          </a>
          <a
            href="/"
            className="border-primary-black relative
           lg:flex hidden 
           content-center border rounded-full px-3 py-[10px] leading-[11px] group"
          >
            <span className="z-10 group-hover:text-primary-white ">
              CONTACT
            </span>
            <span className=" absolute w-full  rounded-full bg-primary-black h-0 top-1/2 left-0 -z-40 group-hover:h-full group-hover:top-0 duration-500 ease-in-out"></span>
          </a>
          <a
            href="/"
            className="border-primary-black relative
           lg:flex hidden 
           content-center border rounded-full px-3 py-[10px] leading-[11px] group"
          >
            <span className="z-10 group-hover:text-primary-white ">
              CONTACT
            </span>
            <span className=" absolute w-full  rounded-full bg-primary-black h-0 top-1/2 left-0 -z-40 group-hover:h-full group-hover:top-0 duration-500 ease-in-out"></span>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
