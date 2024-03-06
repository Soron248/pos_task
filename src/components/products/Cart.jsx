"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { GiCardboardBox } from "react-icons/gi";
import Bills from "./Bills";

const Cart = ({ items, removeFromCart, removeAll }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(items);
  }, [items]);

  const handleIncrement = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity++;
    setCartItems(updatedCartItems);
  };

  const handleDecrement = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity--;
      setCartItems(updatedCartItems);
    }
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleClearAll = () => {
    removeAll();
  };

  // Calculate subtotal price
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product_price * item.quantity,
    0
  );

  return (
    <div className="bg-white w-full h-right rounded-md p-5 shadow-lg">
      <div className="flex justify-between mb-5">
        <h1 className="font-bold">Order #007 </h1>
        <p className="text-gray-500 cursor-pointer" onClick={handleClearAll}>
          Clear All
        </p>
      </div>

      <div className="h-72 overflow-scroll flex flex-col gap-2 mb-5">
        {cartItems.length ? (
          cartItems.map((i, index) => {
            return (
              <section
                className="flex justify-between items-center"
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
                      {i.product_price} x {i.quantity} = TK{" "}
                      {i.product_price * i.quantity}
                    </p>
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex gap-3">
                  <button
                    className="bg-side size-6 rounded-full text-white font-bold"
                    onClick={() => handleDecrement(index)}
                  >
                    -
                  </button>
                  <span className="font-semibold">{i.quantity}</span>
                  <button
                    className="bg-side size-6 rounded-full text-white font-bold"
                    onClick={() => handleIncrement(index)}
                  >
                    +
                  </button>
                  <MdDeleteForever
                    className="text-red-500 size-6 cursor-pointer"
                    onClick={() => handleRemoveFromCart(i.product_id)}
                  />
                </div>
              </section>
            );
          })
        ) : (
          <p className="bg-gray-400 text-center w-fit m-auto p-2 font-bold text-white rounded-full">
            <GiCardboardBox className="text-9xl" />
          </p>
        )}
      </div>
      {cartItems.length ? (
        <div>
          <Bills subtotal={subtotal} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
