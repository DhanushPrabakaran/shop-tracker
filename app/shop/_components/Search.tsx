"use client";
import React, { useState } from "react";
import Option from "./Options";
import { TbShoppingCartSearch } from "react-icons/tb";

const Search: React.FC = () => {
  const [data, setData] = useState<string>("");

  const Grocaries: string[] = [
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

  // // Filter groceries based on the search term
  // const filteredGrocaries = Grocaries.filter((item) =>
  //   item.toLowerCase().includes(data.toLowerCase())
  // );

  // Function to handle option click
  const handleOptionClick = (value: string) => {
    setData(value); // Update search input with the clicked option value
  };

  // Handler for input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  return (
    <div className="w-full bg-black h-full min-h-[40vh] text-primary-white flex justify-center flex-col items-center">
      <div className="res-heading-lg">Find here...</div>
      <form
        className="w-[70vw] max-w-md flex flex-row justify-center items-center my-2 border"
        method="get"
      >
        <input
          type="text"
          name="product"
          placeholder="search here..."
          id="product"
          value={data}
          onChange={handleInputChange}
          className="focus:outline-none p-2 px-3 w-full text-primary-black"
        />
        <button
          className="flex h-full items-center"
          type="submit"
          value="submit"
        >
          <TbShoppingCartSearch
            className="h-full w-full mx-1 fill-primary-white"
            size={55}
          />
          <div className="mx-1">Search</div>
        </button>
      </form>
      <div className="w-[80vw] flex flex-row justify-center flex-wrap">
        {Grocaries.map((item) => (
          <Option
            key={item} // Use the item itself as the key
            j={item}
            onClick={() => handleOptionClick(item)} // Pass the click handler
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
