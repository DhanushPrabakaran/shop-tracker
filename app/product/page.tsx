"use client";
import React, { useState } from "react";
import Image from "next/image";
import Img from "@/public/images/supermarket.webp";

// Define the type for grocery and food item details
interface FoodItem {
  id: number;
  name: string;
  category: string;
  description: string;
  weight: string;
  price: string;
  nutritionalInfo: string;
  productCode: string;
  dimensions?: {
    length?: string;
    height?: string;
    depth?: string;
  };
  composition?: string;
}

// Define the list of food and grocery items
const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Organic Apples",
    category: "Fruits",
    description: "Fresh and juicy organic apples, perfect for a healthy snack.",
    weight: "1 kg",
    price: "$3.99",
    nutritionalInfo: "Calories: 52, Fat: 0.2g, Carbs: 14g, Fiber: 2.4g, Sugar: 10g",
    productCode: "ORG-APP-01",
  },
  {
    id: 2,
    name: "Fresh Spinach",
    category: "Vegetables",
    description: "Rich and nutrient-dense spinach, ideal for salads and cooking.",
    weight: "500g",
    price: "$2.49",
    nutritionalInfo: "Calories: 23, Fat: 0.4g, Carbs: 3.6g, Fiber: 2.2g, Sugar: 0.4g",
    productCode: "FSP-SPN-02",
  },
  {
    id: 3,
    name: "Whole Wheat Bread",
    category: "Packaged Goods",
    description: "Healthy whole wheat bread, high in fiber and perfect for sandwiches.",
    weight: "500g",
    price: "$2.99",
    nutritionalInfo: "Calories: 250, Fat: 3.5g, Carbs: 43g, Fiber: 7g, Sugar: 5g",
    productCode: "WWB-500",
  },
  // Add more items as needed
];

const Page: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);
  const [showShipping, setShowShipping] = useState(false);
  const [showContact, setShowContact] = useState(false);

  // Handle item selection
  const handleItemSelect = (item: FoodItem) => {
    setSelectedItem(item);
  };

  // Toggle visibility
  const toggleVisibility = (setter: React.Dispatch<React.SetStateAction<boolean>>) => () => {
    setter(prev => !prev);
  };

  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
      {/* Desktop Images */}
      <div className="hidden md:block xl:w-2/6 lg:w-2/5 w-80">
        <Image className="w-full" alt="Supermarket" src={Img} width={100} height={100} />
        <Image className="mt-6 w-full" alt="Supermarket" src={Img} width={100} height={100} />
      </div>

      {/* Mobile Images */}
      <div className="md:hidden">
        <Image className="w-full" alt="Supermarket" src={Img} width={100} height={100} />
        <div className="flex items-center justify-between mt-3 space-x-4 overflow-y-scroll no-scrollbar ">
          {[...Array(4)].map((_, index) => (
            <Image
              key={index}
              alt={`Image ${index + 1}`}
              className="md:w-48 md:h-48 w-full"
              src={Img}
              width={100}
              height={100}
            />
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 mt-6 md:mt-0">
        {/* Food Item Selection */}
        <div className="border-b border-gray-200 pb-6">
          <p className="text-sm text-gray-600">Select a food item:</p>
          <div className="flex flex-wrap">
            {foodItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleItemSelect(item)}
                className="bg-gray-200 p-2 m-1 rounded hover:bg-gray-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Display Selected Item Details */}
        {selectedItem && (
          <>
            <div className="border-b border-gray-200 pb-6">
              <h1 className="text-xl lg:text-2xl font-semibold text-gray-800 mt-2">
                {selectedItem.name}
              </h1>
              <p className="text-base text-gray-600">Category : {selectedItem.category}</p>
              <p className="text-base text-gray-800 mt-2">Price : {selectedItem.price}</p>
            </div>

            <div className="py-4 border-b border-gray-200">
              <p className="text-base text-gray-800">Description</p>
              <p className="text-base text-gray-600 mt-2">{selectedItem.description}</p>
            </div>

            <div className="py-4 border-b border-gray-200">
              <p className="text-base text-gray-800">Nutritional Information</p>
              <p className="text-base text-gray-600 mt-2">{selectedItem.nutritionalInfo}</p>
            </div>

            {selectedItem.dimensions && (
              <div className="py-4 border-b border-gray-200">
                <p className="text-base text-gray-800">Dimensions</p>
                <p className="text-base text-gray-600 mt-2">
                  Length: {selectedItem.dimensions.length}, Height: {selectedItem.dimensions.height}, Depth: {selectedItem.dimensions.depth}
                </p>
              </div>
            )}

            {selectedItem.composition && (
              <div className="py-4 border-b border-gray-200">
                <p className="text-base text-gray-800">Composition</p>
                <p className="text-base text-gray-600 mt-2">{selectedItem.composition}</p>
              </div>
            )}

            <button
              className="w-full py-4 text-base text-white bg-primary-black hover:bg-gray-700 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
            >
              <svg className="mr-3" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.66699 4.83333V4.84166" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.333 11.5V11.5083" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Check availability in store
            </button>

            {/* Shipping and Returns */}
            <div className="border-t border-b py-4 mt-7 border-gray-200">
              <div onClick={toggleVisibility(setShowShipping)} className="flex justify-between items-center cursor-pointer">
                <p className="text-base text-gray-800">Shipping and returns</p>
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded" aria-label="show or hide">
                  <svg className={`transform ${showShipping ? "rotate-180" : "rotate-0"}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className={`pt-4 text-base text-gray-600 mt-4 pr-12 ${showShipping ? "block" : "hidden"}`}>
                You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are nonrefundable.
              </div>
            </div>

            {/* Contact Us */}
            <div className="border-b py-4 border-gray-200">
              <div onClick={toggleVisibility(setShowContact)} className="flex justify-between items-center cursor-pointer">
                <p className="text-base text-gray-800">Contact us</p>
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded" aria-label="show or hide">
                  <svg className={`transform ${showContact ? "rotate-180" : "rotate-0"}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className={`pt-4 text-base text-gray-600 mt-4 pr-12 ${showContact ? "block" : "hidden"}`}>
                If you have any questions on how to return your item to us, contact us.
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
