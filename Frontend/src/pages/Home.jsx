import React from "react";
import { TbMenu } from "react-icons/tb";
import logo from "../assets/Elementum.svg";
import menu from "../assets/Component 126.svg";
import MainText from "../assets/head.svg";
import line1 from "../assets/Vector 2510.svg";
import line2 from "../assets/Vector 2511.svg";
import img1 from "../assets/Ellipse 260.svg"
import img2 from "../assets/Ellipse 262.svg"
import img6 from "../assets/Ellipse 258.svg"
import img4 from "../assets/Ellipse 255.svg"
export const Home = () => {
  return (
    <div className="h-screen bg-[#F5F5F5] relative">
      <div className="flex items-center justify-between px-4 py-3">
        <img className="w-28" src={logo} alt="Elementum logo" />
        <img className="w-5" src={menu} alt="Menu icon" />
      </div>

      <div className="flex flex-col justify-center items-center gap-4 pt-10 px-4">
        <img className="w-96" src={MainText} alt="Main text" />
      </div>

      <div className="absolute top-54 right-10 w-16 h-8  bg-[#934CEC] rounded-b-full rotate-[-50deg]"></div>

      <div className="absolute bottom-45">
        <img className="h-48" src={line1} alt="Line 1" />
      </div>

      <div className="absolute bottom-22 left-4">
        <img className="h-48 rotate-x-180" src={line2} alt="Line 2" />
      </div>

      <div>
        <img className="h-20 absolute bottom-70 right-5 border-3 border-[#F5F5F5] rounded-full" src={img1} alt="Image 1" />
        <img className="h-20 absolute bottom-80 right-52 border-3 border-[#F5F5F5] rounded-full" src={img2} alt="Image 1" />
        <img className="h-20 absolute bottom-70 right-40 border-3 border-[#F5F5F5] rounded-full" src={img1} alt="Image 1" />
        <img className="h-20 absolute bottom-45 right-15 border-3 border-[#F5F5F5] rounded-full" src={img4} alt="Image 4" />
        <img className="h-20 absolute bottom-35 right-25 border-3 border-[#F5F5F5] rounded-full" src={img1} alt="Image 1" />
        <img className="h-20 absolute bottom-45 left-20 border-3 border-[#F5F5F5] rounded-full" src={img6} alt="Image 1" />
        <img className="h-20 absolute bottom-14 left-20 border-3 border-[#F5F5F5] rounded-full" src={img1} alt="Image 1" />
        <img className="h-20 absolute bottom-4 right-15 border-3 border-[#F5F5F5] rounded-full" src={img1} alt="Image 1" />
      </div>
    </div>
  );
};
