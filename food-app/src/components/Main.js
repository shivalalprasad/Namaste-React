import FoodCard from "./FoodCard"
// import { restaurentList } from "../util/dummydata"
import { useEffect, useState } from "react"
import SuiMain from "./shimmerui/SuiMain";


const Main = () => {
  let [restaurentlist, setRestaurentList] = useState([]);
  let [filteredResList, setFilteredResList] = useState([]);
  useEffect(() => { fetchData() }, [])

  var fetchData = async () => {
    var data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.8320833&lng=78.7603726&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    // var data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4434646&lng=78.3771953&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    var json = await data.json();
    setRestaurentList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  const keyHandler = () => {
    let filtered = restaurentlist.filter((res) =>
      res.info.name.toLowerCase().includes(search.toLowerCase()))
    // console.log(restaurentlist[0].info.name)
    console.log(filtered)
    setFilteredResList(filtered);
  }
  const [search, setSearch] = useState("");
  console.log(restaurentlist);

  return restaurentlist == undefined || restaurentlist.length === 0 ? (<SuiMain />) : (
    <>
      {/* search bar */}
      <div className="max-w-md mx-auto mb-8">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Biryani, burgers..." required
            value={search}
            onChange={(e) => { setSearch(e.target.value); keyHandler() }}
            onKeyPress={keyHandler}
          />
          <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            onClick={() => {
              let filtered = restaurentlist.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())) && restaurentlist.filter((res) =>
                  res.info.areaName.toLowerCase().includes(search.toLowerCase()))
              // console.log(restaurentlist[0].info.name)
              console.log(filtered);
              setFilteredResList(filtered);
            }}
          >Search</button>
        </div>
      </div>

      <div className="flex justify-center mx-auto flex-wrap mb-10">
        <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider cursor-pointer border-indigo-500 bg-gray-100  rounded-t text-indigo-500"
          onClick={() => { setFilteredResList(restaurentlist) }} title="all Restaurents"
        >
          All
        </a>
        <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider cursor-pointer border-gray-200"
          onClick={() => {
            const topRated = restaurentlist.filter((restaurentList) => restaurentList.info.avgRatingString > 4).sort((a, b) => b.info.avgRatingString - a.info.avgRatingString)
            console.log(topRated);
            topRated.length === 0 ? setFilteredResList(restaurentlist) : setFilteredResList(topRated);
          }} title="more than 4 ⭐ rating">
          Top Rated
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">

        {filteredResList.map((restaurant) => (
          <FoodCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </>
  )
}


export default Main;
