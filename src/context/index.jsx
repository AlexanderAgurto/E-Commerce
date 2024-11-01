import { createContext, useState, useEffect } from "react";
//se crea un contexto global de la aplicación
export const ShoppingCartContext = createContext();

//componente proveedor del contexto
export const ShoppingCartProvider = ({ children }) => {
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  const [productToShow, setProductToShow] = useState({});
  const [carProducts, setCarProducts] = useState([]);

  const [isChekoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckout = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckout = () => setIsCheckoutSideMenuOpen(false);

  const [order, setOrder] = useState([]);
  const [searchByTitle, setSearchByTitle] = useState(null);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchByCategory, setSearchByCategory] = useState(null);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    )
  }

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    )
  }
  const searchBy=(search,items,searchByTitle,searchByCategory)=>{
   if(search==="BY_TITLE"){
    return filteredItemsByTitle(items,searchByTitle)
   }
   if(search==="BY_CATEGORY"){
    return filteredItemsByCategory(items,searchByCategory)
   }
   if(search==="BY_TITLE_AND_CATEGORY"){
    return filteredItemsByCategory(items,searchByCategory).filter(item=>item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
   }
   if(!search){
    return items;
   }
  }
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((item) => item.json())
      .then((data) => setItems(data));
  }, []);

  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredItems(searchBy("BY_TITLE_AND_CATEGORY",items,searchByTitle,searchByCategory));
    if (searchByTitle && !searchByCategory) setFilteredItems(searchBy("BY_TITLE",items,searchByTitle,searchByCategory));
    if (!searchByTitle && searchByCategory) setFilteredItems(searchBy("BY_CATEGORY",items,searchByTitle,searchByCategory));
    if (!searchByTitle && !searchByCategory) setFilteredItems(searchBy(null,items,searchByTitle,searchByCategory));
  }, [items, searchByTitle,searchByCategory]);
  return (
    <ShoppingCartContext.Provider
      value={{
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        carProducts,
        setCarProducts,
        isChekoutSideMenuOpen,
        openCheckout,
        closeCheckout,
        order,
        setOrder,
        items,
        searchByTitle,
        filteredItems,
        setSearchByTitle,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
