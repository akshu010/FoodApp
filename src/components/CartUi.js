import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { removeItem } from "../utils/cartSlice";

const CartUi = ({ items }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="max-w-xl mx-auto border border-gray-300 shadow-lg rounded-lg p-4">
      {items.map((item) => {
        const { id, name, imageId, price, description } = item?.card?.info;
        return (
          <div
            key={id}
            className="flex items-center justify-between mb-4 p-4 bg-white rounded-lg shadow-sm"
          >
            <div className="flex justify-between">
              {" "}
              <img src={CDN_URL + item?.card?.info?.imageId} className="w-14" />
              <button
                className="border border-black p-3 text-white bg-black rounded-md cursor-pointer z-10"
                onClick={() => handleRemoveItem(id)}
              >
                Remove
              </button>
            </div>
            <div className="ml-4 flex-1">
              <p className="text-lg font-semibold">{name}</p>
              <p className="text-gray-500">₹{price / 100}</p>
              <p className="text-sm text-gray-400 mt-1">{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartUi;
