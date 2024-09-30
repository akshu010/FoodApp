import RestaurantCard from "./ResturantCard.js";
import resList from "../utils/MockData.js";
import { useState } from "react";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="search-box">
        <input />
        <button
          className="btn"
          onClick={() => {
            const filterRating = ListOfRestaurants.filter(
              (res) => res.data.avgRating >= 4
            );
            setListOfRestaurants(filterRating);
          }}
        >
          Top Rated⭐
        </button>
      </div>
      <div className="res-container">
        {ListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

