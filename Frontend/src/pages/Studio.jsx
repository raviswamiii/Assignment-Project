import React from "react";
import MainText1 from "../assets/StudioAssets/StudioMainText1.png";
import MainText2 from "../assets/StudioAssets/StudioMainText2.png";
import img1 from "../assets/StudioAssets/image 348.svg"
import img2 from "../assets/StudioAssets/image 348 (1).svg"
import Polygon3 from "../assets/StudioAssets/Polygon 3.svg";
import Polygon1 from "../assets/StudioAssets/Polygon 1.svg";
import line1 from "../assets/StudioAssets/Vector 2517.svg";
import line2 from "../assets/StudioAssets/Vector 2516.svg";
import Elipse734 from "../assets/StudioAssets/Ellipse 734.svg";

export const Studio = () => {
  return (
    <div className="h-screen relative">
        <img className="w-[90vh] absolute top-[30vh] right-0" src={line1} alt="line1" />
        <img className="w-[90vh] absolute top-[75vh] right-0" src={line2} alt="line2" />

      <div className="relative flex flex-col items-center gap-[4vh] pt-16">
        <img
          className="w-[25vw] absolute top-[10vh] right-[16vw]"
          src={Polygon3}
          alt="Polygon 3"
        />
        <img className="w-[55vw] z-10" src={img1} alt="Image 1" />

        <div className="flex flex-col gap-1 px-4">
          <img className="w-[85vw]" src={MainText1} alt="Main Text 1" />
          <p className="text-xs">
            We are a team of strategists, designers communicators, researchers.
            Togeather, we belive that progress only happens when you refuse to
            play things safe.
          </p>

          <div className="flex items-center gap-2 font-semibold text-sm pt-1">
            <p>Read More</p>
            {/* <div className="w-16 h-0.5 bg-black relative">
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-black rotate-45"></span>
            </div> */}
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center gap-[4vh] pt-16">
        <img
          className="w-[25vw] absolute top-[10vh] left-[18vw]"
          src={Polygon1}
          alt="Polygon 1"
        />

        <img
          className="w-[25vw] absolute top-[32vh] right-[18vw] z-20"
          src={Polygon1}
          alt="Polygon 1"
        />

        <img className="w-[55vw] z-10" src={img2} alt="Image 2" />

        <div className="flex flex-col gap-1 px-4">
          <img className="w-[85vw]" src={MainText2} alt="Main Text 2" />
          <p className="text-xs">
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, comms and social research.
          </p>

          <div className="flex items-center gap-2 font-semibold text-sm pt-1">
            <p>Read More</p>
            {/* <div className="w-16 h-0.5 bg-black relative">
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-black rotate-45"></span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
