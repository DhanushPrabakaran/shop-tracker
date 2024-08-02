// components/UploadForm.tsx
import React, { useState } from "react";

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

const UploadForm = () => {
  const [foodItem, setFoodItem] = useState<FoodItem>({
    id: 0,
    name: "",
    category: "",
    description: "",
    weight: "",
    price: "",
    nutritionalInfo: "",
    productCode: "",
    dimensions: {
      length: "",
      height: "",
      depth: "",
    },
    composition: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFoodItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-5 bg-primary-white border border-primary-black text-primary-black rounded-lg">
      <h2 className="text-2xl font-bold mb-5">Upload Grocery Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1">Product Name</label>
          <input type="text" id="name" name="name" value={foodItem.name} onChange={handleChange} className="p-2 bg-primary-white border-2 border-primary-black text-primary-black rounded-md" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="category" className="mb-1">Category</label>
          <input type="text" id="category" name="category" value={foodItem.category} onChange={handleChange} className="p-2 bg-primary-white text-primary-black rounded-md border-2 border-primary-black" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="mb-1">Description</label>
          <textarea id="description" name="description" value={foodItem.description} onChange={handleChange} className="p-2 bg-primary-white text-primary-black rounded-md border-2 border-primary-black" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="weight" className="mb-1">Weight</label>
          <input type="text" id="weight" name="weight" value={foodItem.weight} onChange={handleChange} className="p-2 bg-primary-white text-primary-black rounded-md border-2 border-primary-black" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price" className="mb-1">Price</label>
          <input type="text" id="price" name="price" value={foodItem.price} onChange={handleChange} className="p-2 bg-primary-white text-primary-black rounded-md border-2 border-primary-black" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="nutritionalInfo" className="mb-1">Nutritional Info</label>
          <input type="text" id="nutritionalInfo" name="nutritionalInfo" value={foodItem.nutritionalInfo} onChange={handleChange} className="p-2 bg-primary-white text-primary-black rounded-md border-2 border-primary-black" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="productCode" className="mb-1">Product Code</label>
          <input type="text" id="productCode" name="productCode" value={foodItem.productCode} onChange={handleChange} className="p-2 bg-primary-white text-primary-black rounded-md border-2 border-primary-black" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dimensions" className="mb-1">Dimensions (L x H x D)</label>
          <input type="text" id="dimensions" name="dimensions" value={foodItem.dimensions?.length} onChange={(e) => setFoodItem((prev) => ({
            ...prev,
            dimensions: {
              ...prev.dimensions,
              length: e.target.value,
            },
          }))} placeholder="Length" className="p-2 bg-primary-white text-primary-black rounded-md mb-1 border-2 border-primary-black" />
          <input type="text" id="dimensions" name="dimensions" value={foodItem.dimensions?.height} onChange={(e) => setFoodItem((prev) => ({
            ...prev,
            dimensions: {
              ...prev.dimensions,
              height: e.target.value,
            },
          }))} placeholder="Height" className="p-2 bg-primary-white text-primary-black rounded-md mb-1 border-2 border-primary-black" />
          <input type="text" id="dimensions" name="dimensions" value={foodItem.dimensions?.depth} onChange={(e) => setFoodItem((prev) => ({
            ...prev,
            dimensions: {
              ...prev.dimensions,
              depth: e.target.value,
            },
          }))} placeholder="Depth" className="p-2 bg-primary-white text-primary-black rounded-md border-2 border-primary-black" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="composition" className="mb-1">Composition</label>
          <input type="text" id="composition" name="composition" value={foodItem.composition} onChange={handleChange} className="p-2 bg-primary-white text-primary-black rounded-md border-2 border-primary-black" />
        </div>
        <button type="submit" className="w-full p-3 bg-primary-black text-primary-white rounded-md font-bold">Submit</button>
      </form>
      <div className="mt-5">
        <h3 className="text-xl font-bold mb-3">Current Location</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092253!2d144.95543131544827!3d-37.8172094420216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e8d2dbbbbaa1!2sVictoria%20Market!5e0!3m2!1sen!2sau!4v1634040263295!5m2!1sen!2sau"
          width="100%"
          height="450"
          loading="lazy"
          className="rounded-md"
        ></iframe>
      </div>
    </div>
  );
};

export default UploadForm;
