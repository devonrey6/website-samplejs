import MANGCAGANGI from "../../assets/img/mangcagangi.jpg";
import Navbar from "./Navbar";
const SpotsLayout = ({
  children,
  municipality,
  desc,
  spot,
  isHovered,
  backgrounds,
}) => {
  return (
    <div
      className="absolute bg-center bg-cover h-[100%] w-[100%] top-0 z-[-1] transition-all duration-150 "
      style={{
        backgroundImage: isHovered
          ? `url(${backgrounds})`
          : `url(${MANGCAGANGI})`,
      }}
    >
      <div className="absolute inset-0 bg-black/20 z-0">
        <Navbar />

        <div className="max-w-[1200px] m-auto pt-15">
          <p className="text-white text-5xl leading-[60px] uppercase">
            {municipality ? municipality : "discover"}
          </p>
          <p className="text-white text-7xl uppercase">
            {spot ? spot : "surigao del sur"}
          </p>
          <p className="text-white pt-6 pb-10 font-extralight tracking-wide">
            {desc
              ? desc
              : "Step into a world where every corner holds a story. From crystal-clear beaches to lush mountains and vibrant local culture, Surigao del Sur invites you to experience nature, tradition, and adventure all in one destination. Discover breathtaking views, mouthwatering flavors, and the warmest hospitality — all waiting for you here."}
          </p>
        </div>

        <div className="absolute bottom-6  w-full overflow-x-hidden">
          <div className="relative overflow-hidden  w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SpotsLayout;
