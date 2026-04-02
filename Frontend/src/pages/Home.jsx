import React from "react";
import { TbMenu } from "react-icons/tb";
import logo from "../assets/Elementum.svg";
import menu from "../assets/Component 126.svg";
import MainText from "../assets/head.png";
import line1 from "../assets/Vector 2510.svg";
import line2 from "../assets/Vector 2511.svg";
import img1 from "../assets/Ellipse 260.svg";
import img2 from "../assets/Ellipse 262.svg";
import img6 from "../assets/Ellipse 258.svg";
import img4 from "../assets/Ellipse 255.svg";
export const Home = () => {
  return (
    <div className="h-screen bg-white relative">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-14 xl:px-18 py-3 sm:py-5">
        <img className="w-28 sm:w-32" src={logo} alt="Elementum logo" />
        <img className="w-6 sm:w-7" src={menu} alt="Menu icon" />
      </div>

      <div className="flex flex-col justify-center items-center gap-1 pt-10 sm:pt-14 md:pt-14 xl:pt-4 px-4">
        <img className="w-[85vw] lg:w-[80vw] xl:w-[70vw]" src={MainText} alt="Main text" />

        <p className="text-center text-xs sm:text-sm w-[78vw] sm:w-[70vw] lg:w-[60vw] xl:w-[55vw]">
          We are a team of strategists, designers communicators, researchers.
          Togeather, we belive that progress only hghappens when you refuse to
          play things safe.
        </p>
      </div>

      <div className="absolute top-[36vh] sm:top-[38vh] md:top-[37vh] lg:top-[40vh] xl:top-[38vh] right-[5vw] sm:right-[3vw] md:right-[2vw] lg:right-[5vw] xl:right-[11vw] w-16 h-8 bg-[#934CEC] rounded-b-full rotate-[-40deg]"></div>

      <div className="absolute bottom-45">
        <img className="h-48" src={line1} alt="Line 1" />
      </div>

      <div className="absolute bottom-22 left-4">
        <img className="h-48 rotate-x-180" src={line2} alt="Line 2" />
      </div>

      <div>
        <img className="h-20 sm:h-23 lg:h-26 absolute bottom-[43vh] sm:bottom-[5vh] xl:bottom-[2vh] left-[22vw] sm:left-[10vw] border-3 border-white rounded-full" src={img2} alt="Image 1" />
        <img className="h-20 sm:h-23 lg:h-26 absolute bottom-[38vh] sm:bottom-[12vh] xl:bottom-[10vh] left-[35vw] sm:left-[18vw] lg:left-[16vw] xl:left-[15vw] border-3 border-white rounded-full" src={img1} alt="Image 1" />
        <img className="h-20 sm:h-23 lg:h-26 absolute bottom-[25vh] sm:bottom-[26vh] lg:bottom-[24vh] xl:bottom-[22vh] right-[20vw] sm:left-[32vw] lg:left-[28vw] border-3 border-white rounded-full" src={img4} alt="Image 4" />
        <img className="h-20 sm:h-23 lg:h-26 absolute bottom-[19vh] sm:bottom-[13vh] xl:bottom-[10vh] right-[30vw] sm:left-[40vw] lg:left-[38vw] border-3 border-white rounded-full" src={img1} alt="Image 1" />
        <img className="h-20 sm:h-23 lg:h-26 absolute bottom-[6vh] sm:bottom-[25vh] lg:bottom-[22vh] xl:bottom-[18vh] left-[26vw] sm:left-[52vw] border-3 border-white rounded-full" src={img1} alt="Image 1" />
        <img className="h-20 sm:h-23 lg:h-26 absolute bottom-[24vh] sm:bottom-[18vh] lg:bottom-[13vh] xl:bottom-[10vh] left-[24vw] sm:left-[60vw] lg:left-[58vw] border-3 border-white rounded-full" src={img6} alt="Image 1" />
        <img className="h-20 sm:h-23 lg:h-26 absolute bottom-[38vh] sm:bottom-[20vh] right-[5vw] sm:left-[76vw] lg:left-[72vw] border-3 border-white rounded-full" src={img1} alt="Image 1" />
        <img className="h-20 sm:h-23 lg:h-26 absolute bottom-[3vw] sm:bottom-[4vh] right-[15vw] sm:left-[82vw] md:left-[85vw] lg:left-[82vw] border-3 border-white rounded-full" src={img1} alt="Image 1" />
      </div>
    </div>
  );
};
