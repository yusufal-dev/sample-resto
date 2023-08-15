import '../../styles/all.css';
import * as React from 'react';
//import PriceIcon from '../../static/icons/LablePrice.png';

export  function PageHeader3({title}){

    return(
        <div className='card sticky-bar'>
            <div className='card-body pl-2 pt-2'>
            <h4 className='mt-0'><b>{title}</b></h4>
            <select className='filter-dropdown pl-2 mr-1'>
                <option>A</option>
                <option>B</option>
            </select>
            <button className='search-button'>Search</button>
            </div>
        </div>
    );
}