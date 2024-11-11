

 const SuiFoodCard = () => {
  return (
    <div className="relative mx-auto w-full my-2 rounded cursor-pointer">
    <a target="_blank" className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
      <div className="shadow p-4 rounded-lg bg-white">
        <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
          <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
            <div className="absolute inset-0 w-full">
              <div className="h-60 rounded w-full object-cover bg-gray-200 object-center"></div>
            </div>
          </div>
          <span className="absolute w-36 top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 h-6 rounded-lg z-10 bg-gray-300 text-sm font-medium text-white select-none">

          </span>

          <span className="absolute w-28 bottom-2 left-0 inline-flex mt-3 ml-3 px-3 py-2 h-6 rounded-lg z-10 bg-gray-300 text-sm font-medium text-white select-none">

          </span>
        </div>

        <div className="mt-4">
          <h2 className="font-bold text-base md:text-lg text-gray-800 line-clamp-1 w-36 h-5 bg-gray-300 rounded-lg">

          </h2>
          <h2 className="font-semibold  text-sm md:text-base text-gray-800 line-clamp-1 w-28 h-5 bg-gray-200 rounded-lg mt-2">

          </h2>
          <p className="mt-2 text-sm text-gray-800 line-clamp-1 h-5 w-full bg-gray-100 rounded-lg">

          </p>
        </div>

        <div className="grid grid-cols-2 grid-rows-1 gap-4 mt-8">
          <p className="inline-flex flex-row items-center text-gray-800">

            <span className="font-bold w-full px-4 h-5 bg-gray-100 rounded xl:mt-0 pl-2">

            </span>
          </p>
          <p className="inline-flex flex-row items-center text-gray-800">
            <span className="font-bold mt-2 xl:mt-0  w-full px-4 h-5 bg-gray-100 rounded">

            </span>
          </p>
        </div>
      </div>
    </a>
  </div>
  )
}

export default SuiFoodCard;
