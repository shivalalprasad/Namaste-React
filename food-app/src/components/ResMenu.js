import { ITEM_IMG, CLOUDINARY_IMAGE_ID } from "../util/constants"
import { useParams } from "react-router-dom"
import SuiResMenu from "./shimmerui/SuiResMenu"
import { useResMenu } from "../util/useRes"
import ItemsSection from "./ItemSection"
import { useState } from "react"


const ResMenu = () => {
  const { resId } = useParams()
  const [resData, resItemsData] = useResMenu(resId)
  const [showIndex,setShowIndex] = useState()
  // console.log(resData)
  // console.log(resItemsData)
  return resItemsData == null && resData === null ? <SuiResMenu /> : (
    <>

      <section className="text-gray-600 body-font">
        <div className="container p-5 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{resData.name}</h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">{resData.cuisines.join(",")}</p>
          </div>
          {resItemsData?.map((resItem,index) => <ItemsSection data={resItem} index={index} showList={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)} showIndex = {showIndex}
          />)}
        </div>
      </section>
      {/* <section className="text-gray-600 body-font" key={resData?.data?.cards[2]?.card?.card?.info.name}>
      <h1 className="text-3xl text-center text-bolder my-6">{resData?.data?.cards[2]?.card?.card?.info.name}</h1>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {resItemsData?.map((item) => (
              item.card.card.itemCards == undefined ? <></> : item.card.card.itemCards?.map((item) => (
                <div key={item.card?.info?.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block bg-gray-300 relative h-60 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.card?.info?.imageId ? ITEM_IMG + item.card?.info?.imageId : CLOUDINARY_IMAGE_ID + resData?.data?.cards[2]?.card?.card?.info.cloudinaryImageId} />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.card?.info?.isVeg ? "Veg" : "Non - Veg"}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{item.card?.info?.name}</h2>
                    <p className="mt-1">₹ {item.card?.info?.price ? item.card?.info?.price / 100 : item.card?.info?.defaultPrice / 100}</p>
                  </div>
                </div>
              ))
            ))}
          </div>
        </div>
      </section> */}
    </>

  )
}

export default ResMenu;
