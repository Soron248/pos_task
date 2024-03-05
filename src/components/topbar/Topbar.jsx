import React from "react";
import { TbCoinTakaFilled } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import srn from "@/../public/srn.jpg";

const Topbar = () => {
  return (
    <div>
      <nav className="flex w-full justify-between">
        <h1 className="text-xl md:text-2xl font-bold text-side">Cloth-Shade</h1>
        <div className="flex items-center gap-2 md:gap-5">
          <TbCoinTakaFilled className="md:text-2xl cursor-pointer  hidden md:inline-block" />
          <IoMdSettings className="md:text-2xl cursor-pointer text-xl" />
          <div className="flex gap-2">
            <Image
              src={srn}
              width={200}
              height={200}
              alt="user"
              className="size-6 md:size-8 border rounded-full "
            />
            <span className="flex items-center gap-1 bg-slate-200 rounded-full px-2">
              soron <IoIosArrowDown />
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
