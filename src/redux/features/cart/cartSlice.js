import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalCart : 0,
    item : []

}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        resetCart: () => initialState,

        setTotalCart: (state, action) => {
            state.totalCart = action.payload.totalCart;
        },

        addItem: (state, action) => {
            state.item.push(action.payload)
        }

    }
})


export const {resetCart, setTotalCart, addItem } = cartSlice.actions

export default cartSlice.reducer 