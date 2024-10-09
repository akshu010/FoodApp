import RestaurantCard, { withPromtedLable } from "./ResturantCard.js";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import OfflinePage from "./OfflinePage.js";
import { MAIN_API } from "../utils/constants.js";
import UserContext from "../utils/UserContext.js";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [serachText, setSearchText] = useState("");
  const RestaurantCardPermoted = withPromtedLable(RestaurantCard);
  // console.log(ListOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MAIN_API);
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResturants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const { loggedInUser, setUserName } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <OfflinePage />;
  }
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
        <label className="p-2">
          User :
          <input
            className="w-[150px] p-2 border-none outline-none rounded-xl"
            type="text"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="res-container">
        {filteredResturants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/resturant/" + restaurant?.info?.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPermoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
