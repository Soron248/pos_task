import React from "react";
import data from "@/util/products_data.json";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import ProductsCard from "./ProductsCard";

const Products = () => {
  return (
    <div className="w-full h-fit ">
      <div className="sm:w-2/3 h-full">
        <div className="w-full flex items-center gap-3  bg-white rounded-md overflow-hidden p-2 mb-5">
          <CiSearch className="text-2xl text-gray-700" />
          <input
            type="text"
            placeholder="Search here..."
            className="outline-none w-full placeholder:text-gray-500"
          />
        </div>
        <ProductsCard pdata={data.products} />
      </div>
    </div>
  );
};

export default Products;
