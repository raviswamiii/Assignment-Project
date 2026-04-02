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
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-5">
        <img className="w-28 sm:w-32" src={logo} alt="Elementum logo" />
        <img className="w-6 sm:w-7" src={menu} alt="Menu icon" />
      </div>

      <div className="flex flex-col justify-center items-center gap-1 pt-10 px-4">
        <img className="w-[85vw]" src={MainText} alt="Main text" />

        <p className="text-center text-xs sm:text-sm w-[78vw] sm:w-[70vw]">
          We are a team of strategists, designers communicators, researchers.
          Togeather, we belive that progress only hghappens when you refuse to
          play things safe.
        </p>
      </div>

      <div className="absolute top-[36vh] right-[5vw] sm:right-[3vw] w-16 h-8  bg-[#934CEC] rounded-b-full rotate-[-40deg]"></div>

      <div className="absolute bottom-45">
        <img className="h-48" src={line1} alt="Line 1" />
      </div>

      <div className="absolute bottom-22 left-4">
        <img className="h-48 rotate-x-180" src={line2} alt="Line 2" />
      </div>

      <div>
        <img className="h-20 absolute bottom-[38vh] right-[5vw] border-3 border-[#F5F5F5] rounded-full" src={img1} alt="Image 1" />
        <img className="h-20 absolute bottom-[43vh] left-[22vw] border-3 border-[#F5F5F5] rounded-full" src={img2} alt="Image 1" />
        <img className="h-20 absolute bottom-[38vh] left-[35vw] border-3 border-[#F5F5F5] rounded-full" src={img1} alt="Image 1" />
        <img className="h-20 absolute bottom-[25vh] right-[20vw] border-3 border-[#F5F5F5] rounded-full" src={img4} alt="Image 4" />
        <img className="h-20 absolute bottom-[19vh] right-[30vw] border-3 border-[#F5F5F5] rounded-full" src={img1} alt="Image 1" />
        <img className="h-20 absolute bottom-[24vh] left-[24vw] border-3 border-[#F5F5F5] rounded-full" src={img6} alt="Image 1" />
        <img className="h-20 absolute bottom-[6vh] left-[26vw] border-3 border-[#F5F5F5] rounded-full" src={img1} alt="Image 1" />
        <img className="h-20 absolute bottom-[3vw] right-[15vw] border-3 border-[#F5F5F5] rounded-full" src={img1} alt="Image 1" />
      </div>
    </div>
  );
};
