import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    order:{
        order_id: "",
        table_num:"",
        is_paid:0,
        subtotal:"",
        cond_amount:"",
        total_discount:"",
        total:"",
        updated_at: ""
    },
    restaInfo: {
        name: "",
        address: "",
        resta_code:"",
        logo:""
    },
    theme: {
        color1: "",
        color2: "",
        color3: "",
        color4: "",
        description: "",
        theme_id:""
    },
    condPricing: {

    },
    condPricingFinal: {

    }
    
   
}

export const restaurantInfoSlice = createSlice({
    name: 'restaurantInfo',
    initialState,
    reducers: {
        setOrderNumber:(state, action)=>{
            state.order.order_id = action.payload
        },
        setUserOrder:(state, action)=>{
            state.order = action.payload
        },
        setTheme: (state, action)=>{
            state.theme= action.payload
        },
        setRestaInfo:(state, action) =>{
            state.restaInfo= action.payload
        },
        setCondPricing : (state, action) => {
            state.condPricing = action.payload
        },
        setCondPricingFinal : (state, action) => {
            state.condPricingFinal = action.payload
        }
        
    }
});


export const {setOrderNumber, setUserOrder, setTheme, setRestaInfo, setCondPricing, setCondPricingFinal} = restaurantInfoSlice.actions;

export default restaurantInfoSlice.reducer;