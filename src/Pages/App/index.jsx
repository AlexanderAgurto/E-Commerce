import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Navbar from "../../Components/Navbar";
import ChekoutSideMenu from "../../Components/ChekoutSideMenu"
import { ShoppingCartProvider } from "../../context";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/clothes", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/furniture", element: <Home /> },
    { path: "/toys", element: <Home /> },
    { path: "/others", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <ChekoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App;