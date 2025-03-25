import React from "react";
import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";

const Stats = () => {
  const textContent = [
    {
      heading: "Customer-first always",
      text: "That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.",
    },
    {
      heading: "No spam or gimmicks",
      text: "No gimmicks, spam, 'gamification', or annoying push notifications. High quality apps that you use at your pace, the way you like.",
    },
    {
      heading: "The Zerodha universe",
      text: "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.",
    },
    {
      heading: "Do better with money",
      text: "With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.",
    },
  ];

  const statsLink = [
    {
      linkLabel: "Explore our products",
    },
    {
      linkLabel: "Try Kite demo",
    },
  ];
  return (
    <div className="w-full grid grid-cols-2 mt-30">
      <div className="space-y-8">
        <h1 className="text-3xl font-semibold">Trust with confidence</h1>

        {textContent.map((content, idx) => {
          return (
            <div className="space-y-1 mr-40" key={idx}>
              <h2 className="text-2xl font-semibold">{content.heading}</h2>
              <p className="text-lg text-gray-500">{content.text}</p>
            </div>
          );
        })}
      </div>

      <div>
        <img src="/images/ecosystem.png" alt="eco system" />

        <div className="flex items-center gap-10 justify-center mt-10 text-lg text-blue-500">
          {statsLink.map((link, idx) => {
            return (
              <Link key={idx} className="flex items-center gap-1" to={""}>
                {link.linkLabel}
                <span>
                  <IoArrowForward />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
