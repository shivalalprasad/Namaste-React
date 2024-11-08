import { Link } from "react-router-dom";
import { RES_IMG } from "../util/constants";

const FoodCard = ({ restaurant }) => {
  const discountText = restaurant?.info?.aggregatedDiscountInfoV3?.header || "";
  const discountSubText = restaurant?.info?.aggregatedDiscountInfoV3?.subHeader || "";
  const discountTag = restaurant?.info?.aggregatedDiscountInfoV3?.discountTag || "";
  // const discountMessage = discountText
  //   ? `${discountText} ${discountSubText} ${discountTag}`
  //   : "₹100 OFF ABOVE ₹299";
  // console.log(restaurant)
  return (
    <div className="relative mx-auto w-full my-2" title={restaurant.info.name}>
    {restaurant.info.promoted ?<span className="absolute bottom-2 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-Emerald-600 text-sm font-medium text-white select-none" title="cost for two">Promoted</span>:""}
      <Link to={"/Restaurent/" + restaurant.info.id} className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
        <div className="shadow p-4 rounded-lg bg-white">
          <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
            <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
              <div className="absolute inset-0 bg-black w-full">
                <img className="h-60 rounded w-full object-cover object-center" src={RES_IMG + restaurant.info.cloudinaryImageId} alt={restaurant.info.name} />
              </div>
            </div>
            {/* <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none" title="discount">
              {discountMessage}
            </span> */}
            {restaurant?.info?.aggregatedDiscountInfoV3?.header || restaurant?.info?.aggregatedDiscountInfoV3?.subHeader || restaurant?.info?.aggregatedDiscountInfoV3?.discountTag ? <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none" title="discount">
              {discountText} {discountSubText} {discountTag}
            </span>:""}
            <span className="absolute bottom-2 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-blue-500 text-sm font-medium text-white select-none" title="cost for two">
              {restaurant.info.costForTwo}
            </span>
          </div>

          <div className="mt-4">
            <h2 className="font-bold text-base md:text-lg text-gray-800 line-clamp-1" >
              {restaurant.info.name}
            </h2>
            <h2 className="font-semibold  text-sm md:text-base text-gray-800 line-clamp-1" title={restaurant.info.areaName}>
              {restaurant.info.areaName}
            </h2>
            <p className="mt-2 text-sm text-gray-800 line-clamp-1" title={restaurant.info.cuisines.join(', ')}>
              {restaurant.info.cuisines.join(', ')}
            </p>
          </div>

          <div className="grid grid-cols-2 grid-rows-1 gap-4 mt-8">
            <p className="inline-flex flex-row items-center text-gray-800">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540"></stop></linearGradient></defs></svg>
              <span className="font-bold xl:mt-0 pl-2" title="rating">
                {restaurant.info.avgRatingString}
              </span>
            </p>
            <p className="inline-flex flex-row items-center text-gray-800">
              <span className="font-bold mt-2 xl:mt-0" title="delevery time">
                {restaurant.info.sla.slaString}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default FoodCard;
