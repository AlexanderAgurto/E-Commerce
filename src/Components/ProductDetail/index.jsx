import { useContext } from "react"
import { ShoppingCartContext } from "../../context"
import "./styles.css"
import { XMarkIcon } from '@heroicons/react/24/solid'

const ProductDetail=()=>{
  const context=useContext(ShoppingCartContext)
    return(
      <aside className={`${context.isProductDetailOpen?"flex":"hidden"} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
       <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div onClick={()=>context.closeProductDetail()} className="cursor-pointer"> <XMarkIcon className="h-5 w-5 text-black-600" /></div>
       </div>
       <figure className="px-6 mb-3">
        <img className="w-full h-70 rounded-lg object-cover" src={context.productToShow.images} alt={context.productToShow.title}></img>
       </figure>
       <p className="flex flex-col px-6">
        <span className="font-medium text-2xl mb-1">${context.productToShow.price}</span>
        <span className="font-medium text-md">{context.productToShow.title}</span>
        <span className="font-light text-sm text-justify">{context.productToShow.description}</span>
       </p>
      </aside>
    )
}
export default ProductDetail