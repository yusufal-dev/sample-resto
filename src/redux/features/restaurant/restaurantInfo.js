import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    order:{
        orderNumber: "",
        table_num:"",
        is_paid:0,
        subtotal:"",
        cond_amount:"",
        total_discount:"",
        total:""
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
   
}

export const restaurantInfoSlice = createSlice({
    name: 'restaurantInfo',
    initialState,
    reducers: {
        setOrderNumber:(state, action)=>{
            state.order.orderNumber = action.payload
        },
        setUserOrder:(state, action)=>{
            state.order = action.payload
        },
        setTheme: (state, action)=>{
            state.theme= action.payload
        },
        setRestaInfo:(state, action) =>{
            state.restaInfo= action.payload
        }
    }
});


export const {setOrderNumber, setUserOrder, setTheme, setRestaInfo} = restaurantInfoSlice.actions;

export default restaurantInfoSlice.reducer;