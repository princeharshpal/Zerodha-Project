import React from "react";
import { Link } from "react-router-dom";
    import { GoArrowRight } from "react-icons/go";

const LeftSection = ({ content }) => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <img src={content.image} alt="image" />
      </div>

      <div className="flex flex-col justify-center ml-48 space-y-8  text-gray-800">
        <h1 className="text-4xl font-semibold">{content.text.heading}</h1>

        <p>{content.text.para}</p>

        <div className="flex gap-20">
          {content.text.links.map((link, idx) => {
            return (
              <Link
                className="flex items-center gap-2 text-blue-500"
                key={idx}
                to={link.link}
              >
                {link.label}
                <GoArrowRight />
              </Link>
            );
          })}
        </div>

        <div>
          <img src="/images/googlePlayBadge.svg" alt="google play photo" />
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
