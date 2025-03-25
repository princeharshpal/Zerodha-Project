import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="text-center space-y-5 text-gray-700 py-18 border-b-2 border-gray-100">
        <h1 className="text-5xl font-semibold">Zerodha Products</h1>
        <p className="text-xl">
          Sleek, modern, and intuitive trading platforms
        </p>

        <p>
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
