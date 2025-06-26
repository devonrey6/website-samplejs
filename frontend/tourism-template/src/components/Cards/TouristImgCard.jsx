const TouristImgCard = ({
  id,
  isHovered,
  setIsHovered,
  img,
  municipality,
  spot,
}) => {
  //   console.log(id);

  return (
    <div
      className={`flex h-40 w-72 bg-cover flex-col rounded-lg  ${
        isHovered ? "mt-[-3rem]" : ""
      }`}
      style={{ backgroundImage: `url(${img})` }}
      onMouseEnter={() => setIsHovered(id)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mt-auto pl-5 py-2.5 bg-white/0.1 backdrop-blur-[2px] leading-none  ">
        <p className="text-white font-extralight m-0">{spot}</p>
        <p className="text-white text-2xl font-semibold m-0">{municipality}</p>
      </div>
    </div>
  );
};

export default TouristImgCard;
