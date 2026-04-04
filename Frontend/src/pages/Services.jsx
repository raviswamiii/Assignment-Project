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
    <div className="pt-[16vh] md:pt-[20vh] lg:pt-[25vh] flex flex-col items-center md:items-start gap-[4vh] lg:gap-[6vh] px-[6vw] md:px-[8vw]">
      {/* Heading */}
      <img
        className="w-[70vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw]"
        src={MainText}
        alt="Main Text"
      />

      {/* Services List */}
      <div className="w-full flex flex-col border-t border-gray-400">
        {serviceContainer.map((item, index) => (
          <div
            key={index}
            className="md:flex md:items-center md:justify-between md:gap-[4vw] w-full py-[2vh] md:py-[3vh] lg:py-[4vh] border-b border-gray-400"
          >
            <p className="text-xs sm:text-sm pb-[1vh] sm:pb-[2vh] md:p-0 md:w-[22vw] lg:w-[15vw] xl:w-[12vw]">
              {item.paragraph}
            </p>

            <div className="flex items-center justify-between md:gap-[4vw]">
              <div className="max-w-[60vw] overflow-hidden">
                <img
                  className="h-[4vh] xl:h-[4vh] w-[80vw] lg:w-[55vw] xl:w-[50vw]"
                  src={item.text}
                  alt="Text"
                />
              </div>

              <img className="w-[10vw] md:hidden" src={item.img} alt="Arrow" />
            </div>
            <img
              className="hidden md:block w-[10vw] md:w-[6vw] lg:w-[4vw] "
              src={item.img}
              alt="Arrow"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
