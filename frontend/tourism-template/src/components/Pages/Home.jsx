import React, { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import TouristImgCard from "../Cards/TouristImgCard";
import IMG_CARD1 from "../../assets/img/tinuyan.jpg";
import IMG_CARD2 from "../../assets/img/britania.jpg";
import IMG_CARD3 from "../../assets/img/enchanted.jpg";

const Home = () => {
  const [isHoveredCardId, setIsHoveredCardId] = useState(null);

  const backgrounds = {
    card1: IMG_CARD1,
    card2: IMG_CARD2,
    card3: IMG_CARD3,
  };
  const currentBackground = isHoveredCardId ? backgrounds[isHoveredCardId] : "";
  console.log(currentBackground);
  return (
    <HomeLayout
      title="Discover"
      country="Surigao del Sur"
      details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          repellendus voluptatum quod veritatis, quaerat expedita dicta nobis.
          Perspiciatis doloribus voluptatem, magni natus iusto ex, fugiat
          molestias, laudantium possimus dolores soluta."
      button="Explore"
      isHovered={isHoveredCardId}
      backgrounds={currentBackground}
    >
      <TouristImgCard
        img={IMG_CARD1}
        municipality="Bislig City"
        spot="Tinuy-an Falls"
        id="card1"
        isHovered={isHoveredCardId === "card1"}
        setIsHovered={setIsHoveredCardId}
      />
      <TouristImgCard
        img={IMG_CARD2}
        municipality="San Agustin"
        spot="Britania Islands"
        id="card2"
        isHovered={isHoveredCardId === "card2"}
        setIsHovered={setIsHoveredCardId}
      />
      <TouristImgCard
        img={IMG_CARD3}
        municipality="Hinatuan"
        spot="Enchanted River"
        id="card3"
        isHovered={isHoveredCardId === "card3"}
        setIsHovered={setIsHoveredCardId}
      />
    </HomeLayout>
  );
};

export default Home;
