import React from "react";
import IMG_LOGO from "../../assets/img/SUR SUR LOGO- NEG.png";
import { useNavigate } from "react-router-dom";

const Navbar = ({ dark }) => {
  const navigate = useNavigate();

  return (
    <div className="flex p-[1.5rem] justify-between max-w-[1200px] m-auto items-center bg-test">
      <img src={IMG_LOGO} alt="img logo" className="size-[75px]" />
      <ul
        className={`flex list-none gap-32 uppercase font-[300] text-xl ${
          dark === "dark" ? "text-black" : "text-white"
        }`}
      >
        <li className="cursor-pointer" onClick={() => navigate("/")}>
          Home
        </li>
        <li className="cursor-pointer" onClick={() => navigate("/spots")}>
          Spot
        </li>
        <li className="cursor-pointer" onClick={() => navigate("/culture")}>
          Culture
        </li>
        <li className="cursor-pointer" onClick={() => navigate("/about")}>
          About
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
