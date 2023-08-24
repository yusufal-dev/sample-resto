import '../../styles/all.css';
//import Arrow from '../Icons/leftArrow.svg'
import * as React from 'react'
import { useState } from 'react';
//import PriceIcon from '../../static/icons/LablePrice.png';
import { useDispatch, useSelector } from 'react-redux';
import { setKeyword, searchMenu, setFilter, setFilteredMenu } from '../../redux/features/menus/menusSlice';

export  function PageHeader3({title}){
    const dispatch = useDispatch();
    const menus = useSelector((state) => state.menusList)
    const [isSearch, showSearch] = useState(false)
    const [selectedCategory, changeCategory] = useState(0)
    const [keyword, changeKeyword] = useState('')

    function setCategory(e) {
        changeCategory(e)
        dispatch(setFilter(e))
        dispatch(setFilteredMenu(menus))
    }

    function inputSearch(e) {
        changeKeyword(e)
        dispatch(setKeyword(e))
        dispatch(searchMenu(menus))
    }

    return(
        <div className='card sticky-bar'>
            <div className='card-body pl-2 pt-2'>
            <h4 className='mt-0'><b>{title}</b></h4>
            {!isSearch?(<div><select className='filter-dropdown pl-2 mr-1' onChange={e => setCategory(e.target.value)} value={selectedCategory}>
                <option value="0">All</option>
                {menus.menuList?.map(
                    category => <>
                        <option value={category.categ_id}>{category.name}</option>
                    </>
                )}
            </select>
                <button className='search-button' onClick={() =>showSearch(true)}>Search</button>
                </div>):
            (<div className='search'>
                <button className='back-button' onClick={() =>showSearch(false)}>
                    <svg width="30" height="30" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.70833 18.5L7.00122 17.7929L6.29411 18.5L7.00122 19.2071L7.70833 18.5ZM26.2083 19.5C26.7606 19.5 27.2083 19.0523 27.2083 18.5C27.2083 17.9478 26.7606 17.5 26.2083 17.5V19.5ZM13.1679 11.6263L7.00122 17.7929L8.41544 19.2071L14.5821 13.0405L13.1679 11.6263ZM7.00122 19.2071L13.1679 25.3738L14.5821 23.9596L8.41544 17.7929L7.00122 19.2071ZM7.70833 19.5H26.2083V17.5H7.70833V19.5Z" fill="#222222"/>
                    </svg>
                </button>
                <input className='search-bar' placeholder='Search' onChange={e => inputSearch(e.target.value)} value={keyword}></input>
            </div>)}
            </div>
        </div>
    );
}