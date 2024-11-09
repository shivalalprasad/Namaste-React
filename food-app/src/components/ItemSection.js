import { useState } from "react";
import { CLOUDINARY_IMAGE_ID } from "../util/constants";

const ItemsSection = (ItemCategory) => {
  const [open, close] = useState(false)
  const toogleitems = () => {
    close(!open);
  }
  // console.log(ItemCategory?.data?.card?.card?.itemCards)
  items = ItemCategory?.data?.card?.card?.itemCards;
  // console.log(items)
  // <div key={index}>
  //   {name}
  //   <p>{description}</p>
  //   {/* {showImage && imageId ? <img src={CLOUDINARY_IMAGE_ID+imageId} alt={name}/>:""} */}
  //   <p>{isVeg ? "🟢 VEG" : "🔴 NON-VEG"}</p>
  //   <p>{finalPrice ? finalPrice / 100 : price ? price / 100 : defaultPrice / 100}</p>
  //   {ribbon?.text ? <div className="bg-red-500 text-white px-2 py-1 rounded-full">{ribbon.text}</div> : ""}
  //   {rating ? <div> ⭐ {rating}({ratingCountV2}) </div> : ""}
  // </div>
  return (
    <div>
      <div onClick={toogleitems} className="border-b-4 cursor-pointer bg-gray-100 p-2 rounded-sm w-[75%] mx-auto flex justify-between">
        <h2 className="w-full mx-auto text-2xl text-bolder my-6 text-bold text-black mt-6 px-4">{ItemCategory?.data?.card?.card?.title}</h2>
        <div className="text-3xl my-6 mt-6 pr-8 w-5">{open ? "⇑" : "⇓"}</div>
      </div>
      <div>

        {open ? <div>{items.map((item, index) => {
          const { name, description, isVeg, imageId, defaultPrice, price, finalPrice, ribbon } = item?.card?.info;
          const { rating, ratingCountV2 } = item?.card?.info?.ratings?.aggregatedRating;

          return (
            <>
              <div className="cursor-pointer container w-[75%] mx-auto">
                <div key={index} className="bg-white shadow-md rounded-lg flex mx-auto gap-4 justify-between ">
                  <div className="p-4 w-[75%]">
                    <div className="flex justify-between">
                      <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
                    </div>
                    <div className="flex gap-4 mt-2">
                      <div className=" font-bold text-gray-900 mb-4 price">₹ {finalPrice ? finalPrice / 100 : price ? price / 100 : defaultPrice / 100}</div>
                      {rating ? <div className="text-sm text-yellow-500">★{rating} ({ratingCountV2})</div> : ""}
                      <p>{isVeg ? "🟢 VEG" : "🔴 NON-VEG"}</p>
                      {ribbon?.text ? <div className="px-2 py-1 rounded-full">😍 {ribbon.text}</div> : ""}
                    </div>
                    <p className="text-sm text-gray-600 tracking-wider mt-2">{description}</p>
                    <div className="flex items-center mt-4">
                    </div>
                  </div>
                  <div className="relative w-[25%]">
                    {imageId ? <img loading="lazy" className="h-48 rounded-lg mt-4" src={CLOUDINARY_IMAGE_ID + imageId} alt={name} /> : ""}
                    <button className="absolute bottom-4 right-[50%] mx-auto bg-orange-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">ADD</button>
                  </div>
                </div>
              </div>
            </>
          )
        })}</div> : ""}
      </div>
    </div>
  )
}

export default ItemsSection;
