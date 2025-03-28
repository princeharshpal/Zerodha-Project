import React, { useContext, useState } from "react";
import axios from "axios";
import { WatchlistContext } from "../../../components/Contexts/WatchlistContextProvider";
import { VscChromeClose } from "react-icons/vsc";

const BuyModel = ({ uid }) => {
  const { isBuyOpen, setBuyOpen } = useContext(WatchlistContext);

  const inputs = ["qty", "price"];

  const [change, setChange] = useState({
    qty: "",
    price: "",
  });

  const handleBuyclick = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/new-order`,
        {
          name: uid,
          qty: change.qty,
          price: change.price,
          mode: "BUY",
        }
      );
      setBuyOpen(false);

      console.log(res.data);
      console.log(uid, change.qty, change.price, "BUY");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-8 lg:p-10 bg-white border border-gray-300 rounded-md absolute bottom-5 lg:bottom-0 left-[50%] transform -translate-x-1/2 w-[90%] lg:w-auto space-y-5 z-10">
      <button
        className="absolute top-2 right-2 text-gray-500 cursor-pointer text-xl"
        onClick={() => setBuyOpen(false)}
      >
        <VscChromeClose />
      </button>

      <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
        {inputs.map((input, idx) => (
          <input
            key={idx}
            type="number"
            required
            name={input}
            value={change[input]}
            placeholder={input}
            className="p-2 border border-gray-300 rounded-md focus:outline-none w-full lg:w-auto"
            onChange={(e) => {
              setChange((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
          />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
        <p className="text-center lg:text-left">Margin required 140.65 Rs</p>

        <button
          onClick={handleBuyclick}
          className="w-full lg:w-auto px-6 py-2 text-white bg-blue-400 hover:bg-blue-500 rounded-md cursor-pointer"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default BuyModel;
