import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item_id: "",
    name: "",
    description: "",
    price: 0,
    discounts: null,
    image: "",
    item_opt_cat: [{
        item_opts:[]
    }],
    note: "",
    total_add: 0
}

export const selectedItemSlice = createSlice({
    name: 'selectedItem',
    initialState,
    reducers:{
        reset: () => initialState,
        setSelectedItem: (state, action) => {
            state.item_id = action.payload.item_id;
            state.name = action.payload.name;
            state.description = action.payload.description;
            state.price = action.payload.item_prices ? parseFloat(action.payload.item_prices.amount) : 0;
            state.discounts = action.payload.discounts ? action.payload.discounts : null;
            state.image = action.payload.image;
            state.item_opt_cat = action.payload.item_opt_cat;
            state.note = "";
            state.total_add = 0;
        },
        setSelectedItemAddPrice: (state, action)=>{
            // state.price = parseFloat(state.price) + parseFloat(action.payload)
            state.total_add = parseFloat(state.total_add) + parseFloat(action.payload)
        },
        setSelectedItemSubPrice: (state, action)=>{
            // state.price = parseFloat(state.price) - parseFloat(action.payload)
            state.total_add = parseFloat(state.total_add) - parseFloat(action.payload)
        },
        setSelectedItemNote: (state, action ) =>{
            state.note = action.payload
            
        }

    }
})


export const {reset, setSelectedItem ,setSelectedItemAddPrice,setSelectedItemSubPrice, setSelectedItemNote} = selectedItemSlice.actions

export default selectedItemSlice.reducer 