import React, { useState } from "react";
import axios from "axios";

const BuyModel = () => {
  const inputs = ["qty.", "price"];
  const [change, setChange] = useState({
    qty: "",
    price: "",
  });

  //   console.log(change);

  const handleBuy = async () => {
    try {
      await axios.post(`${import.meta.VITE_API_URL}/new-order`, {
        name: "",
        qty: change.qty,
        price: change.price,
        mode: "BUY",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10 bg-white border border-gray-300 rounded-md absolute bottem-0 left-[50%] space-y-5 z-10">
      <div className="flex gap-5">
        {inputs.map((input, idx) => {
          return (
            <input
              key={idx}
              type="number"
              required
              name={input}
              value={change[input]}
              placeholder={input}
              className="p-2 border border-gray-300 rounded-md focus:outline-none"
              onChange={(e) => {
                setChange((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }));
              }}
            />
          );
        })}
      </div>

      <div className="flex items-center justify-between">
        <p>Margin required 140.65 Rs</p>

        <button
          onClick={handleBuy}
          className="px-6 py-2 text-white bg-blue-400 hover:bg-blue-500 rounded-md cursor-pointer"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default BuyModel;
