import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  return (
    <div className="p-4">
      <div className="group " onClick={setShowIndex}>
        <div className=" m-auto p-4 rounded-lg no-arrow text-lg font-medium cursor-pointer bg-gray-300 h-16 w-6/12 flex items-center justify-between ">
          <span className="font-bold">
            {data.title}({data.itemCards.length})
          </span>
          <span>{showItem ? "⬆️" : "⬇️"}</span>
        </div>
        <div className="mt-2 text-gray-600">
          {showItem && <ItemList items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};
export default RestaurantCategory;
