import React from "react";

const CultureCard = ({ src }) => {
  return (
    <div className="h-64 w-44 overflow-hidden rounded-lg opacity-100">
      <img
        src={src}
        alt="bajao"
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
};

export default CultureCard;
