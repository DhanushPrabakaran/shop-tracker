import Image from "next/image";
import img1 from "@/public/images/supermarket.webp";
import { BsArrowUpRightSquare } from "react-icons/bs";

const Home = () => {
  return (
    <div className="text-black w-full min-h-screen flex lg:flex-row flex-col font-MintGrotesk">
      <div className="h-screen flex flex-col items-start justify-center lg:w-1/2 mx-3">
        <h1 className=" res-heading-xl ">
          Hey <br />
          Make healthy life with fresh grocery
        </h1>
        <a
          href="/"
          className="border-primary-black relative flex content-center border  px-3 py-[10px] leading-[11px] res-text-lg group w-fit mt-3"
        >
          <span className="z-10 group-hover:text-primary-white ">CONTACT</span>
          <span className=" absolute w-full   bg-primary-black h-0 top-1/2 left-0 -z-40 group-hover:h-full group-hover:top-0 duration-500 ease-in-out"></span>
        </a>
      </div>

      <div
        className="lg:w-1/2  relative h-screen
      "
      >
        <Image
          src={img1}
          alt={""}
          className=" w-full bg-cover h-full  object-cover"
        />
        <BsArrowUpRightSquare className="absolute right-0 top-0 " size={70} />
      </div>
    </div>
  );
};

export default Home;
