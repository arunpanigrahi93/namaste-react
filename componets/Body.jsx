import RestaurantCard from "./RestaurantCard";
import { resturantObj } from "../utils/resturantObj";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState("");
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.9890648&lng=82.2474648&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    // console.log(data);
    setData(
      data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterData(
      data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (data.length === 0) {
    return <Shimmer />;
  }

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = () => {
    const filtered = data.filter((item) =>
      item.info.name.toLowerCase().includes(inputText.toLowerCase())
    );
    // console.log(filtered);
    setFilterData(filtered);
  };

  return (
    <div className="body">
      <div className="search">
        <input value={inputText} onChange={handleChange} />
        <button onClick={handleClick}>Search</button>
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
