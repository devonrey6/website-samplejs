import React from "react";
import Navbar from "./Navbar";
import TestimonialsCard from "../Cards/TestimonialsCard";
import Data from "../ui/Data";
import Footer from "./Footer";
import MANGCAGANGI from "../../assets/img/mangcagangi.jpg";

const CultureLayout = ({ children }) => {
  return (
    <div
      className=" absolute bg-center bg-cover h-[100%] w-[100%] top-0 z-[-1]"
      style={{ backgroundImage: `url(${MANGCAGANGI})` }}
    >
      <div className="absolute inset-0 bg-black/10 z-0">
        <Navbar />

        <TestimonialsCard />
        <Data />
        <Footer />
      </div>
    </div>
  );
};

export default CultureLayout;
