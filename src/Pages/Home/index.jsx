import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
const Home = () => {
  const context = useContext(ShoppingCartContext);
  const renderView = () => {
    if(context.filteredItems.length>0){
      return(
        context.filteredItems?.map((item) => (
          <Card key={item.id} data={item} />
        ))
      )
    }else{
      return(
        <div className="font-medium text-black">no results found</div>
      )
    }
  };
  return (
    <Layout>
      <div>
        <h1 className="font-medium text-lg mb-2">Home</h1>
      </div>
      <input
        className="w-52 h-10 mb-6 border border-black rounded-lg px-2 focus:outline-none"
        type="text"
        placeholder="Search your items"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      ></input>
      <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
};
export default Home;
