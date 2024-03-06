"use client";
import React, { useState } from "react";
import data from "@/util/products_data.json";
import { CiSearch } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa6";
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
    const existingItem = cartItems.find(
      (item) => item.product_id === product.product_id
    );
    if (existingItem) {
      // If the product already exists in the cart, update its quantity to the original quantity
      const originalQuantity = data.products.find(
        (p) => p.product_id === product.product_id
      ).quantity;
      setCartItems((prevItems) => {
        const updatedItems = prevItems.map((item) => {
          if (item.product_id === product.product_id) {
            item.quantity = Math.min(originalQuantity, item.quantity + 1);
          }
          return item;
        });
        return updatedItems;
      });
    } else {
      // If the product doesn't exist in the cart, add it with a quantity of 1
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  // Function to handle removing product from cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product_id !== productId)
    );
  };

  // Function to handle removing all product from cart
  const removeAll = () => {
    setCartItems([]);
  };

  return (
    <div className="w-full h-fit flex gap-10 relative">
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

        {/* Passing addToCart function as a prop */}
        <ProductsCard pdata={pdata.products} addToCart={addToCart} />
      </div>

      <div className="sm:w-1/3 h-full hidden sm:inline-block">
        <Cart
          items={cartItems}
          removeFromCart={removeFromCart}
          removeAll={removeAll}
        />
      </div>

      <div className="absolute sm:hidden bg-side  p-2 rounded-full bottom-0 right-0 cursor-pointer">
        <div className="w-full h-full relative">
          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <FaCartArrowDown className="text-xl text-white" />
          </button>
          <span className="size-4 rounded-full bg-blue-500 absolute -top-2 -left-2 flex justify-center items-center text-xs text-white">
            {cartItems.length}
          </span>
        </div>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <Cart
            items={cartItems}
            removeFromCart={removeFromCart}
            removeAll={removeAll}
          />
        </div>
      </dialog>
    </div>
  );
};

export default Products;
