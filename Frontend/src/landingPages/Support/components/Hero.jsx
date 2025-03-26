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
    <div className="w-full px-48 bg-[#387ed1] text-white">
      <div className="flex items-center justify-between py-10 text-xl font-semibold">
        <span>Support Portal</span>

        <span>Track Tickets</span>
      </div>

      <div className="grid grid-cols-2 py-10">
        <div className="space-y-8">
          <h2 className="text-2xl">
            Search for an answer or browse help topics to create a ticket
          </h2>

          <div className="p-5 bg-white flex items-center justify-between rounded">
            <input
              className="text-black w-full text-lg focus:outline-none"
              type="text"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected ."
            />

            <IoSearchOutline className="text-gray-600 text-2xl font-semibold" />
          </div>

          <div className="flex gap-5 flex-wrap">
            {searchLinks.map((link, idx) => {
              return (
                <span className="pb-1 border-b-white border-b" key={idx}>
                  {link}
                </span>
              );
            })}
          </div>
        </div>

        <div className="ml-10 space-y-3">
          <h2 className="text-2xl">Featured</h2>

          <p>1. Surveillance measure on scrips - March 2025</p>

          <p>2. Current Takeovers and Delisting – March 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
