import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    key: "",
    name: "",
    description: "",
    price: 0,
    discount: null,
    image: {
        src:"",
        alt: ""
    }
}

export const selectedItemSlice = createSlice({
    name: 'selectedItem',
    initialState,
    reducers:{
        reset: () => initialState,
        setSelectedItem: (state, action) => {
            state.key = action.payload.key;
            state.name = action.payload.name;
            state.description = action.payload.description;
            state.price = action.payload.price;
            state.discount = action.payload.discount;
            state.image = action.payload.image;
        },

    }
})


export const {reset, setSelectedItem } = selectedItemSlice.actions

export default selectedItemSlice.reducer 