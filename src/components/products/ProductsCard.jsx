import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const ProductsCard = ({ pdata, addToCart }) => {
  const handleAddToCart = (product) => {
    // console.log("Adding to cart:", product);
    addToCart(product);
  };

  return (
    <div className="h-phn sm:h-left flex flex-wrap gap-y-3 gap-x-20 justify-center sm:justify-stretch items-start overflow-scroll">
      {pdata &&
        pdata.map((p) => {
          return (
            <section
              key={p.product_id}
              className="w-60 h-fit p-3 bg-white flex gap-2 rounded-md shadow-md cursor-pointer"
              onClick={() => handleAddToCart(p)}
            >
              <div>
                <Image
                  src={p.product_image}
                  width={200}
                  height={200}
                  alt="img"
                  className="w-24 h-32 border rounded-md shadow-md"
                />
              </div>
              <div className="flex flex-col justify-between">
                <h2 className="font-semibold">{p.product_name}</h2>
                <div>
                  <p className="font-semibold"> TK {p.product_price}</p>
                  <span className="text-sm flex items-center gap-1">
                    Rating{" "}
                    <span className="bg-side text-xs text-white px-1 rounded-2xl">
                      {p.rating}
                    </span>
                    <FaStar className="text-orange-500" />
                  </span>
                </div>
              </div>
            </section>
          );
        })}
    </div>
  );
};

export default ProductsCard;
