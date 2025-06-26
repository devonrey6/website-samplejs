import React, { useState } from "react";
import IMG_CARD1 from "../../assets/img/tinuyan.jpg";
import IMG_CARD2 from "../../assets/img/britania.jpg";
import IMG_CARD3 from "../../assets/img/enchanted.jpg";
import SpotsLayout from "../Layouts/SpotsLayout";
import TouristImgCard from "../Cards/TouristImgCard";

import BAROBO from "../../assets/img/spots/bogac.jpg";
import CAGWAIT from "../../assets/img/spots/cagwait.jpg";
import LASWITAN from "../../assets/img/spots/laswitan.jpg";
import BACULIN from "../../assets/img/spots/baculin.jpg";
import WHITEFALLS from "../../assets/img/spots/whitefalls.JPG";
import POLIO from "../../assets/img/spots/polio.jpg";

const Spots = () => {
  const [isHoveredCardId, setIsHoveredCardId] = useState(null);

  const backgrounds = {
    card1: BAROBO,
    card2: CAGWAIT,
    card3: LASWITAN,
    card4: BACULIN,
    card5: WHITEFALLS,
    card6: POLIO,
  };
  const labels = {
    card1: {
      municipality: "Barobo, Surigao del Sur",
      spot: "Bogac Cold Spring",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Totam repellendus voluptatum quod veritatis, quaerat expedita dicta nobis.",
    },
    card2: {
      municipality: "Cagwait",
      spot: "Cagwait Beach",
      desc: "A beautiful beach in Cagwait.",
    },
    card3: {
      municipality: "Barobo",
      spot: "Bogac Cold Spring",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Totam repellendus voluptatum quod veritatis, quaerat expedita dicta nobis.",
    },
    card4: {
      municipality: "Cagwait",
      spot: "Cagwait Beach",
      desc: "A beautiful beach in Cagwait.",
    },
    card5: {
      municipality: "Barobo",
      spot: "Bogac Cold Spring",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Totam repellendus voluptatum quod veritatis, quaerat expedita dicta nobis.",
    },
    card6: {
      municipality: "Cagwait",
      spot: "Cagwait Beach",
      desc: "A beautiful beach in Cagwait.",
    },
  };
  const currentDesc = isHoveredCardId ? labels[isHoveredCardId] : "";
  console.log(currentDesc.municipality);

  const currentBackground = isHoveredCardId ? backgrounds[isHoveredCardId] : "";

  return (
    <SpotsLayout
      municipality={currentDesc.municipality}
      spot={currentDesc.spot}
      desc={currentDesc.desc}
      isHovered={isHoveredCardId}
      backgrounds={currentBackground}
    >
      <div className="loop-scroll flex space-x-16 w-max">
        {[...Array(5)].map((_, i) => (
          <>
            <TouristImgCard
              key={`barobo-${i}`}
              img={BAROBO}
              municipality="Barobo"
              spot="Bogac Cold Spring"
              id="card1"
              isHovered={isHoveredCardId === "card1"}
              setIsHovered={setIsHoveredCardId}
            />

            <TouristImgCard
              key={`cagwait-${i}`}
              img={CAGWAIT}
              municipality="Cagwait"
              spot="Cagwait Beach"
              id="card2"
              isHovered={isHoveredCardId === "card2"}
              setIsHovered={setIsHoveredCardId}
            />

            <TouristImgCard
              key={`laswitan-${i}`}
              img={LASWITAN}
              municipality="Cortes"
              spot="Laswitan"
              id="card3"
              isHovered={isHoveredCardId === "card3"}
              setIsHovered={setIsHoveredCardId}
            />

            <TouristImgCard
              key={`whitefalls-${i}`}
              img={WHITEFALLS}
              municipality="San Miguel"
              spot="White Falls"
              id="card4"
              isHovered={isHoveredCardId === "card4"}
              setIsHovered={setIsHoveredCardId}
            />

            <TouristImgCard
              key={`baculin-${i}`}
              img={BACULIN}
              municipality="Hinatuan"
              spot="Baculin Amazing Sand"
              id="card5"
              isHovered={isHoveredCardId === "card5"}
              setIsHovered={setIsHoveredCardId}
            />

            <TouristImgCard
              key={`polio-${i}`}
              img={POLIO}
              municipality="Hinatuan"
              spot="FOLIO"
              id="card6"
              isHovered={isHoveredCardId === "card6"}
              setIsHovered={setIsHoveredCardId}
            />
          </>
        ))}
      </div>
    </SpotsLayout>
  );
};

export default Spots;
