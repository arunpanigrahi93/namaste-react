import RestaurantCard from "./RestaurantCard";
import { resturantObj } from "../utils/resturantObj";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resturantObj.map((item) => (
          <div key={item.info.id}>
            <RestaurantCard restra={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Body;
