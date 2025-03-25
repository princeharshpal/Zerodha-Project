import React from "react";
import Card from "./Card";

const Universe = () => {
  const contents = [
    {
      image: "/images/zerodhaFundhouse.png",
      text: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      image: "/images/sensibullLogo.svg",
      text: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
    },
    {
      image: "/images/tijoriLogo.svg",
      text: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
    },
    {
      image: "/images/streakLogo.png",
      text: "Systematic trading platform that allows you to create and backtest strategies without coding.",
    },
    {
      image: "/images/smallcaseLogo.png",
      text: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
    },
    {
      image: "/images/dittoLogo.png",
      text: "Personalized advice on life and health insurance. No spam and no mis-selling.",
    },
  ];
  return (
    <div className="text-center space-y-10 mt-10 my-20">
      <h1 className="text-4xl text-gray-700 font-semibold">The Zerodha Universe</h1>

      <p>
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      <div className="grid grid-cols-3 grid-rows-2 items-center justify-center">
        {contents.map((content, idx) => {
          return <Card key={idx} content={content} />;
        })}
      </div>

      <button className="px-8 py-2 bg-blue-500 text-white text-2xl rounded-sm">
        Sign up for free
      </button>
    </div>
  );
};

export default Universe;
