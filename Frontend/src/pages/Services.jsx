import React from "react";
import MainText from "../assets/ServicesAssets/heading.svg";
import text1 from "../assets/ServicesAssets/text1.png";
import text2 from "../assets/ServicesAssets/text2.png";
import text3 from "../assets/ServicesAssets/text3.png";
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
      text: text2,
      img: arrow,
    },
    {
      paragraph: "Delta faucet content, social, digital",
      text: text3,
      img: arrow,
    },
  ];

  return (
    <div className="min-h-screen pt-[16vh] md:pt-[20vh] flex flex-col items-center md:items-start gap-[4vh] px-[6vw]">
      {/* Heading */}
      <img className="w-[70vw] sm:w-[60vw] md:w-[50vw]" src={MainText} alt="Main Text" />

      {/* Services List */}
      <div className="w-full flex flex-col border-t border-gray-400">
        {serviceContainer.map((item, index) => (
          <div key={index} className="md:flex md:items-center md:gap-[4vw] w-full py-[2vh] border-b border-gray-400">
            <p className="text-xs sm:text-sm pb-[1vh] sm:pb-[2vh] md:w-[22vw]">{item.paragraph}</p>

            <div className="flex items-center justify-between md:gap-[4vw]">
              <div className="max-w-[60vw] overflow-hidden">
                <img className="h-[4vh] w-[80vw]" src={item.text} alt="Text" />
              </div>

              <img className="w-[10vw] md:w-[6vw]" src={item.img} alt="Arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
