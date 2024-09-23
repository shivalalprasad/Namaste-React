const OrdersItem = ({ name, total }) => {
  return (
    <div className="p-4 sm:w-1/4 w-1/2">
      <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{total}</h2>
      <p className="leading-relaxed">{name}</p>
    </div>
  )
}

export default OrdersItem;
