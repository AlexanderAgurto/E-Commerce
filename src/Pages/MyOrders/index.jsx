import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../context";
import OrdersCar from "../../Components/OrdersCard";

const MyOrders = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
       <div>
        <h1 className="font-medium text-lg mb-2">My Orders</h1>
        </div>
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCar
            price={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
};
export default MyOrders;
