import React from "react";
import CultureLayout from "../Layouts/CultureLayout";

const Culture = () => {
  return (
    <CultureLayout>
      <div className="max-w-lg">
        <h1 className="font text-4xl font-bold tracking-tight text-gray-900">
          Manobo, Mamanwas & Products
        </h1>

        <p className="mt-4 text-xl text-gray-500 indent text-justify">
          The Manobo belong to the original stock of proto-Philippine or
          proto-Austronesian people who came from south China thousands of years
          ago, earlier than the Ifugao and other terrace-building peoples of
          northern Luzon. The term “Proto-Manobo” designates this stock of
          aboriginal non-Negritoid people of Mindanao. The first Manobo settlers
          lived in northern Mindanao—in Camiguin, Cagayan, and some areas of
          Bukidnon and Misamis Oriental.
        </p>

        <p className="mt-4 text-xl text-gray-500 text-justify">
          Most Manobo inhabit the river valleys, hillsides, plateaus, and
          interiors of Agusan, Bukidnon, Cotabato, Davao, Misamis Oriental, and
          Surigao del Sur. The subgroup Manuvu inhabits a contiguous area along
          southern Bukidnon, northeastern Cotabato, and northwestern Davao.
        </p>
      </div>
    </CultureLayout>
  );
};

export default Culture;
