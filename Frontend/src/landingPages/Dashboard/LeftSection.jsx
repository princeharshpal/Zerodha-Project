import React from "react";
import WatchList from "./components/WatchList";

const LeftSection = () => {
  const topContent = [
    {
      categroy: "NIFTY 50",
      pOrl: 100.2,
    },
    {
      categroy: "SENSEX",
      pOrl: 100.2,
    },
  ];
  return (
    <div className="w-2/6 border border-gray-300 h-auto">
      <div className="sticky top-0 bg-white flex items-center justify-between py-8 px-20 border-b border-gray-300">
        {topContent.map((item, idx) => {
          return (
            <div className="flex gap-3 items-center" key={idx}>
              <span>{item.categroy}</span>

              <span className="text-red-700">{item.pOrl}</span>
            </div>
          );
        })}
      </div>

      <WatchList />
    </div>
  );
};

export default LeftSection;
