import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import selectedItemReducer  from "../features/selectedItem/selectedItem";
import cartReducer from "../features/cart/cartSlice";
import restaurantReducer from "../features/restaurant/restaurantInfo"
import menusSlice from "../features/menus/menusSlice";


export default configureStore({
    reducer: {
        counter: counterReducer,
        selectedItem: selectedItemReducer,
        cart: cartReducer,
        restaurantInfo: restaurantReducer,
        menusList: menusSlice,
    },
})