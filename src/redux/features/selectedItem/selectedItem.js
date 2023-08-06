import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    key: "",
    name: "",
    description: "",
    price: 0,
    discount: null,
    image: "",
    item_opt_cat: [{
        item_opts:[]
    }]
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
            state.price = action.payload.item_prices ? parseFloat(action.payload.item_prices.amount) : 0;
            state.discount = action.payload.discount;
            state.image = action.payload.image;
            state.item_opt_cat = action.payload.item_opt_cat
        },
        setSelectedItemAddPrice: (state, action)=>{
            state.price = parseFloat(state.price) + parseFloat(action.payload)
        },
        setSelectedItemSubPrice: (state, action)=>{
            state.price = parseFloat(state.price) - parseFloat(action.payload)
        }

    }
})


export const {reset, setSelectedItem ,setSelectedItemAddPrice,setSelectedItemSubPrice} = selectedItemSlice.actions

export default selectedItemSlice.reducer 