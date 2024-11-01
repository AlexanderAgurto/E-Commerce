import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCar = (props) => {
  const { id, title, imageUrl, price, handleDelete } = props;
  let renderXmark;
  if (handleDelete) {
    renderXmark = (
      <XMarkIcon
        onClick={() => handleDelete(id)}
        className="h-5 w-5 text-black-600 cursor-pointer"
      />
    );
  }
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2 ">
        <figure
          className="h-20
         w-20"
        >
          <img
            className="h-full w-full rounded-lg"
            src={imageUrl}
            alt={title}
          ></img>
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2 ">
        <p className="text-lg font-medium">${price}</p>
        {renderXmark}
      </div>
    </div>
  );
};

export default OrderCar;
