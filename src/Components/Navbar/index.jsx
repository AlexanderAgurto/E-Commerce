import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
const Navbar = () => {
  const activeStyles = "underline underline-offset-4";
  const context =useContext(ShoppingCartContext)

  return (
    <nav className="flex items-center justify-between fixed z-10 w-full py-5 px-8 text-sm font-light top-0">
      <ul className="flex items-center gap-2">
        <li className="font-semibold text-lg"><NavLink
            to="/"
          >
           Shopi
          </NavLink></li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyles : undefined)}
            onClick={()=>context.setSearchByCategory("")}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => (isActive ? activeStyles : undefined)}
            onClick={()=>context.setSearchByCategory("clothes")}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyles : undefined)}
            onClick={()=>context.setSearchByCategory("electronics")}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furniture"
            className={({ isActive }) => (isActive ? activeStyles : undefined)}
            onClick={()=>context.setSearchByCategory("furniture")}
          >
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({ isActive }) => (isActive ? activeStyles : undefined)}
            onClick={()=>context.setSearchByCategory("toys")}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            className={({ isActive }) => (isActive ? activeStyles : undefined)}
            onClick={()=>context.setSearchByCategory("others")}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-2">
        <li>Alex@gmail.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyles : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyles : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyles : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li className="flex items-center"><ShoppingBagIcon className="h-4 w-4"/>{context.carProducts.length}</li>
      </ul>
    </nav>
  )
}
export default Navbar;
