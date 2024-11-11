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
  return resItemsData == null && resData === null ? <SuiResMenu /> : (
    <>

      <section className="text-gray-600 body-font">
        <div className="container p-5 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{resData.name}</h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">{resData.cuisines.join(",")}</p>
          </div>
          {resItemsData?.map((resItem,index) => <ItemsSection data={resItem} index={index} showList={index === showIndex ? true : false}
          setShowIndex={() => {showIndex===index ?setShowIndex():setShowIndex(index)}} showIndex = {showIndex}
          />)}
        </div>
      </section>
    </>

  )
}

export default ResMenu;
