import React from "react";

const Bills = ({ subtotal }) => {
  // Calculate VAT amount (2% of subtotal)
  const vat = subtotal * 0.02;

  return (
    <div>
      <div className="bg-gray-200 py-3 px-5 rounded-lg border-b-2 border-dashed border-gray-300">
        <p className="font-semibold flex justify-between">
          Subtotal <span>{subtotal}</span>
        </p>
        <p className="flex justify-between">
          Discount <span>0</span>
        </p>
        <p className="flex justify-between">
          VAT <span>{vat.toFixed(2)}</span>
        </p>
      </div>
      <div className="bg-gray-200 py-3 px-5 rounded-lg font-semibold flex justify-between">
        Total <span>TK {subtotal + vat} </span>
      </div>
    </div>
  );
};

export default Bills;
