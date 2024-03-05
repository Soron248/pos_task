import React from "react";
import Topbar from "../topbar/Topbar";
import Products from "../products/Products";

const Container = () => {
  return (
    <div className="w-full h-full rounded-tl-xl rounded-bl-xl md:rounded-tl-3xl md:rounded-bl-3xl bg-gray-200 p-5 md:p-10">
      <Topbar />
      <Products />
    </div>
  );
};

export default Container;
