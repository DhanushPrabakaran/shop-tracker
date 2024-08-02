import React from "react";
import Image from "next/image";
import shop1 from "@/public/images/supermarket.webp";
import shop2 from "@/public/images/supermarket.webp";
import shop3 from "@/public/images/supermarket.webp";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen h-full bg-white text-primary-black font-MintGrotesk justify-center items-center flex flex-col "
    >
      <div className="max-w-[80vw] flex flex-col items-center  justify-center gap-14 ">
        <div className="font-roslindale  res-heading-2xl w-full text-center flex flex-wrap justify-center items-center space-x-2 ">
          <div className="">Introducing</div>
          <div className="flex flex-col items-end">
            <span className=" flex  lg:w-[6vw] lg:h-[8vw] max-md:w-[10vw] max-md:h-[10vw] max-sm:w-[12vw] max-sm:h-[12vw]">
              <Image
                className="   hover:scale-150 hover:rotate-2 duration-150  hover:w-24 object-cover object-right-bottom"
                src={shop1}
                width={80}
                height={80}
                alt={""}
              />
            </span>
          </div>
          <div className="">ShopTracker</div>
          <div className="flex flex-col items-end">
            <span className=" flex  lg:w-[6vw] lg:h-[8vw] max-md:w-[10vw] max-md:h-[10vw] max-sm:w-[12vw] max-sm:h-[12vw]">
              <Image
                className="hover:scale-150 hover:rotate-2 duration-150  hover:w-24 object-cover object-right-bottom"
                src={shop2}
                width={80}
                height={80}
                alt={""}
              />
            </span>
          </div>
          <div className="">- Your Real-Time Shopping Assistant</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div className="flex flex-col items-end">
            <span className=" flex  lg:w-[6vw] lg:h-[8vw] max-md:w-[10vw] max-md:h-[10vw] max-sm:w-[12vw] max-sm:h-[12vw]">
              <Image
                className=" hover:scale-150 hover:rotate-2 duration-150 hover:w-24 object-cover object-right-bottom"
                src={shop3}
                width={80}
                height={80}
                alt={""}
              />
            </span>
          </div>
        </div>
        <p className=" text-center text-base ">
          ShopTracker is an innovative platform designed to help you stay updated
          with the latest product details and prices at your favorite shops in real-time. 
          Leveraging the power of crowdsourcing, our platform enables users to 
          pin temporary shop locations, including street vendors and small moving stalls, 
          ensuring you never miss out on a great deal. Join our community today and 
          make shopping smarter and more efficient.
        </p>
        <button className=" border text-sm  px-3 py-3 bg-primary-black text-primary-white">
          LEARN MORE
        </button>
      </div>
    </section>
  );
};

export default About;
