"use client";
import React, { useState } from "react";
import data from "@/util/products_data.json";
import { CiSearch } from "react-icons/ci";
import ProductsCard from "./ProductsCard";
import Cart from "./Cart";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [pdata, setPdata] = useState(data);
  const [cartItems, setCartItems] = useState([]);

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterProducts(query);
  };

  // Function to filter products based on search query
  const filterProducts = (query) => {
    const filteredProducts = data.products.filter((product) =>
      product.product_name.toLowerCase().includes(query.toLowerCase())
    );
    setPdata({ products: filteredProducts });
  };

  // Function to handle adding product to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div className="w-full h-fit flex gap-10">
      <div className="sm:w-2/3 h-full">
        <div className="w-full flex items-center gap-3 bg-white rounded-md overflow-hidden p-2 mb-5 shadow-md">
          <CiSearch className="text-2xl text-gray-700" />
          <input
            type="text"
            placeholder="Search here..."
            className="outline-none w-full placeholder:text-gray-500"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
        {/* Pass addToCart function as a prop */}
        <ProductsCard pdata={pdata.products} addToCart={addToCart} />
      </div>

      <div className="sm:w-1/3 h-full hidden sm:inline-block">
        <Cart items={cartItems} />
      </div>
    </div>
  );
};

export default Products;
