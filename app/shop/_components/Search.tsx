"use client";
import React from "react";
import Option from "./Options";
import { TbShoppingCartSearch } from "react-icons/tb";
const Search = () => {
  const Grocaries: String[] = [
    "sugar",
    "tea",
    "salt",
    "spices",
    "bread",
    "butter",
    "milk",
    "flour",
    "rice",
    "pulses",
    "tomato",
    "potato",
    "eggs",
    "apples",
    "bananas",
  ];
  return (
    <div className="w-full bg-black h-full min-h-[40vh] text-primary-white flex justify-center flex-col items-center">
      <div className="res-heading-lg  ">Find here...</div>
      <form
        className="  w-[70vw] max-w-md  flex flex-row justify-center items-center my-2 border"
        // action={}
        method="get"
      >
        <input
          type="text"
          name="product"
          placeholder="search here..."
          id="product"
          className="focus:outline-none p-2 px-3 w-full text-primary-black"
        />
        <button
          className="   flex h-full items-center "
          type="submit"
          value="submit"
        >
          <TbShoppingCartSearch
            className=" h-full w-full mx-1 fill-primary-white"
            size={55}
          />
          <div className="mx-1">Search</div>
        </button>
      </form>
      <div className="w-[80vw] flex flex-row justify-center flex-wrap ">
        {Grocaries.map((i) => (
          <Option 
          key={Grocaries.indexOf(i)}
          j={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
