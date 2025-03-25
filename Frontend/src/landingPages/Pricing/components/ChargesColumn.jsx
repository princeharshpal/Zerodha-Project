import React from "react";

const ChargesColumn = ({ contents, first }) => {
  const ulIndexFirst = [4, 6, 7, 8];
  const ulIndexSecond = [8];

  return (
    <div className="space-y-5 text-gray-600 w-11/12">
      {contents.map((content, idx) => {
        return (
          <div className="space-y-5" key={idx}>
            <h3 className="text-lg">{content.heading}</h3>

            <div className="text-xs space-y-5">
              {(first === "first" ? ulIndexFirst : ulIndexSecond).includes(
                idx
              ) ? (
                <ul className="list-disc pl-5">
                  {content.texts.map((text, idx) => (
                    <li key={idx}>{text}</li>
                  ))}
                </ul>
              ) : (
                content.texts.map((text, idx) => <p key={idx}>{text}</p>)
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChargesColumn;
