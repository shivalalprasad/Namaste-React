function ItemCat(item,index) {
  console.log(item,index)
  const { name, description, isVeg, imageId, defaultPrice, price, finalPrice, ribbon } = item?.card?.info;
  const { rating, ratingCountV2 } = item?.card?.info?.ratings?.aggregatedRating;

  return (
    <>
      <div className="container w-[75%] mx-auto">
        <div key={index} className="bg-white shadow-md rounded-lg flex mx-auto gap-4 justify-between ">
          <div className="p-4 w-[75%]">
            <div className="flex justify-between">
              <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
            </div>
            <div className="flex gap-4 mt-2">
              <div className=" font-bold text-gray-900 mb-4 price">₹ {finalPrice ? finalPrice / 100 : price ? price / 100 : defaultPrice / 100}</div>
              {rating ? <div className="text-sm text-yellow-500">★{rating} ({ratingCountV2})</div> : ""}
            </div>
            <p className="text-sm text-gray-600 tracking-wider mt-2">{description}</p>
            <div className="flex items-center mt-4">
            </div>
          </div>
            <div className="relative w-[25%]">
            {imageId ? <img loading="lazy" className="h-48 rounded-lg mt-4" src={CLOUDINARY_IMAGE_ID+imageId} alt={name}/>:""}
              <button className="absolute bottom-4 right-[50%] mx-auto bg-orange-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">ADD</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default ItemCat;
