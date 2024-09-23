import FoodCard from "./FoodCard"
import {restaurentList} from "../util/dummydata"

export default Main = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
      {restaurentList.map((restaurant) => (
        <FoodCard key={restaurant.info.id} restaurant={restaurant} />
      ))}
    </div>
  )
}
