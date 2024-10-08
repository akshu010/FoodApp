import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="border-b-2 border-gray-200 w-6/12 mx-auto my-2 p-2 text-left"
        >
           <div className="flex justify-between"> <img src={CDN_URL + item?.card?.info?.imageId} className="w-14"/>
            
              <button className="border border-black p-3 text-white bg-black rounded-md cursor-pointer">Add+</button>
            </div>
          <p className="text-xl font-semibold">{item?.card?.info?.name}</p>
          <p>
          ₹{item?.card?.info?.price/100
             }
          </p>
          <p className="text-sm text-gray-400">
            {item?.card?.info?.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
