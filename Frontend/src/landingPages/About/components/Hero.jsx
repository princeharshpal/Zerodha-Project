import React from "react";

const Hero = () => {
  const heroHeading = [
    "We pioneered the discount broking model in India.",
    "Now, we are breaking ground with our technology.",
  ];

  const paragraphs = [
    {
      texts: [
        "We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and 'Rodha', the Sanskrit word for barrier.",

        "Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.",

        "Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.",
      ],
    },
    {
      texts: [
        "In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.",

        "Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.",

        "And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center py-16 font-semibold text-gray-700 border-b-2 border-gray-100 px-4 text-center lg:text-left">
        {heroHeading.map((heading, idx) => (
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl leading-snug"
            key={idx}
          >
            {heading}
          </h1>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10 lg:my-20 text-lg px-5 lg:px-12">
        {paragraphs.map((para, idx) => (
          <div className="space-y-5 text-gray-700" key={idx}>
            {para.texts.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
