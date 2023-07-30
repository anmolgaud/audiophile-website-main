import React, { useEffect } from "react";
import { IoBagOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { calcAmount, toggleCart } from "../Cart/cartSlice";
import { store } from "../store";
import { Link } from "react-router-dom";
const Navbar = () => {
  const dispatch = useDispatch();
  const { cartAmount, cartItems } = useSelector((store) => store.cart);
  useEffect(() => {
    dispatch(calcAmount());
  }, [cartItems]);
  return (
    <nav className="flex justify-between mx-6 lg:mx-16 py-4 mt-2">
      <Link to={"/"}>
      <h3 className="text-2xl font-bold">audiophile</h3>
      </Link>
      <div className="relative cursor-pointer">
        <div className="absolute -right-2 -top-2 text-slate-100 z-20 px-2 rounded-full bg-red-500">
          {cartAmount}
        </div>
        <Link to="/cart">
          <IoBagOutline
            onClick={() => {
              dispatch(toggleCart());
            }}
            size={"2rem"}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
