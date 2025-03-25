import React from "react";

const Team = () => {
  const paragraphs = [
    "Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.",

    "He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).",

    "Playing basketball is his zen.",
    "Connect on Homepage / TradingQnA / Twitter",
  ];
  return (
    <div className="mb-20">
      <h1 className="mb-20 text-center text-4xl font-semibold text-gray-700">
        People
      </h1>

      <div className="grid grid-cols-2">
        <div className="flex flex-col items-center gap-2">
          <div className="w-80 h-80 rounded-full overflow-hidden">
            <img src="/images/nithinKamath.jpg" alt="image" />
          </div>

          <h2 className="text-lg font-semibold text-gray-700">Nithin Kamath</h2>

          <h3 className="text-gray-500">Founder, CEO</h3>
        </div>

        <div className="space-y-5 text-lg">
          {paragraphs.map((text, idx) => {
            return <p key={idx}>{text}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
