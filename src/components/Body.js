import RestaurantCard from "./ResturantCard.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [serachText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7042912&lng=76.7104408&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResturants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search here"
          value={serachText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filteredResturants = ListOfRestaurants.filter((res) =>
              res.info.name
                .toLocaleLowerCase()
                .includes(serachText.toLocaleLowerCase())
            );
            setFilteredResturants(filteredResturants);
          }}
          className="searchbtn"
        >
          <i class=" ri-search-line"></i>
        </button>
        <button
          className="btn"
          onClick={() => {
            const filterRating = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredResturants(filterRating);
          }}
        >
          Top Rated⭐
        </button>
      </div>
      <div className="res-container">
        {filteredResturants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
