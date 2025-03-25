import React from "react";

const Card = ({ content }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-5 mt-10 text-xs text-gray-500 px-10">
      <img className="w-48" src={content.image} alt="logo" />
      <p>{content.text}</p>
    </div>
  );
};

export default Card;
