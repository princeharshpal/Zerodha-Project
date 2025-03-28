import React from "react";
import PricingColumn from "./PricingColumn";

const Hero = () => {
  const contents = [
    {
      image: "/images/pricingEquity.svg",
      heading: "Free equity delivery",
      text: "All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.",
    },
    {
      image: "/images/intradayTrades.svg",
      heading: "Intraday and F&O trades",
      text: "Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.",
    },
    {
      image: "/images/pricingEquity.svg",
      heading: "Free direct MF",
      text: "All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.",
    },
  ];

  return (
    <div className="text-center my-20 space-y-5 px-5 lg:px-0">
      <h1 className="text-3xl lg:text-5xl font-semibold text-gray-700">
        Charges
      </h1>

      <p className="text-gray-500 text-lg lg:text-xl">
        List of all charges and taxes
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 lg:mt-28 gap-10 lg:gap-20">
        {contents.map((content, idx) => (
          <PricingColumn key={idx} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
