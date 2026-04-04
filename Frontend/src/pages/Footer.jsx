import React from "react";
import MainText from "../assets/FooterAssets/MainText.svg";

export const Footer = () => {
  return (
    <div className="mt-[20vh] px-[8vw] bg-[#D7EEDD]">
      <div className="flex flex-col items-center gap-[2vh] py-[8vh] border-b border-gray-400">
        <img className="w-[70vw] md:w-[50vw] lg:w-[40vw]" src={MainText} alt="Main Text" />
        <p className="text-sm text-center w-[65vw]">
          To make your stay special and even more memorable
        </p>
        <button className="bg-black text-white px-[6vw] md:px-[4vw] py-[1vh] rounded-full">
          Subscribe
        </button>
      </div>

      <div className="pt-[8vh] flex flex-col md:flex-row md:justify-between items-center gap-[3vh]">
        <div className="flex flex-col items-center md:items-start gap-[1vh]">
          <h2 className="font-semibold text-lg">Company</h2>
          <p>Home</p>
          <p>Studio</p>
          <p>Services</p>
          <p>Blog</p>
        </div>

        <div className="flex flex-col items-center md:items-start gap-[1vh]">
          <h2 className="font-semibold text-lg">Terms & Policies</h2>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Explore</p>
          <p>Accessibility</p>
        </div>

        <div className="flex flex-col items-center md:items-start gap-[1vh]">
          <h2 className="font-semibold text-lg">Follow Us</h2>
          <p>Instagram</p>
          <p>LinkedIn</p>
          <p>Twitter</p>
          <p>YouTube</p>
        </div>

        <div className="flex flex-col items-center md:items-start gap-[1vh]">
          <h2 className="font-semibold text-lg">Terms & Policies</h2>
          <p>1490w Fluton ste, STE 2D</p>
          <p>0987654321</p>
          <p>info@elementum.com</p>
          <p>man street</p>
        </div>
      </div>
      <p className="text-center text-sm py-[4vh]">
         @2023 Your Elementum. All rights reserved.
      </p>
    </div>
  );
};
