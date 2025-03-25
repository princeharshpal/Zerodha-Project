import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col mt-12 items-center space-y-5">
      <img className="w-3/5" src="/images/homeHero.png" alt="Home Hero" />

      <h1 className="text-5xl font-semibold mt-16">Invest in everything</h1>

      <p className="text-xl">
        Online platform to invest in stocks, derivatives, mutual funds, ETFs,
        bonds, and more.
      </p>

      <button className="px-8 py-2 bg-blue-500 text-white text-2xl rounded-sm">
        Sign up for free
      </button>
    </div>
  );
};

export default Hero;
