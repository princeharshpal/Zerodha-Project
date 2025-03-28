import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col mt-12 items-center space-y-5 px-5 text-center lg:text-left">
      <img
        className="w-4/5 lg:w-3/5"
        src="/images/homeHero.png"
        alt="Home Hero"
      />

      <h1 className="text-3xl lg:text-5xl font-semibold mt-10 lg:mt-16">
        Invest in everything
      </h1>

      <p className="text-lg lg:text-xl">
        Online platform to invest in stocks, derivatives, mutual funds, ETFs,
        bonds, and more.
      </p>

      <button className="px-6 lg:px-8 py-2 bg-blue-500 text-white text-lg lg:text-2xl rounded-sm">
        Sign up for free
      </button>
    </div>
  );
};

export default Hero;
