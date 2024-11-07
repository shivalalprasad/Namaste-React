import { useEffect, useState } from "react"
import { ITEM_IMG, MENU_API, RES_IMG } from "../util/constants"
import { useParams } from "react-router-dom"
import SuiResMenu from "./shimmerui/SuiResMenu"


const ResMenu = () => {
  useEffect(() => {
    fechRes()
  }, [])
  const [resData, setResData] = useState([])
  const [resItemsData, setResItemsData] = useState([])
  const { resId } = useParams()
  console.log(resId);


  const fechRes = async () => {
    var data = await fetch( MENU_API + resId);
    var json = await data.json();
    setResData(json)
    setResItemsData(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  }

  return resData.length == 0 || resData == undefined ? <SuiResMenu /> : (
    <>
      <h1 className="text-3xl text-center text-bolder my-6">{resData?.data?.cards[2]?.card?.card?.info.name}</h1>
      {console.log(resData?.data?.cards[2]?.card?.card?.info)}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {resItemsData == undefined ? <h1 className="text-center w-full text-3xl font-bolder"> No Menu data found </h1> : resItemsData.map((item) => (
              item.card.card.itemCards == undefined ? <></> : item.card.card.itemCards.map((item) => (
                <div key={item.card?.info?.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block bg-gray-300 relative h-60 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.card?.info?.imageId ? ITEM_IMG + item.card?.info?.imageId : RES_IMG + resData?.data?.cards[2]?.card?.card?.info.cloudinaryImageId} />
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
      </section>
    </>

  )
}

export default ResMenu;
