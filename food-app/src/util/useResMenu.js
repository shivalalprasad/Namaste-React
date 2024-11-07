import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

export const useResMenu = (resId) => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    var data = await fetch( MENU_API + resId);
    var json = await data.json();
    setResData(json)
  }

  return resData;
}
export const useResItemsData = (resId) => {
  const [resItemsData, setResItemsData] = useState(null)

  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    var data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.8320833&lng=78.7603726&restaurantId=" + resId);
    var json = await data.json();
    setResItemsData(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  }

  return resItemsData;
}
