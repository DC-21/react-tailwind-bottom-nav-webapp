import React from "react";
import { TypeAnimation } from "react-type-animation";
import own from "../images/own.png";

const About = () => {
  return (
    <div className="w-full flex justify-center items-center md:h-screen h-auto bg-[#f6a98c]">
      <div className="w-full md:flex justify-center items-center px-6 py-4">
        <div className="w-1/2 flex items-center justify-center">
          <div className="flex flex-col w-full">
            <h1 className="font-bold text-4xl text-[#1f2a40]">About</h1>
              <div className="pt-3 w-full flex gap-3 items-center text-2xl">
                <p className="flex gap-2 text-[#51596b]">I am<p className="font-bold text-[#1f2a40]">Chola Kuboko,</p>a Web Developer</p>
              </div>
            <p className="text-[#51596b] text-xl">
              With passion to merge client ideas and design into desired
              products. I have been developing websites for a year now and i would say, i love it especially that it involves bringing designs to life.
            </p>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-full flex  justify-center items-center rounded-full h-full overflow-hidden">
            <img
              className="w-[450px] h-[500px] bg-[#ffe4c4] rounded-full"
              src={own}
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
