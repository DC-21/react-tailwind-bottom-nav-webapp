import React, { useState } from "react";
import { Link } from "react-router-dom";

const Bottom = () => {
  const [active, setActive] = useState(0);

  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconClick = (index) => {
    setActive(index === active ? null : index);
  };

  const handleIconHover = (index) => {
    setHoveredIcon(index);
  };

  return (
    <div className="fixed flex w-full md:py-4 py-2 px-6 bottom-0 justify-center z-10">
      <div className="md:w-[420px] w-[300px] md:h-20 h-16 flex bottom-0 sticky md:gap-4 gap-2 bg-[#1f2a40] justify-center items-center py-3 text-white rounded-3xl">
        <Link to="/"
          className={`flex flex-col items-center gap-2 cursor-pointer w-20 ${
            active === 0 ? "bg-[#60c0d2] rounded-2xl text-[#1f2a40]" : ""
          } ${hoveredIcon === 0 ? "hovered-icon" : ""}`}
          onClick={() => handleIconClick(0)}
          onMouseEnter={() => handleIconHover(0)}
          onMouseLeave={() => handleIconHover(null)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="2em"
            width="2em"
            style={{
              transform: hoveredIcon === 0 ? "scale(1.2)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          >
            <path d="M5 22h14a2 2 0 002-2v-9a1 1 0 00-.29-.71l-8-8a1 1 0 00-1.41 0l-8 8A1 1 0 003 11v9a2 2 0 002 2zm5-2v-5h4v5zm-5-8.59l7-7 7 7V20h-3v-5a2 2 0 00-2-2h-4a2 2 0 00-2 2v5H5z" />
          </svg>
          {active === 0 && <p className={`home-text ${active === 0 ? "" : "hidden sm:block"}`}>Home</p>}
        </Link>
        <Link to="/projects"
          className={`flex flex-col items-center gap-2 cursor-pointer w-20 ${
            active === 1 ? "bg-white rounded-2xl text-[#1f2a40]" : ""
          } ${hoveredIcon === 1 ? "hovered-icon" : ""}`}
          onClick={() => handleIconClick(1)}
          onMouseEnter={() => handleIconHover(1)}
          onMouseLeave={() => handleIconHover(null)}
        >
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="2em"
            width="2em"
            style={{
              transform: hoveredIcon === 1 ? "scale(1.2)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          >
            <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
          </svg>
          {active === 1 && <p>Projects</p>}
        </Link>
        <Link to="/about"
          className={`flex flex-col items-center gap-2 cursor-pointer w-20 ${
            active === 2 ? "bg-[#f6a98c] rounded-2xl text-[#1f2a40]" : ""
          } ${hoveredIcon === 2 ? "hovered-icon" : ""}`}
          onClick={() => handleIconClick(2)}
          onMouseEnter={() => handleIconHover(2)}
          onMouseLeave={() => handleIconHover(null)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="2em"
            width="2em"
            style={{
              transform: hoveredIcon === 2 ? "scale(1.2)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          >
            <path d="M12 2A10.13 10.13 0 002 12a10 10 0 004 7.92V20h.1a9.7 9.7 0 0011.8 0h.1v-.08A10 10 0 0022 12 10.13 10.13 0 0012 2zM8.07 18.93A3 3 0 0111 16.57h2a3 3 0 012.93 2.36 7.75 7.75 0 01-7.86 0zm9.54-1.29A5 5 0 0013 14.57h-2a5 5 0 00-4.61 3.07A8 8 0 014 12a8.1 8.1 0 018-8 8.1 8.1 0 018 8 8 8 0 01-2.39 5.64z" />
            <path d="M12 6a3.91 3.91 0 00-4 4 3.91 3.91 0 004 4 3.91 3.91 0 004-4 3.91 3.91 0 00-4-4zm0 6a1.91 1.91 0 01-2-2 1.91 1.91 0 012-2 1.91 1.91 0 012 2 1.91 1.91 0 01-2 2z" />
          </svg>
          {active === 2 && <p>About</p>}
        </Link>
        <Link to="/contacts"
          className={`flex flex-col items-center gap-2 cursor-pointer w-20 ${
            active === 3 ? "bg-[#60c0d2] rounded-2xl text-[#1f2a40]" : ""
          } ${hoveredIcon === 3 ? "hovered-icon" : ""}`}
          onClick={() => handleIconClick(3)}
          onMouseEnter={() => handleIconHover(3)}
          onMouseLeave={() => handleIconHover(null)}
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            height="2em"
            width="2em"
            style={{
              transform: hoveredIcon === 3 ? "scale(1.2)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2M15 7a2 2 0 012 2M15 3a6 6 0 016 6" />
          </svg>
          {active === 3 && <p>Contact</p>}
        </Link>
      </div>
    </div>
  );
};

export default Bottom;
