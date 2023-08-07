import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : []

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
            state.items.push(action.payload)
        }

    }
})


export const {resetCart, setTotalCart, addItem } = cartSlice.actions

export default cartSlice.reducer 