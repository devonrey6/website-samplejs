import React from "react";
import Navbar from "./Navbar";
import BAJAO from "../../assets/img/culture/1.jpg";
import CultureCard from "../Cards/CultureCard";

const CultureLayout = ({ children }) => {
  return (
    <>
      <Navbar dark="dark" />

      <div className="relative overflow-hidden bg-gray">
        <div className="pb-80 pt-40 ">
          <div className="relative mx-auto max-w-7xl px-8  ">
            {children}
            <div>
              <div className="mt-10">
                {/* decorative image grid */}
                <div className="pointer-events-none absolute inset-y-0 mx-auto w-full max-w-7xl">
                  <div className="absolute transform left-1/2 top-1/2 -translate-y-1/2 translate-x-8">
                    <div className="flex items-center space-x-8 ">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-8">
                        <CultureCard src={BAJAO} />
                        <CultureCard src={BAJAO} />
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-8">
                        <CultureCard src={BAJAO} />
                        <CultureCard src={BAJAO} />
                        <CultureCard src={BAJAO} />
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-8">
                        <CultureCard src={BAJAO} />
                        <CultureCard src={BAJAO} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Culture
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CultureLayout;
