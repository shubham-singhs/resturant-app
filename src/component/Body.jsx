import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfResturant, setListOfResturant] = useState([]);
  const [filteredResturant, setfilteredResturant] = useState([]);
  const [seachText, setSeachText] = useState("");
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfResturant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredResturant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };
  useEffect(() => {
    fetchData();
  }, []);

  return listOfResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-block">
        <div className="search">
          <input
            type="text"
            name=""
            id=""
            className="search-box"
            value={seachText}
            onChange={(e) => {
              setSeachText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
               
              setfilteredResturant( listOfResturant.filter((res) => res.info.name.includes(seachText)));
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              setListOfResturant(
                filteredResturant.filter((res) => res.info.avgRating > 4)
              );
            }}
          >
            {" "}
            Top Rated Resturant
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredResturant.map((ResturantCardData) => (
          <ResturantCard
            key={ResturantCardData.id}
            resData={ResturantCardData}
          ></ResturantCard>
        ))}
      </div>
    </div>
  );
};
export default Body;
