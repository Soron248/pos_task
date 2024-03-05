import React from "react";
import { CgMenuLeft } from "react-icons/cg";
import { HiMiniHome } from "react-icons/hi2";
import { FaShippingFast } from "react-icons/fa";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaCartArrowDown } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-8 md:w-20 h-full bg-side text-white p-3 pt-5 md:p-5  flex flex-col gap-44   items-center">
      <CgMenuLeft className="md:text-2xl cursor-pointer" />
      <div className="flex flex-col gap-16">
        <HiMiniHome className="md:text-2xl cursor-pointer" />
        <FaShippingFast className="md:text-2xl cursor-pointer" />
        <BiSolidFoodMenu className="md:text-2xl cursor-pointer" />
        <FaCartArrowDown className="md:text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Sidebar;
