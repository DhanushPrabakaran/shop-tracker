import React from 'react'
import Image from "next/image";
import img1 from "@/public/images/supermarket.webp";
import { MdArrowOutward } from "react-icons/md";
const landingPage = () => {
  return (
    <div className="text-black w-full min-h-screen flex lg:flex-row flex-col font-MintGrotesk">
    <div className="h-screen flex flex-col items-center justify-center lg:w-1/2 relative ">
    <span className="absolute top-0 right-0  bg-primary w-full h-full bg-texture opacity-10 bg-contain">

    </span>
      {/* <span className="absolute top-0 right-0  bg-primary w-full h-full  grid grid-cols-8 grid-rows-8  ">
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
        <div className="border border-transparent hover:border-primary-black ease-linear duration-300 hover:bg-slate-100 hover:shadow"></div>
      </span> */}
      <div className="z-10 lg:ml-3">
        <h1 className=" res-heading-xl ">
          Hey <br />
          Make healthy life with fresh grocery
        </h1>
        <a
          href="/"
          className="border-primary-black relative flex content-center border  px-3 py-[10px] leading-[11px] res-text-lg group w-fit mt-3"
        >
          <span className="z-10 group-hover:text-primary-white ">
            CONTACT
          </span>
          <span className=" absolute w-full   bg-primary-black h-0 top-1/2 left-0 -z-40 group-hover:h-full group-hover:top-0 duration-500 ease-in-out"></span>
        </a>
      </div>
    </div>

    <div className="lg:w-1/2 h-screen  flex flex-row">
      <div className="relative h-screen flex-grow w-[25vw]">
        <Image
          src={img1}
          alt={""}
          className=" w-full bg-cover h-full  object-cover rounded-xl py-2 hover:object-right-top duration-1000"
        />
        <MdArrowOutward
          className="absolute right-0 top-0 fill-transparent "
          size={"12vh"}
        />
      </div>

      <div className="flex-grow h-screen lg:w-[25vw]">
        <div className=" relative h-[50vh]">
          <Image
            src={img1}
            alt={""}
            className=" w-full bg-cover h-full  object-cover rounded-xl p-1 pt-2"
          />

          <MdArrowOutward
            className=" absolute fill-primary-white right-0 top-0"
            size={70}
          />
        </div>
        <div className="h-[50vh]">
          <div className="border-primary-black relative flex content-center res-text-lg group w-full h-full">
            <span className="z-10 group-hover:text-primary-white ">
              <Image
                src={img1}
                alt={""}
                className=" w-full bg-cover h-full  object-cover rounded-xl p-1 pb-2"
              />
            </span>
            <span className=" absolute w-full   bg-primary-white h-0 top-1/2 left-0 group-hover:h-full group-hover:top-0 duration-500 ease-in-out z-40 text-transparent hover:text-primary-black rounded-xl text-center res-heading-base align-middle flex justify-center items-center uppercase ">
              <span>Make healthy life with fresh grocery</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default landingPage
