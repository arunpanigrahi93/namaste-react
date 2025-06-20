import { imageCdn } from "../utils/imageCdn";

const RestaurantCard = ({ restra }) => {
  const { name, cuisines, avgRating, areaName } = restra.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={imageCdn + restra.info.cloudinaryImageId}
        alt="img"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4> {areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
