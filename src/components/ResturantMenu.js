import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import { LOGO_URL } from "../utils/constants";

function ResturantMenu() {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console;

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json?.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  // Access the restaurant information
  const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info;
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  const restaurantName = restaurantInfo?.name;
  const cuisines = restaurantInfo?.cuisines?.join(", ");
  const costForTwo = restaurantInfo?.costForTwoMessage;
  const location = restaurantInfo?.locality;
  const rating = restaurantInfo?.avgRating;
  const image = restaurantInfo?.imageId;
  return (
    <div>
      <div className="menu-container">
        <h1 className="restaurant-name">{restaurantName}</h1>
        <p className="restaurant-cuisines">
          <strong>Cuisines:</strong> {cuisines}
        </p>
        <p className="restaurant-cost">
          <strong>Cost for Two:</strong> {costForTwo}
        </p>
        <p className="restaurant-location">
          <strong>Location:</strong> {location}
        </p>
        <p className="restaurant-location">
          <strong>Rating:</strong> {rating}
        </p>
      </div>
      <div className="menu">
        <h1>Menu</h1>
        <ul>
          {itemCards.map((item, index) => (
            <li key={item?.card?.info?.id || index}>
              {item?.card?.info?.name} - Rs{" "}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResturantMenu;
