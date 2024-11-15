import OrdersItem from "./OrderItem";

const TotalOrders = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <OrdersItem name="users" total="14m" />
          <OrdersItem name="active users" total="10m" />
          <OrdersItem name="pizzas per minute" total="207" />
          <OrdersItem name="biryani per minute" total="564" />
        </div>
      </div>
    </section>
  );
};

export default TotalOrders;
