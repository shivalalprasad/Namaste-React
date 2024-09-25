import { useEffect, useState } from "react"
import { ITEM_IMG, RES_IMG } from "../util/constants"
import { useParams } from "react-router-dom"
import SuiResMenu from "./shimmerui/SuiResMenu"


const ResMenu = () => {
  useEffect(() => {
    fechRes()
  }, [])
  // const resid = useParams("651722")
  const [resData, setResData] = useState([])
  const [resItemsData, setResItemsData] = useState([])
  // const [resItemsData01, setResItemsData01] = useState([])
  // const [resItemsData1, setResItemsData1] = useState([])
  // const [resItemsData2, setResItemsData2] = useState([])
  // const [resItemsData3, setResItemsData3] = useState([])
  // const [resItemsData4, setResItemsData4] = useState([])
  // const [resItemsData5, setResItemsData5] = useState([])
  // const [resItemsData6, setResItemsData6] = useState([])
  // const [resItemsData7, setResItemsData7] = useState([])
  // const [resItemsData8, setResItemsData8] = useState([])
  // const [resItemsData9, setResItemsData9] = useState([])
  // const [resItemsData10, setResItemsData10] = useState([])
  // const [resItemsData11, setResItemsData11] = useState([])
  // const [resItemsData12, setResItemsData12] = useState([])
  // const [resItemsData13, setResItemsData13] = useState([])
  // const [resItemsData14, setResItemsData14] = useState([])
  // const [resItemsData15, setResItemsData15] = useState([])
  // const [resItemsData16, setResItemsData16] = useState([])
  // const [resItemsData17, setResItemsData17] = useState([])
  // const [resItemsData18, setResItemsData18] = useState([])
  // const [resItemsData19, setResItemsData19] = useState([])
  const { resId } = useParams()

  const fechRes = async () => {
    var data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.8320833&lng=78.7603726&restaurantId=" + resId);
    var json = await data.json();
    // console.log(json?.data?.cards[2]?.card?.card?.info);
    // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    // console.log(json?.data);

    // setRestaurentList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setFilteredResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setResData(json)
    console.log(resData)
    // setResItemsData(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card?.itemCards)
    setResItemsData(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    console.log(resItemsData)
    // setResItemsData01(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    // setResItemsData1(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    // setResItemsData2(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards)
    // setResItemsData3(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards)
    // setResItemsData4(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards)
    // setResItemsData5(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card?.itemCards)
    // setResItemsData6(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7]?.card?.card?.itemCards)
    // setResItemsData7(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[8]?.card?.card?.itemCards)
    // setResItemsData8(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[9]?.card?.card?.itemCards)
    // setResItemsData9(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[10]?.card?.card?.itemCards)
    // setResItemsData10(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[11]?.card?.card?.itemCards)
    // setResItemsData11(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[12]?.card?.card?.itemCards)
    // setResItemsData12(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[13]?.card?.card?.itemCards)
    // setResItemsData13(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[14]?.card?.card?.itemCards)
    // setResItemsData14(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[15]?.card?.card?.itemCards)
    // setResItemsData15(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[16]?.card?.card?.itemCards)
    // setResItemsData16(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[17]?.card?.card?.itemCards)
    // setResItemsData17(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[18]?.card?.card?.itemCards)
    // setResItemsData18(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[19]?.card?.card?.itemCards)
    // setResItemsData19(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[20]?.card?.card?.itemCards)
    // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[20]?.card?.card);
    // console.log(resItemsData1);
  }

  return resData.length == 0 || resData == undefined ? <SuiResMenu /> : (
    <>
      <h1 className="text-3xl text-center text-bolder my-6">{resData?.data?.cards[2]?.card?.card?.info.name}</h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {resItemsData == undefined ? <h1 className="text-center w-full text-3xl font-bolder"> No Menu data found </h1> : resItemsData.map((item) => (
              // <h1 key={item.id} className="text-center w-full text-3xl font-bolder"> {"hello"} </h1>,
              item.card.card.itemCards == undefined ? <h1 className="text-center w-full text-3xl font-bolder"></h1> : item.card.card.itemCards.map((item) => (
                <div key={item.card?.info?.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block bg-gray-300 relative h-60 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.card?.info?.imageId ? ITEM_IMG + item.card?.info?.imageId : RES_IMG + resData?.data?.cards[2]?.card?.card?.info.cloudinaryImageId} />
                    {console.log(item)}
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.card?.info?.isVeg ? "Veg" : "Non - Veg"}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{item.card?.info?.name}</h2>
                    <p className="mt-1">₹ {item.card?.info?.price ? item.card?.info?.price / 100 : item.card?.info?.defaultPrice / 100}</p>
                  </div>
                </div>
              ))
            ))}

            {/* {resItemsData1 == undefined ? <h1 className="text-center w-full text-3xl font-bolder"> No Menu data found </h1> : resItemsData1.map((item) => (
              <div key={item.card?.info?.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-60 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={
                    // ITEM_IMG + item.card?.info?.imageId
                    item.card?.info?.imageId ? ITEM_IMG + item.card?.info?.imageId : RES_IMG + resData?.data?.cards[2]?.card?.card?.info.cloudinaryImageId
                  } />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.card?.info?.isVeg ? "Veg" : "Non - Veg"}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.card?.info?.name}</h2>
                  <p className="mt-1">₹ {
                    item.card?.info?.price ? item.card?.info?.price / 100 : item.card?.info?.defaultPrice / 100
                    // item.card?.info?.price / 100
                  }</p>
                </div>
              </div>
            ))} */}
            {/* {resItemsData2 == undefined || resItemsData2 == resItemsData1 ? <></> : resItemsData2.map((item) => (
              <div key={item.card?.info?.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-60 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={
                    // ITEM_IMG + item.card?.info?.imageId
                    item.card?.info?.imageId ? ITEM_IMG + item.card?.info?.imageId : RES_IMG + resData?.data?.cards[2]?.card?.card?.info.cloudinaryImageId
                  } />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.card?.info?.isVeg ? "Veg" : "Non - Veg"}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.card?.info?.name}</h2>
                  <p className="mt-1">₹ {
                    item.card?.info?.price ? item.card?.info?.price / 100 : item.card?.info?.defaultPrice / 100
                    // item.card?.info?.price / 100
                  }</p>
                </div>
              </div>
            ))}
            {resItemsData3 == undefined || resItemsData2 == resItemsData3 ? <></> : resItemsData3.map((item) => (
              <div key={item.card?.info?.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-60 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={
                    // ITEM_IMG + item.card?.info?.imageId
                    item.card?.info?.imageId ? ITEM_IMG + item.card?.info?.imageId : RES_IMG + resData?.data?.cards[2]?.card?.card?.info.cloudinaryImageId
                  } />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.card?.info?.isVeg ? "Veg" : "Non - Veg"}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.card?.info?.name}</h2>
                  <p className="mt-1">₹ {
                    item.card?.info?.price ? item.card?.info?.price / 100 : item.card?.info?.defaultPrice / 100
                    // item.card?.info?.price / 100
                  }</p>
                </div>
              </div>
            ))}
            {resItemsData == undefined || resItemsData == resItemsData1 ? <></> : resItemsData.map((item) => (
              <div key={item.card?.info?.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-60 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={
                    // ITEM_IMG + item.card?.info?.imageId
                    item.card?.info?.imageId ? ITEM_IMG + item.card?.info?.imageId : RES_IMG + resData?.data?.cards[2]?.card?.card?.info.cloudinaryImageId
                  } />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.card?.info?.isVeg ? "Veg" : "Non - Veg"}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.card?.info?.name}</h2>
                  <p className="mt-1">₹ {
                    item.card?.info?.price ? item.card?.info?.price / 100 : item.card?.info?.defaultPrice / 100
                    // item.card?.info?.price / 100
                  }</p>
                </div>
              </div>
            ))}
            {resItemsData01 == undefined || resItemsData == resItemsData01 ? <></> : resItemsData01.map((item) => (
              <div key={item.card?.info?.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-60 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={
                    // ITEM_IMG + item.card?.info?.imageId
                    item.card?.info?.imageId ? ITEM_IMG + item.card?.info?.imageId : RES_IMG + resData?.data?.cards[2]?.card?.card?.info.cloudinaryImageId
                  } />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.card?.info?.isVeg ? "Veg" : "Non - Veg"}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.card?.info?.name}</h2>
                  <p className="mt-1">₹ {
                    item.card?.info?.price ? item.card?.info?.price / 100 : item.card?.info?.defaultPrice / 100
                    // item.card?.info?.price / 100
                  }</p>
                </div>
              </div>
            ))}
            {resItemsData4 == undefined || resItemsData4 == resItemsData3 ? <></> : resItemsData4.map((item) => (
              <div key={item.card?.info?.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-60 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={
                    // ITEM_IMG + item.card?.info?.imageId
                    item.card?.info?.imageId ? ITEM_IMG + item.card?.info?.imageId : RES_IMG + resData?.data?.cards[2]?.card?.card?.info.cloudinaryImageId
                  } />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.card?.info?.isVeg ? "Veg" : "Non - Veg"}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.card?.info?.name}</h2>
                  <p className="mt-1">₹ {
                    item.card?.info?.price ? item.card?.info?.price / 100 : item.card?.info?.defaultPrice / 100
                    // item.card?.info?.price / 100
                  }</p>
                </div>
              </div>
            ))}
            {resItemsData5 == undefined || resItemsData5 == resItemsData4 ? <></> : resItemsData5.map((item) => (
              <div key={item.card?.info?.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-60 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={
                    // ITEM_IMG + item.card?.info?.imageId
                    item.card?.info?.imageId ? ITEM_IMG + item.card?.info?.imageId : RES_IMG + resData?.data?.cards[2]?.card?.card?.info.cloudinaryImageId
                  } />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.card?.info?.isVeg ? "Veg" : "Non - Veg"}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.card?.info?.name}</h2>
                  <p className="mt-1">₹ {
                    item.card?.info?.price ? item.card?.info?.price / 100 : item.card?.info?.defaultPrice / 100
                    // item.card?.info?.price / 100
                  }</p>
                </div>
              </div>
            ))}
            {resItemsData6 == undefined || resItemsData5 == resItemsData6 ? <></> : resItemsData6.map((item) => (
              <div key={item.card?.info?.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-60 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={
                    // ITEM_IMG + item.card?.info?.imageId
                    item.card?.info?.imageId ? ITEM_IMG + item.card?.info?.imageId : RES_IMG + resData?.data?.cards[2]?.card?.card?.info.cloudinaryImageId
                  } />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.card?.info?.isVeg ? "Veg" : "Non - Veg"}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.card?.info?.name}</h2>
                  <p className="mt-1">₹ {
                    item.card?.info?.price ? item.card?.info?.price / 100 : item.card?.info?.defaultPrice / 100
                    // item.card?.info?.price / 100
                  }</p>
                </div>
              </div>
            ))}
            {resItemsData7 == undefined || resItemsData7 == resItemsData6 ? <></> : resItemsData7.map((item) => (
              <div key={item.card?.info?.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-60 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={
                    // ITEM_IMG + item.card?.info?.imageId
                    item.card?.info?.imageId ? ITEM_IMG + item.card?.info?.imageId : RES_IMG + resData?.data?.cards[2]?.card?.card?.info.cloudinaryImageId
                  } />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.card?.info?.isVeg ? "Veg" : "Non - Veg"}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.card?.info?.name}</h2>
                  <p className="mt-1">₹ {
                    item.card?.info?.price ? item.card?.info?.price / 100 : item.card?.info?.defaultPrice / 100
                    // item.card?.info?.price / 100
                  }</p>
                </div>
              </div>
            ))}
            {resItemsData8 == undefined || resItemsData7 == resItemsData8 ? <></> : resItemsData8.map((item) => (
              <div key={item.card?.info?.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-60 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={
                    // ITEM_IMG + item.card?.info?.imageId
                    item.card?.info?.imageId ? ITEM_IMG + item.card?.info?.imageId : RES_IMG + resData?.data?.cards[2]?.card?.card?.info.cloudinaryImageId
                  } />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.card?.info?.isVeg ? "Veg" : "Non - Veg"}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.card?.info?.name}</h2>
                  <p className="mt-1">₹ {
                    item.card?.info?.price ? item.card?.info?.price / 100 : item.card?.info?.defaultPrice / 100
                    // item.card?.info?.price / 100
                  }</p>
                </div>
              </div>
            ))}
            {resItemsData9 == undefined || resItemsData9 == resItemsData8 ? <></> : resItemsData9.map((item) => (
              <div key={item.card?.info?.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-60 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={
                    // ITEM_IMG + item.card?.info?.imageId
                    item.card?.info?.imageId ? ITEM_IMG + item.card?.info?.imageId : RES_IMG + resData?.data?.cards[2]?.card?.card?.info.cloudinaryImageId
                  } />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.card?.info?.isVeg ? "Veg" : "Non - Veg"}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.card?.info?.name}</h2>
                  <p className="mt-1">₹ {
                    item.card?.info?.price ? item.card?.info?.price / 100 : item.card?.info?.defaultPrice / 100
                    // item.card?.info?.price / 100
                  }</p>
                </div>
              </div>
            ))}
            {resItemsData10 == undefined || resItemsData9 == resItemsData10 ? <></> : resItemsData10.map((item) => (
              <div key={item.card?.info?.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-60 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={
                    // ITEM_IMG + item.card?.info?.imageId
                    item.card?.info?.imageId ? ITEM_IMG + item.card?.info?.imageId : RES_IMG + resData?.data?.cards[2]?.card?.card?.info.cloudinaryImageId
                  } />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.card?.info?.isVeg ? "Veg" : "Non - Veg"}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.card?.info?.name}</h2>
                  <p className="mt-1">₹ {
                    item.card?.info?.price ? item.card?.info?.price / 100 : item.card?.info?.defaultPrice / 100
                    // item.card?.info?.price / 100
                  }</p>
                </div>
              </div>
            ))}
            {resItemsData11 == undefined || resItemsData11 == resItemsData10 ? <></> : resItemsData11.map((item) => (
              <div key={item.card?.info?.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-60 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={
                    // ITEM_IMG + item.card?.info?.imageId
                    item.card?.info?.imageId ? ITEM_IMG + item.card?.info?.imageId : RES_IMG + resData?.data?.cards[2]?.card?.card?.info.cloudinaryImageId
                  } />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.card?.info?.isVeg ? "Veg" : "Non - Veg"}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.card?.info?.name}</h2>
                  <p className="mt-1">₹ {
                    item.card?.info?.price ? item.card?.info?.price / 100 : item.card?.info?.defaultPrice / 100
                    // item.card?.info?.price / 100
                  }</p>
                </div>
              </div>
            ))}
            {resItemsData12 == undefined || resItemsData11 == resItemsData12 ? <></> : resItemsData12.map((item) => (
              <div key={item.card?.info?.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-60 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={
                    // ITEM_IMG + item.card?.info?.imageId
                    item.card?.info?.imageId ? ITEM_IMG + item.card?.info?.imageId : RES_IMG + resData?.data?.cards[2]?.card?.card?.info.cloudinaryImageId
                  } />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.card?.info?.isVeg ? "Veg" : "Non - Veg"}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.card?.info?.name}</h2>
                  <p className="mt-1">₹ {
                    item.card?.info?.price ? item.card?.info?.price / 100 : item.card?.info?.defaultPrice / 100
                    // item.card?.info?.price / 100
                  }</p>
                </div>
              </div>
            ))}
            {resItemsData13 == undefined || resItemsData13 == resItemsData12 ? <></> : resItemsData13.map((item) => (
              <div key={item.card?.info?.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-60 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={
                    // ITEM_IMG + item.card?.info?.imageId
                    item.card?.info?.imageId ? ITEM_IMG + item.card?.info?.imageId : RES_IMG + resData?.data?.cards[2]?.card?.card?.info.cloudinaryImageId
                  } />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.card?.info?.isVeg ? "Veg" : "Non - Veg"}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.card?.info?.name}</h2>
                  <p className="mt-1">₹ {
                    item.card?.info?.price ? item.card?.info?.price / 100 : item.card?.info?.defaultPrice / 100
                    // item.card?.info?.price / 100
                  }</p>
                </div>
              </div>
            ))}
            {resItemsData14 == undefined || resItemsData13 == resItemsData14 ? <></> : resItemsData14.map((item) => (
              <div key={item.card?.info?.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-60 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={
                    // ITEM_IMG + item.card?.info?.imageId
                    item.card?.info?.imageId ? ITEM_IMG + item.card?.info?.imageId : RES_IMG + resData?.data?.cards[2]?.card?.card?.info.cloudinaryImageId
                  } />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.card?.info?.isVeg ? "Veg" : "Non - Veg"}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.card?.info?.name}</h2>
                  <p className="mt-1">₹ {
                    item.card?.info?.price ? item.card?.info?.price / 100 : item.card?.info?.defaultPrice / 100
                    // item.card?.info?.price / 100
                  }</p>
                </div>
              </div>
            ))}
            {resItemsData15 == undefined || resItemsData15 == resItemsData14 ? <></> : resItemsData15.map((item) => (
              <div key={item.card?.info?.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-60 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={
                    // ITEM_IMG + item.card?.info?.imageId
                    item.card?.info?.imageId ? ITEM_IMG + item.card?.info?.imageId : RES_IMG + resData?.data?.cards[2]?.card?.card?.info.cloudinaryImageId
                  } />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.card?.info?.isVeg ? "Veg" : "Non - Veg"}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.card?.info?.name}</h2>
                  <p className="mt-1">₹ {
                    item.card?.info?.price ? item.card?.info?.price / 100 : item.card?.info?.defaultPrice / 100
                    // item.card?.info?.price / 100
                  }</p>
                </div>
              </div>
            ))}
            {resItemsData16 == undefined || resItemsData16 == resItemsData15 ? <></> : resItemsData16.map((item) => (
              <div key={item.card?.info?.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-60 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={
                    // ITEM_IMG + item.card?.info?.imageId
                    item.card?.info?.imageId ? ITEM_IMG + item.card?.info?.imageId : RES_IMG + resData?.data?.cards[2]?.card?.card?.info.cloudinaryImageId
                  } />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.card?.info?.isVeg ? "Veg" : "Non - Veg"}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.card?.info?.name}</h2>
                  <p className="mt-1">₹ {
                    item.card?.info?.price ? item.card?.info?.price / 100 : item.card?.info?.defaultPrice / 100
                    // item.card?.info?.price / 100
                  }</p>
                </div>
              </div>
            ))}
            {resItemsData17 == undefined || resItemsData16 == resItemsData17 ? <></> : resItemsData17.map((item) => (
              <div key={item.card?.info?.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-60 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={
                    // ITEM_IMG + item.card?.info?.imageId
                    item.card?.info?.imageId ? ITEM_IMG + item.card?.info?.imageId : RES_IMG + resData?.data?.cards[2]?.card?.card?.info.cloudinaryImageId
                  } />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.card?.info?.isVeg ? "Veg" : "Non - Veg"}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.card?.info?.name}</h2>
                  <p className="mt-1">₹ {
                    item.card?.info?.price ? item.card?.info?.price / 100 : item.card?.info?.defaultPrice / 100
                    // item.card?.info?.price / 100
                  }</p>
                </div>
              </div>
            ))}
            {resItemsData18 == undefined || resItemsData18 == resItemsData17 ? <></> : resItemsData18.map((item) => (
              <div key={item.card?.info?.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-60 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={
                    // ITEM_IMG + item.card?.info?.imageId
                    item.card?.info?.imageId ? ITEM_IMG + item.card?.info?.imageId : RES_IMG + resData?.data?.cards[2]?.card?.card?.info.cloudinaryImageId
                  } />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.card?.info?.isVeg ? "Veg" : "Non - Veg"}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.card?.info?.name}</h2>
                  <p className="mt-1">₹ {
                    item.card?.info?.price ? item.card?.info?.price / 100 : item.card?.info?.defaultPrice / 100
                    // item.card?.info?.price / 100
                  }</p>
                </div>
              </div>
            ))}
            {resItemsData19 == undefined || resItemsData18 == resItemsData19 ? <></> : resItemsData19.map((item) => (
              <div key={item.card?.info?.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-60 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={
                    // ITEM_IMG + item.card?.info?.imageId
                    item.card?.info?.imageId ? ITEM_IMG + item.card?.info?.imageId : RES_IMG + resData?.data?.cards[2]?.card?.card?.info.cloudinaryImageId
                  } />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.card?.info?.isVeg ? "Veg" : "Non - Veg"}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.card?.info?.name}</h2>
                  <p className="mt-1">₹ {
                    item.card?.info?.price ? item.card?.info?.price / 100 : item.card?.info?.defaultPrice / 100
                    // item.card?.info?.price / 100
                  }</p>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </section >
    </>

  )
}

export default ResMenu;
