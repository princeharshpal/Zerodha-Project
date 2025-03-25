import React from "react";
import Hero from "./components/Hero";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import Universe from "./components/Universe";

const Products = () => {
  const contents = [
    {
      image: "/images/kite.png",
      text: {
        heading: "Kite",
        para: "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
        links: [
          {
            label: "Try demo",
            link: "",
          },
          {
            label: "Learn more",
            link: "",
          },
        ],
      },
    },
    {
      image: "/images/console.png",
      text: {
        heading: "Console",
        para: "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
        links: [
          {
            label: "Learn more",
            link: "",
          },
        ],
      },
    },
    {
      image: "/images/coin.png",
      text: {
        heading: "Coin",
        para: "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.",
        links: [
          {
            label: "Coin",
            link: "",
          },
        ],
      },
    },
  ];

  return (
    <>
      <Hero />

      <div className="space-y-20 my-20">
        {contents.map((content, idx) =>
          idx % 2 === 0 ? (
            <LeftSection key={idx} content={content} />
          ) : (
            <RightSection key={idx} content={content} />
          )
        )}
      </div>

      <Universe />
    </>
  );
};

export default Products;
