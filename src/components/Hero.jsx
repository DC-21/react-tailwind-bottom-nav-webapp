import { Player } from "@lottiefiles/react-lottie-player";

const Hero = () => {
  return (
    <div className="bg-[#60c0d2] flex flex-col items-center justify-center px-3 py-2">
      <div className="w-full md:flex flex-row md:items-center">
        <div className="w-full md:w-1/2 md:px-6">
          <div className="w-full">
            <p className="text-[#1f2a40] text-center md:text-left font-bold text-xl md:text-4xl">
              Design and Build Stunning World Class Websites With Me
            </p>
            <p className="text-[#1f2a40] md:text-left text-center md:text-2xl text-lg md:pt-4 pt-1">
              Already have a project in mind?
            </p>
            <p className="md:flex hidden text-[#1f2a40] md:text-left text-center md:text-2xl text-lg md:pt-3 pt-1">
              You are welcome, I will build an E-Commerce website, Point of Sale
              management Web App, portfolio website, and Blogs at affordable
              prices. Make your order now and don't be left out.
            </p>
            <p>Feel free to reach out anytime, anywhere...</p>
          </div>
          <div className="w-full md:justify-start justify-center pt-4 flex gap-6">
            <a className="py-2 px-3 bg-[#8000e3] cursor-pointer text-white md:text-xl text-sm rounded">
              Hire Me
            </a>
            <a className="py-2 px-3 bg-[#1f2a40] cursor-pointer text-white md:text-xl text-sm rounded">
              Donate
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 justify-center">
          <div className="justify-center">
            <Player
              autoplay
              loop
              src="https://lottie.host/e45aa305-a945-42e0-8143-c6a65f155dc9/XmOLkBQvzU.json"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
