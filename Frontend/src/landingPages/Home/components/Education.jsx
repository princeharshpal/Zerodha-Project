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
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10 my-10 lg:my-30 px-5 lg:px-0">
      <div className="flex justify-center">
        <img
          className="w-full max-w-xs lg:max-w-full"
          src="/images/education.svg"
          alt="eco system"
        />
      </div>

      <div className="space-y-6 text-center lg:text-left">
        <h1 className="text-2xl lg:text-3xl font-semibold">
          Free and open market education
        </h1>

        <div className="flex flex-col items-center lg:items-start gap-5 lg:gap-10 text-base lg:text-lg">
          {textContent.map((content, idx) => (
            <div key={idx} className="space-y-2 text-gray-700 flex items-center flex-col justify-center ">
              <p>{content.text}</p>

              <Link className="flex items-center gap-1 text-blue-500" to={"#"}>
                {content.linkLable}
                <span>
                  <IoArrowForward />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
