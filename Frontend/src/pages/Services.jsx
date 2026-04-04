import React from "react";
import MainText from "../assets/ServicesAssets/heading.svg";
import text1 from "../assets/ServicesAssets/text1.png";
import arrow from "../assets/ServicesAssets/Arrow 4.svg";

export const Services = () => {
  const serviceContainer = [
    {
      paragraph: "Office of multiple interest content",
      text: text1,
      img: arrow,
    },
    {
      paragraph: "The hanger US Air force digital experimental",
      text: text1,
      img: arrow,
    },
    {
      paragraph: "Delta faucet content, social, digital",
      text: text1,
      img: arrow,
    },
  ];

  return (
    <div className="min-h-screen pt-[16vh] flex flex-col items-center gap-[4vh] px-[6vw]">
      {/* Heading */}
      <img className="w-[70vw]" src={MainText} alt="Main Text" />

      {/* Services List */}
      <div className="w-full flex flex-col">
        {serviceContainer.map((item, index) => (
          <div key={index} className="w-full py-[2vh] border-b border-gray-400">
            <p className="text-xs pb-[1vh]">{item.paragraph}</p>

            <div className="flex items-center justify-between">
              <div className="max-w-[60vw] overflow-hidden">
                <img className="h-[4vh] w-[80vw]" src={item.text} alt="Text" />
              </div>

              <img className="w-[10vw]" src={item.img} alt="Arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
