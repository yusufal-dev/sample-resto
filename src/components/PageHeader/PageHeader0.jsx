import '../../styles/all.css';
import * as React from 'react';
import PriceIcon from '../../static/icons/LablePrice.png';

export  function PageHeader0({title, imgCover}){

    return(
        <div className='card'>
            <img src={imgCover} className='w-100' />
            <div className='card-body pl-2 pt-2'>
                <div>
                    <h3 className='mt-0'><b>{title}</b></h3>
                    <p className='text-small1'><img className="icon-discount " src={PriceIcon}  /> <small>Enjoy discount on items</small></p>
                   
                </div>
            </div>
        </div>
    );
}