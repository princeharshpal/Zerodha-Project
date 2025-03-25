import React from "react";
import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";

const Education = () => {
  const textContent = [
    {
      text: "Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.",
      linkLable: "Varsity",
    },
    {
      text: "TradingQ&A, the most active trading and investment community in India for all your market related queries.",
      linkLable: "TradingQ&A",
    },
  ];
  return (
    <div className="w-full grid grid-cols-2 my-30">
      <div>
        <img src="/images/education.svg" alt="eco system" />
      </div>

      <div className="space-y-8">
        <h1 className="text-3xl font-semibold">
          Free and open market education
        </h1>

        <div className="flex flex-col items-center gap-10 justify-center mt-10 text-lg">
          {textContent.map((content, idx) => {
            return (
              <div key={idx} className="space-y-2">
                <p>{content.text}</p>

                <Link
                  className="flex items-center gap-1 text-blue-500"
                  to={"#"}
                >
                  {content.linkLable}
                  <span>
                    <IoArrowForward />
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
