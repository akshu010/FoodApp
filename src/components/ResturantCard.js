import { LOGO_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {loggedInUser} = useContext(UserContext)
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={LOGO_URL + cloudinaryImageId} />
      <h2 className="name font-bold text-lg">{name}</h2>
      <h4 className="dish">{cuisines.join(", ")}</h4>
      <p className="rating">{avgRating} ⭐</p>
      <p className="time"> {sla?.slaString}</p>
      <p className="p-[5px] text-[18px] text-gray-700 dec"> User: {loggedInUser}</p>
    </div>
  );
};


export const withPromtedLable = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Prmoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};
export default RestaurantCard;