import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menuForYou:{
        categ_id: "",
        name:"",
        description: "",
        items:[]
    },
    menuTodayOffer:{
        categ_id: "",
        name:"",
        description: "",
        items:[]
    },
    categories:[{

    }],
    menus:[{

    }]
}

export const menuSlice = createSlice({
    name: 'menuSlice',
    initialState,
    reducers:{
        setMenuForYou: (state, action) => {
            state.menuForYou = action.payload
        },
        setMenuTodayOffer: (state, action) => {
            state.menuTodayOffer = action.payload
        },
        setCategories:(state, action) => {
            state.categories = action.payload
        },
        setMenus: (state, action)=>{
            state.menus = action.payload            
        }
    }
});


export const {setMenuForYou, setMenuTodayOffer, setCategories, setMenus} = menuSlice.actions

export default menuSlice.reducer