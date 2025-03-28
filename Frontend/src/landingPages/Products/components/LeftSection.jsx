import React from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const LeftSection = ({ content }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0 px-5 lg:px-0">
      <div className="flex justify-center">
        <img
          className="w-full max-w-xs lg:max-w-full"
          src={content.image}
          alt="image"
        />
      </div>

      <div className="flex flex-col justify-center text-center lg:text-left space-y-6 lg:space-y-8 text-gray-800 lg:ml-48">
        <h1 className="text-2xl lg:text-4xl font-semibold">
          {content.text.heading}
        </h1>

        <p className="text-base lg:text-lg">{content.text.para}</p>

        <div className="flex flex-col items-center lg:flex-row gap-5 lg:gap-20 justify-center lg:justify-start">
          {content.text.links.map((link, idx) => (
            <Link
              className="flex items-center gap-2 text-blue-500"
              key={idx}
              to={link.link}
            >
              {link.label}
              <GoArrowRight />
            </Link>
          ))}
        </div>

        <div className="flex justify-center lg:justify-start">
          <img
            className="w-32 lg:w-auto"
            src="/images/googlePlayBadge.svg"
            alt="google play"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
