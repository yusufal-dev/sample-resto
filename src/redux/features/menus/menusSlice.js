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
    menuList:[],
    menuTotalPage: 1,
    menuCurrentPage: 1
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
        setMenuList: (state, action) => {
            state.menuList = action.payload
        },
        menuTotalPage: (state, action) => {
            state.menuList = action.payload
        },
        menuCurrentPage: (state, action) => {
            state.menuCurrentPage = action.payload
        }
    }
});


export const {setMenuForYou, setMenuTodayOffer, setCategories,  setMenuList, menuTotalPage, menuCurrentPage} = menuSlice.actions

export default menuSlice.reducer