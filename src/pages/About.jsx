import React from "react";
import { TypeAnimation } from "react-type-animation";
import own from "../images/own.png";

const About = () => {
  return (
    <div className="w-full flex justify-center items-center md:h-screen h-auto bg-[#f6a98c]">
      <div className="w-full md:flex justify-center items-center px-6 py-4">
        <div className="w-1/2 flex items-center justify-center">
          <div className="flex flex-col w-full">
            <h1 className="font-bold text-4xl">About</h1>
              <div className="pt-3 w-full flex gap-3 items-center text-2xl">
                <p>I am</p><p className="font-bold">Chola Kuboko,</p>
                <TypeAnimation
                  sequence={[
                    "A Web Developer",
                    2000,
                    "A Web Designer",
                    2000,
                  ]}
                  className="md:text-3xl z-10 md:pt-0 pt-8 text-sm  md:text-left text-center w-[150px] font-bold text-white"
                  repeat={Infinity}
                  wrapper="p"
                />
              </div>
            <p>
              With passion to merge client ideas and design into desired
              products.
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
