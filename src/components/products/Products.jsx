"use client";
import React, { useState } from "react";
import data from "@/util/products_data.json";
import { CiSearch } from "react-icons/ci";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [pdata, setPdata] = useState(data);

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    filterProducts(event.target.value);
  };

  // Function to filter products based on search query
  const filterProducts = (query) => {
    const filteredProducts = data.products.filter((product) =>
      product.product_name.toLowerCase().includes(query.toLowerCase())
    );
    setPdata({ products: filteredProducts });
  };

  return (
    <div className="w-full h-fit ">
      <div className="sm:w-2/3 h-full">
        <div className="w-full flex items-center gap-3  bg-white rounded-md overflow-hidden p-2 mb-5">
          <CiSearch className="text-2xl text-gray-700" />
          <input
            type="text"
            placeholder="Search here..."
            className="outline-none w-full placeholder:text-gray-500"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
        <ProductsCard pdata={pdata.products} />
      </div>
    </div>
  );
};

export default Products;
