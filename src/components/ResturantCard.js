import LOGO_URL from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, slaString } =
    resData?.data;
  return (
    <div className="res-card">
      <img className="res-logo" src={LOGO_URL+ cloudinaryImageId} />
      <h2 className="name">{name}</h2>
      <h4 className="dish">{cuisines.join(", ")}</h4>
      <p className="rating">{avgRating}</p>
      <p className="time"> {slaString}</p>
    </div>
  );
};
export default RestaurantCard;
