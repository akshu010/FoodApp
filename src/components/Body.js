import RestaurantCard from "./ResturantCard.js";
import resList from "../utils/MockData.js";

const Body = () => {
  return (
    <div className="body">
      <div className="search-box">
        <input />
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
