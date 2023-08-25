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
    filteredMenu: [],
    selectedCategory: 0,
    menuTotalPage: 1,
    menuCurrentPage: 1,
    searchKeyword: ''
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
            state.filteredMenu = action.payload
        },
        menuTotalPage: (state, action) => {
            state.menuList = action.payload
        },
        menuCurrentPage: (state, action) => {
            state.menuCurrentPage = action.payload
        },
        setFilteredMenu: (state, action) => {
            if(parseInt(state.selectedCategory) === 0){
                state.filteredMenu = action.payload.menuList
            }
            else{
                if(action.payload.menuList.length>0){
                    state.filteredMenu = []
                    for(let i = 0; i < action.payload.menuList.length ; i++){
                        if(parseInt(state.selectedCategory) === action.payload.menuList[i].categ_id){
                            state.filteredMenu = [action.payload.menuList[i]];
                        }
                    }
                }
            }
            
        },
        setFilter: (state, action) => {
            state.selectedCategory = action.payload
        },
        setKeyword: (state, action) =>{
            state.searchKeyword = action.payload
        },
        searchMenu: (state, action) =>{
            state.filteredMenu = []
            for(let i = 0; i<action.payload.menuList.length; i++){
                state.filteredMenu.push({
                    categ_id : action.payload.menuList[i].categ_id,
                    name :action.payload.menuList[i].name,
                    description	: action.payload.menuList[i].description,
                    type: action.payload.menuList[i].type,
                    items: action.payload.menuList[i].items,
                })
                state.filteredMenu[i].items = state.filteredMenu[i].items.filter(x => x?.name?.toLowerCase().includes(state.searchKeyword) || x?.description?.toLowerCase().includes(state.searchKeyword))
            }
            console.log(state.filteredMenu)
        }
    }
});


export const {setMenuForYou, setMenuTodayOffer, setCategories,  setMenuList, menuTotalPage, menuCurrentPage, setFilteredMenu, setFilter, searchMenu, setKeyword} = menuSlice.actions

export default menuSlice.reducer