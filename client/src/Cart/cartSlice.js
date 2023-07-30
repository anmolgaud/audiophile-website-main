import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cartItemList } from "../tempCartItems.js";
const initialState = {
    cartItems : [],   //array of object {id,name, price, amount}
    cartAmount : 0,
    cartTotal : 0,
    cartOpen : false,
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addItem : (state, action) => {
            const {_id, name, previewImgPath, price, amount} = action.payload;
            const cartItem = state.cartItems.find((item) => item._id === _id);
            if(!cartItem){
                state.cartItems.push({_id, name, previewImgPath, price, amount});
            }
            else{
                const itemAmt = amount;
                cartItem.amount = cartItem.amount + itemAmt;
            }
        },
        removeItem : (state, action) => {
            const itemId = action.payload;
            let temp = state.cartItems.filter((item) => item._id !== itemId);
            state.cartItems = temp;
        },
        incItemAmt : (state, action) => {
            const itemId = action.payload;
            const cartItem = state.cartItems.find((item) => item._id === itemId)
            cartItem.amount = cartItem.amount + 1;
        },
        decItemAmt : (state, action) => {
            const itemId = action.payload;
            const cartItem = state.cartItems.find((item) => item._id === itemId)
            cartItem.amount = cartItem.amount - 1;
        },
        calcAmount : (state, action) => {
            let amt = 0;
            state.cartItems.forEach((item) => {
                amt = amt + item.amount;
            })
            state.cartAmount = amt;
        },
        calcTotal : (state, action) => {
            let total = 0;
            state.cartItems.forEach((item) => {
                total = total + (item.amount * item.price);
            })
            state.cartTotal = total
        },
        clearCart : (state, action) => {
            state.cartItems = [];
            state.cartAmount = 0;
            state.cartTotal = 0;
        },
        toggleCart : (state,action) => {
            state.cartOpen = !state.cartOpen;
        }
    }
});

export const {
  addItem,
  removeItem,
  incItemAmt,
  decItemAmt,
  calcAmount,
  calcTotal,
  clearCart,
  toggleCart,
} = cartSlice.actions;

export default cartSlice.reducer;