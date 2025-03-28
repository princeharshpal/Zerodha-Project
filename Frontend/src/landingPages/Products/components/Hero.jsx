import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="text-center space-y-4 lg:space-y-5 text-gray-700 py-12 lg:py-18 border-b-2 border-gray-100 px-4">
        <h1 className="text-3xl lg:text-5xl font-semibold">Zerodha Products</h1>
        <p className="text-lg lg:text-xl">
          Sleek, modern, and intuitive trading platforms
        </p>

        <p className="text-base lg:text-lg">
          Check out our{" "}
          <span className="text-blue-500 cursor-pointer">
            investment offerings →
          </span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
