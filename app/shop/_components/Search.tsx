import React from 'react'
import { TbShoppingCartSearch } from "react-icons/tb";
const Search = () => {
  return (
    <div className="w-full bg-black h-[40vh] text-primary-white flex justify-center flex-col items-center">
        <div className="res-heading-lg  ">Find here...</div>
        <form
          className="  w-[70vw] max-w-md  flex flex-row justify-center items-center my-2"
          action={async () => {
            "use server";
            console.log("hey");
          }}
          method="get"
        >
          <input
            type="text"
            name="product"
            placeholder="search here..."
            id="product"
            className="focus:outline-none p-2 px-3 w-full text-primary-black"
          />
          <button type="submit" value="submit">
            <TbShoppingCartSearch className=" h-full w-10 p-2 border-2 focus:border-green-200 placeholder:justify-center border-primary-white " />
          </button>
        </form>
        <div className=" w-[80vw] flex flex-row justify-center ">
          <button className=" border text-xs  px-2 py-1 bg-primary-black text-primary-white m-1 rounded-full uppercase">
            Biriyani
          </button>
          <button className=" border text-xs  px-2 py-1 bg-primary-black text-primary-white m-1 rounded-full uppercase">
            Biriyani
          </button>
          <button className=" border text-xs  px-2 py-1 bg-primary-black text-primary-white m-1 rounded-full uppercase">
            Biriyani
          </button>
          <button className=" border text-xs  px-2 py-1 bg-primary-black text-primary-white m-1 rounded-full uppercase">
            Biriyani
          </button>
          <button className=" border text-xs  px-2 py-1 bg-primary-black text-primary-white m-1 rounded-full uppercase">
            Biriyani
          </button>
        </div>
      </div>
  )
}

export default Search
