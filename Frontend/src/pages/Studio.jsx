import React from "react";
import MainText1 from "../assets/StudioAssets/StudioMainText1.png";
import MainText2 from "../assets/StudioAssets/StudioMainText2.png";
import img1 from "../assets/StudioAssets/image 348.svg";
import img2 from "../assets/StudioAssets/image 348 (1).svg";
import Polygon3 from "../assets/StudioAssets/Polygon 3.svg";
import Polygon1 from "../assets/StudioAssets/Polygon 1.svg";
import line1 from "../assets/StudioAssets/Vector 2517.svg";
import line2 from "../assets/StudioAssets/Vector 2516.svg";
import Elipse734 from "../assets/StudioAssets/Ellipse 734.svg";

export const Studio = () => {
  return (
    <div className="h-screen relative pt-16 md:pt-[16vh]">
      <img
        className="w-[90vw] md:w-[80vw] absolute top-[20vh] sm:top-[18vh] md:top-[40vh] right-0"
        src={line1}
        alt="line1"
      />
      <img
        className="w-[90vw] md:w-[60vw] absolute top-[57vh] md:top-[80vh] right-0"
        src={line2}
        alt="line2"
      />

      <div className="relative">
        <img
          className="w-[25vw] sm:w-[20vw] md:w-[15vw] absolute top-0 right-[14vw] sm:right-[22vw] md:right-[3vw]"
          src={Polygon3}
          alt="Polygon 3"
        />

        <div className="flex flex-col md:flex-row-reverse items-center gap-4 md:gap-[8vw] md:px-[8vw]">
          <img
            className="w-[55vw] sm:w-[45vw] md:w-[30vw] z-10"
            src={img1}
            alt="Image 1"
          />

          <div className="flex flex-col w-[85vw] sm:w-[75vw] px-4">
            <img src={MainText1} alt="Main Text 1" />
            <p className="text-xs">
              We are a team of strategists, designers communicators,
              researchers. Togeather, we belive that progress only happens when
              you refuse to play things safe.
            </p>

            <div className="flex items-center gap-2 font-semibold text-sm pt-2">
              <p>Read More</p>
              {/* <div className="w-16 h-0.5 bg-black relative">
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-black rotate-45"></span>
            </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center gap-[4vh] pt-[14vh] lg:pt-[18vh]">
        <img
          className="w-[25vw] md:w-[15vw] absolute top-[14vh] md:top-[12vh] lg:top-[16vh] left-[18vw] sm:left-[22vw] md:left-[6vw]"
          src={Polygon1}
          alt="Polygon 1"
        />
        <img
          className="w-[25vw] sm:w-[20vw] md:w-[15vw] lg:w-[12vw] absolute top-[35vh] sm:top-[43vh] md:top-[36vh] lg:top-[50vh] right-[18vw] sm:right-[22vw] md:left-[27vw] z-20"
          src={Polygon1}
          alt="Polygon 1"
        />

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-[8vw] md:px-[8vw]">
          <img
            className="w-[55vw] sm:w-[45vw] md:w-[30vw] z-10"
            src={img2}
            alt="Image 2"
          />

          <div className="flex flex-col w-[85vw] sm:w-[75vw] px-4">
            <img src={MainText2} alt="Main Text 2" />
            <p className="text-xs">
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand, design
              digital, comms and social research.
            </p>

            <div className="flex items-center gap-2 font-semibold text-sm pt-2">
              <p>Read More</p>
              {/* <div className="w-16 h-0.5 bg-black relative">
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-black rotate-45"></span>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
