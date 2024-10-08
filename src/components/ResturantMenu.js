import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import RestaurantCategory from "./ResturantCategory";
import { useState } from "react";

function ResturantMenu() {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);
  const resInfo = useResturantMenu(resId);
  if (resInfo === null) {
    return <Shimmer />;
  }

  // Access the restaurant information
  const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info;
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  const restaurantName = restaurantInfo?.name;
  const cuisines = restaurantInfo?.cuisines?.join(", ");
  const costForTwo = restaurantInfo?.costForTwoMessage;
  const location = restaurantInfo?.locality;
  const rating = restaurantInfo?.avgRating;
  const image = restaurantInfo?.imageId;

  return (
    <div>
      <div className="menu-container">
        <h1 className="restaurant-name font-bold text-blue-500">
          {restaurantName}
        </h1>
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

      <div className="menu text-center">
        <h1 className="text-3xl font-bold ">Menu</h1>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItem={index === showIndex ? true : false}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default ResturantMenu;
