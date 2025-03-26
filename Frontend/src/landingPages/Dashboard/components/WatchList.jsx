import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaChartBar, FaEllipsisH } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";

import { watchlist } from "../Data/data";

const WatchList = () => {
  return (
    <div className="w-full bg-white text-sm">
      <div className="flex items-center justify-between border-b border-gray-300 px-4 py-4">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: INFY, BSE, NIFTY..."
          className="min-w-[80%] focus:outline-none"
        />

        <p className="text-gray-500 text-sm">{watchlist.length} / 50</p>
      </div>

      <div className="w-full">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </div>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <div
      className="relative w-full flex justify-between items-center border-b border-gray-300 p-4 hover:bg-gray-100 transition"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="w-full flex justify-between items-center">
        <div
          className={`font-medium ${
            stock.isDown ? "text-red-500" : "text-green-500"
          }`}
        >
          {stock.name}
        </div>

        <div className="flex items-center justify-between space-x-2 text-gray-600">
          <span className="text-sm">{stock.percent}</span>

          {stock.isDown ? (
            <IoIosArrowDown className="text-red-500" />
          ) : (
            <IoIosArrowUp className="text-green-500" />
          )}

          <span className="text-sm font-semibold">{stock.price}</span>
        </div>
      </div>

      {showActions && <WatchListActions />}
    </div>
  );
};

const WatchListActions = () => {
  return (
    <div className="flex space-x-2 absolute right-5">
      <button className="font-semibold px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
        B
      </button>

      <button className="font-semibold px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
        S
      </button>

      <button className="px-3 py-1 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition">
        <FaChartBar />
      </button>

      <button className="px-3 py-1 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition">
        <RiDeleteBin7Line />
      </button>

      <button className="px-3 py-1 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition">
        <FaEllipsisH />
      </button>
    </div>
  );
};
