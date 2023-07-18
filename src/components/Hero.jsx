/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#60c0d2] flex w-full h-screen px-3 py-2 justify-center items-center">
      <div className="w-full h-full flex justify-center">
        <div className="justify-center items-center flex flex-col w-1/2">
          <div className="justify-center">
            <p className="text-left font-bold text-4xl text-[#1f2a40]">
              Design and Build Stunning World Class Websites With Me
            </p>
            <p>Already have a design at hand ?</p>
            <p>
              You are welcome, i Will build an E-Commerce website, Point of Sale
              management Web App, portfolio website and Blogs at affordable
              prices. Make your order now and don't be left out
            </p>
          </div>
          <div className="justify-center">
            <p className="text-left">Reach out anytime, anywhere</p>
            <div>
              <a href="">Email</a>
              <a href="">App</a>
              <a href="">Fb</a>
              <a href="">Github</a>
            </div>
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

export default Hero;
