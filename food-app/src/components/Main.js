import FoodCard from "./FoodCard"
// import { restaurentList } from "../util/dummydata"
import { useEffect, useState } from "react"

const Main = () => {
  let [restaurentlist, setRestaurentList] = useState([]);
  // console.log(restaurentList)
  // console.log("restaurent")
  useEffect(() => { fetchData() }, [])

  var fetchData = async () => {
    var data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.8320833&lng=78.7603726&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    var json = await data.json();
    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setRestaurentList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  }

  return (
    <>
      <div className="flex justify-center mx-auto flex-wrap mb-10">
        <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider cursor-pointer border-indigo-500 bg-gray-100  rounded-t text-indigo-500"
          onClick={fetchData}
        >
          All
        </a>
        <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider cursor-pointer border-gray-200"
          onClick={() => {
            const topRated = restaurentlist.filter((restaurentList) => restaurentList.info.avgRatingString > 4)
            console.log(topRated);
            setRestaurentList(topRated);
          }
          }>
          Top Rated
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">

        {restaurentlist.map((restaurant) => (
          <FoodCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>

    </>
  )
}


export default Main;
