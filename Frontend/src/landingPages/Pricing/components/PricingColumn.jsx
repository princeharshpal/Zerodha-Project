import React from "react";

const PricingColumn = ({ content }) => {
  return (
    <div className="space-y-5 flex flex-col items-center">
      <img className="w-56" src={content.image} alt="image" />

      <h2 className="text-2xl font-semibold text-gray-700">{content.heading}</h2>

      <p className="text-gray-600">{content.text}</p>
    </div>
  );
};

export default PricingColumn;
