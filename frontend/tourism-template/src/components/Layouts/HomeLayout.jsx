import React from "react";
import Navbar from "./Navbar";
import HOME_IMG from "../../assets/img/home.jpg";

const HomeLayout = ({
  children,
  title,
  country,
  details,
  button,
  isHovered,
  backgrounds,
}) => {
  return (
    <div
      className={`bg-cover min-h-screen transition-all duration-300 ${
        isHovered ? "" : ""
      }`}
    >
      <div
        className="absolute bg-cover h-[100%] w-[100%] top-0 z-[-1] transition-all"
        style={{
          backgroundImage: isHovered
            ? `url(${backgrounds})`
            : `url(${HOME_IMG})`,
        }}
      >
        <div className="w-[30%] h-[100%] bg-white/10 backdrop-blur-[2px]"></div>
      </div>
      <Navbar />

      <div className="max-w-[1200px] m-auto pt-52">
        <p className="text-white text-5xl font-extrabold uppercase leading-[60px]">
          {title}
        </p>
        <p className="text-white text-7xl tracking-[1.5px] uppercase">
          {country}
        </p>
        <p className="text-white w-[60%] pt-6 pb-10 font-extralight tracking-[1.5px]">
          {details}
        </p>
        <button className="bg-gray-400/30 py-3 px-12 text-white rounded-4xl tracking-[1.5px] pointer">
          {button}
        </button>
      </div>

      <div className="bottom-6 absolute left-[35rem]">
        <div className="flex gap-6 list-none w-[65vw] h-60 items-center">
          {" "}
          {children}
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
