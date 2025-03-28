import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import WatchList from "./components/WatchList";

const LeftSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const topContent = [
    { categroy: "NIFTY 50", pOrl: 100.2 },
    { categroy: "SENSEX", pOrl: 100.2 },
  ];

  return (
    <>
      <button
        className="lg:hidden fixed top-28 right-4 z-30 bg-white p-2"
        onClick={() => setIsOpen(true)}
      >
        <FiMenu className="text-2xl" />
      </button>

      <div className="hidden lg:flex w-full lg:w-2/6 flex-col border border-gray-300 h-auto">
        <div className="z-20 sticky top-0 bg-white flex items-center justify-between py-8 px-20 border-b border-gray-300">
          {topContent.map((item, idx) => (
            <div className="flex gap-4 items-center" key={idx}>
              <span>{item.categroy}</span>
              <span className="text-red-700">{item.pOrl}</span>
            </div>
          ))}
        </div>
        <WatchList />
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex">
          <div className="w-full bg-white h-full shadow-lg p-5 relative">
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={() => setIsOpen(false)}
            >
              <FiX />
            </button>

            <div className="space-y-6 mt-10">
              {topContent.map((item, idx) => (
                <div className="flex gap-4 items-center" key={idx}>
                  <span>{item.categroy}</span>
                  <span className="text-red-700">{item.pOrl}</span>
                </div>
              ))}
            </div>

            <WatchList />
          </div>
        </div>
      )}
    </>
  );
};

export default LeftSection;
