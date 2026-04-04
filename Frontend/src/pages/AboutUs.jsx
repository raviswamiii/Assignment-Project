import React from "react";
import MainText from "../assets/AboutUsAssets/head (1).svg";
import img1 from "../assets/AboutUsAssets/Ellipse 266.svg";
import img2 from "../assets/AboutUsAssets/Ellipse 268.svg";
import comma from "../assets/AboutUsAssets/comma.svg";

export const AboutUs = () => {
  return (
    <div className="h-screen pt-[16vh] md:flex md:items-center md:justify-center">
        <div className="relative flex h-[30vh] md:h-full md:w-full px-[6vw] " >
            <img className="absolute bottom-[10vh] sm:bottom-[6vh] md:top-[38vh] left-[10vw] sm:left-[15vw] md:left-[3vw] lg:left-[15vw] w-10" src={img2} alt="" />
            <img className="absolute bottom-[18vh] md:top-[22vh] left-[25vw] md:left-[10vw] lg:left-[20vw] w-15" src={img2} alt="" />
            <img className="absolute bottom-[5vh] lg:top-[70vh] right-[40vw] sm:right-[50vw] md:left-[3vw] lg:left-[15vw] w-18 md:w-15" src={img2} alt="" />
            <img className="absolute top-[8vh] md:top-[50vh] lg:top-[47vh] right-[10vw] sm:right-[23vw] md:left-[7vw] lg:left-[17vw] w-22 lg:w-28" src={img2} alt="" />
        </div>

      <div className="px-[6vw] md:p-0 flex flex-col items-center gap-[4vh]">
        <img className="w-[75vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw]" src={MainText} alt="Main Text" />

        <p className="bg-[#D7EEDD] text-center text-sm p-[6vw] sm:p-[4vw] lg:p-[2vw] rounded-3xl sm:w-[65vw] md:w-[55vw] lg:w-[38vw]">
          Elementum delivered the site with inthe timeline as they requested.
          Inthe end, the client found a 50% increase in traffic with in days
          since its launch. They also had an impressive ability to use
          technologies that the company hasn`t used, which have also proved to
          be easy to use and reliable.
        </p>
      </div>

       <div className="relative flex h-[30vh] md:h-full md:w-full px-[6vw]" >
            <img className="absolute top-[4vh] md:top-[60vh] left-[10vw] sm:left-[15vw] md:left-[5vw] w-22 md:w-28 lg:w-[15vw]" src={img2} alt="" />
            <img className="absolute top-[15vh] md:top-[45vh] left-[40vw] sm:left-[35vw] md:left-[3vw] w-18" src={img2} alt="" />
            <img className="absolute top-[7vh] md:top-[30vh] lg:top-[33vh] right-[25vw] sm:right-[40vw] md:left-[12vw] w-15" src={img2} alt="" />
            <img className="absolute top-[15vh] md:top-[25vh] right-[10vw] sm:right-[25vw] md:left-[3vw] w-10" src={img2} alt="" />
        </div> 
    </div>
  );
};
