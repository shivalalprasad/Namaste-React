import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

export const useResMenu = (resId) => {
  const [resData, setResData] = useState(null);
  const [resItemsData, setResItemsData] = useState(null)

  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    var data = await fetch( MENU_API + resId);
    var json = await data.json();
    setResData(json?.data?.cards[2]?.card.card?.info)
    var itemsData = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(cards=>cards?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    setResItemsData(itemsData)
  }

  return [resData,resItemsData];
}
