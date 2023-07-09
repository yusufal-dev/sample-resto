import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import selectedItemReducer  from "../features/selectedItem/selectedItem";
import cartReducer from "../features/cart/cartSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        selectedItem: selectedItemReducer,
        cart: cartReducer
    },
})