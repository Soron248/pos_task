import Image from "next/image";
import React from "react";

const ProductsCard = ({ pdata }) => {
  return (
    <div className="h-phn sm:h-lp flex flex-wrap gap-3 justify-center sm:justify-between items-center overflow-scroll">
      {pdata &&
        pdata.map((p) => {
          return (
            <div
              key={p.product_id}
              className="w-60 h-fit p-3 bg-white flex gap-2 rounded-md"
            >
              <div>
                <Image
                  src={p.product_image}
                  width={200}
                  height={200}
                  alt="img"
                  className="w-20 h-32 border rounded-md"
                />
              </div>
              <div className="flex flex-col justify-between">
                <h2 className="font-semibold">{p.product_name}</h2>
                <div>
                  <p> $ {p.product_price}</p>
                  <span>Rating {p.rating}</span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductsCard;
