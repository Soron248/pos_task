import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const Cart = ({ items }) => {
  const [cartItems, setCartItems] = useState([items]);

  // Update cartItems state when items prop changes
  useEffect(() => {
    setCartItems(items);
  }, [items]);

  return (
    <div className="bg-white w-full h-right rounded-md p-5 shadow-lg">
      <div className="flex justify-between mb-5">
        <h1 className="font-bold">Order #007 </h1>
        <p className="text-gray-500">Clear All</p>
      </div>

      <div className="h-72 overflow-scroll flex flex-col gap-2">
        {cartItems &&
          cartItems.map((i) => {
            return (
              <div
                className=" flex justify-between items-center "
                key={i.product_id}
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={i.product_image}
                    alt="img"
                    width={200}
                    height={200}
                    className="size-16 rounded-lg border shadow"
                  />
                  <div>
                    <h2>{i.product_name}</h2>
                    <p className="font-semibold text-sm">
                      TK {i.product_price} + VAT
                    </p>
                  </div>
                </div>

                {/* quantity */}
                <div className="flex gap-3">
                  <button className="bg-side size-6 rounded-full text-white font-bold">
                    -
                  </button>
                  <span className="font-semibold">0</span>
                  <button className="bg-side size-6 rounded-full text-white font-bold">
                    +
                  </button>
                  <MdDeleteForever className="text-red-500 size-6 cursor-pointer" />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Cart;
