import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { toggleCart, calcTotal, calcAmount, clearCart } from "../Cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";

import CartProductCard from "./atom/CartProductCard";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, cartAmount, cartTotal } = useSelector((store) => store.cart);
  useEffect(()=>{
    dispatch(calcTotal());
  }, [cartItems, calcAmount,])

  return (
    <section className="bg-gray-900 min-h-[90vh] flex flex-col justify-center items-center ">
      <div className="m-6 w-[90%] md:w-[60%] lg:w-[40%] border-2 bg-neutral-100 border-white rounded-lg 
        flex flex-col justify-center items-center">

        {/* cart header */}
        <div className="w-full p-6 flex justify-between">
          <h5 className="text-lg font-semibold">Your Cart</h5>
          <p className="italic text-red-500">({cartAmount} items)</p>
        </div>

        {/* //cart Items */}
        <ul className="w-full flex flex-col gap-4 justify-center items-center">
          {cartItems.map((item) => {
            return <CartProductCard key={item._id} {...item} />;
          })}
        </ul>
        

        <p className={cartAmount === 0 ? "block text-center" : "hidden"}>
          OOPS! <br className="block md:hidden"/> Cart is empty.
        </p>
        <div className={cartAmount === 0 ? "hidden" : "block w-full"}>
          <div className="w-full h-[1px] mt-4 bg-slate-800" />
          <div className="w-full px-6 mt-2 flex justify-between">
            <h5 className="text-lg font-semibold">Total Amount</h5>
            <p className="italic text-red-500">${cartTotal}</p>
          </div>
        </div>
        

        {/* //Buttons  */}
        <div className="flex gap-4">
        <button
          onClick={() => {
            dispatch(toggleCart()), history.back();
          }}
          className="px-4 py-1 my-4 border-2 rounded-md border-red-500 text-red-500
        lg:hover:bg-red-500 lg:hover:text-slate-100"
        >
          Close
        </button>

        <button
          onClick={() => {
            dispatch(clearCart());
          }}
          className={`${cartAmount === 0 ? 'hidden' : 'block'} px-4 py-1 my-4 border-2 rounded-md border-red-500 text-red-500
        lg:hover:bg-red-500 lg:hover:text-slate-100`}
        >
          Clear Cart
        </button>
        
        <Link to={`/purchased`} >
          <button
            className={`${cartAmount === 0 ? 'hidden' : 'block'} px-4 py-1 my-4 border-2 rounded-md border-red-500 text-red-500
          lg:hover:bg-red-500 lg:hover:text-slate-100`}
          >
            Purchase
          </button>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
