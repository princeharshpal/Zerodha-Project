import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Hero = () => {
  const searchLinks = [
    "Track account opening ",
    "Track segment activation",
    " Intraday margins",
    "Kite user manual",
  ];
  return (
    <div className="w-full px-5 lg:px-48 bg-[#387ed1] text-white">
      <div className="flex flex-col lg:flex-row justify-between py-6 lg:py-10 text-lg lg:text-xl font-semibold">
        <span>Support Portal</span>
        <span className="mt-2 lg:mt-0">Track Tickets</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 py-6 lg:py-10">
        <div className="space-y-6 lg:space-y-8">
          <h2 className="text-xl lg:text-2xl">
            Search for an answer or browse help topics to create a ticket
          </h2>

          <div className="p-4 lg:p-5 bg-white flex items-center justify-between rounded">
            <input
              className="text-black w-full text-base lg:text-lg focus:outline-none"
              type="text"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected."
            />
            <IoSearchOutline className="text-gray-600 text-xl lg:text-2xl font-semibold" />
          </div>

          <div className="flex gap-3 lg:gap-5 flex-wrap">
            {searchLinks.map((link, idx) => {
              return (
                <span
                  className="pb-1 border-b-white border-b text-sm lg:text-base"
                  key={idx}
                >
                  {link}
                </span>
              );
            })}
          </div>
        </div>

        <div className="space-y-2 lg:space-y-3">
          <h2 className="text-xl lg:text-2xl">Featured</h2>
          <p className="text-sm lg:text-base">
            1. Surveillance measure on scrips - March 2025
          </p>
          <p className="text-sm lg:text-base">
            2. Current Takeovers and Delisting – March 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
