import { ChevronRightIcon } from "@heroicons/react/24/solid";
const OrdersCar = (props) => {
  const { price, totalProducts } = props;
  return (
    <div className="flex justify-between items-center mb-4 border border-black rounded-lg w-80">
      <div className="flex justify-between w-full items-center p-4">
        <p className="flex flex-col">
          <span className="font-light">2/10/2024</span>
          <span className="font-medium"> ${price}</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="text-sm font-light"> {totalProducts} Articles</span>
          <ChevronRightIcon className="h-4 w-4 text-black cursor-pointer" />
        </p>
      </div>
    </div>
  );
};
export default OrdersCar;
