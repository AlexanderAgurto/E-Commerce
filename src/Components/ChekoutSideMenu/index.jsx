import { useContext } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { ShoppingCartContext } from "../../context";
import { XMarkIcon } from "@heroicons/react/24/solid";
import OrderCard from "../../Components/OrderCard";
import { totalPrice } from "../../utils";
const ChekoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  const handleDelete = (id) => {
    const filteredProducts = context.carProducts.filter(
      (product) => product.id != id
    );
    context.setCarProducts(filteredProducts);
  };
  const handleCheckout = () => {
    const addToCar = {
      date: "1/10/24",
      products: context.carProducts,
      totalPrice: totalPrice(context.carProducts),
      totalProducts: context.carProducts.length,
    };
    context.setOrder([...context.order, addToCar]);
    context.setCarProducts([]);
    context.setSearchByTitle(null)
    
  };

  return (
    <aside
      className={`${context.isChekoutSideMenuOpen ? "flex" : "hidden"} 
      checkout-sideMenu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div onClick={() => context.closeCheckout()} className="cursor-pointer">
          <XMarkIcon className="h-5 w-5 text-black-600" />
        </div>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {context.carProducts?.map((products) => (
          <OrderCard
            key={products.id}
            id={products.id}
            title={products.title}
            imageUrl={products.images}
            price={products.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total:</span>
          <span className="font-medium text-lg">
            ${totalPrice(context.carProducts)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button className="w-full bg-black py-3 text-white rounded-lg"
            onClick={() => handleCheckout()}>
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};
export default ChekoutSideMenu;