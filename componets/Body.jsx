import RestaurantCard from "./RestaurantCard";
import { resturantObj } from "../utils/resturantObj";
import { useState, useEffect } from "react";
const Body = () => {
  const [filterData, setFilterData] = useState([]);
  const handleClick = () => {
    const filteredData = resturantObj.filter(
      (item) => item.info.avgRating > 4.2
    );
    setFilterData(filteredData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.9890648&lng=82.2474648&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    setFilterData(
      data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (filterData.length === 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="body">
      <div className="search">
        <button onClick={handleClick}>Filter top rated</button>
      </div>
      <div className="res-container">
        {filterData.map((item) => (
          <div key={item.info.id}>
            <RestaurantCard restra={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Body;
