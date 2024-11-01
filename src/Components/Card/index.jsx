import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { PlusIcon,CheckIcon } from "@heroicons/react/24/solid";
const Card = (data) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetails) => {
    context.openProductDetail();
    context.setProductToShow(productDetails);
  };
  const addProductToCar = (event, productData) => {
    event.stopPropagation();
    context.setCarProducts([...context.carProducts, productData]);
    context.openCheckout();
    context.closeProductDetail();
  };
  const renderIcon = (id) => {
    const isInCar =
      context.carProducts.filter((product) => product.id === id).length > 0;
    if (isInCar) {
      return (
        <div className="absolute top-0 right-0 flex items-center justify-center bg-black w-6 h-6 rounded-full m-2 p-1 text-center"
        >
          <CheckIcon className="h-6 w-6 text-white" />
        </div>
      );
    } else {
      return (
        <div className="absolute top-0 right-0 flex items-center justify-center
      bg-white w-6 h-6 rounded-full m-2 p-1 text-center" >
          <PlusIcon
            className="h-6 w-6 text-black"
            onClick={(event) => addProductToCar(event, data.data)} />
        </div>
      )
    }
  }
  return (
    <div
      className="bg-white cursor-pointer w-56 h-60"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-sm px-1 m-1">
          {data.data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.images}
          alt="headphones"
        ></img>
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-lg font-semibold">${data.data.price}</span>
      </p>
    </div>
  )
}
export default Card
