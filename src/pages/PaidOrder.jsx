import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { rupiah } from '../Helpers';

import logo from '../logo.svg';
import '../App.css';
import '../styles/all.css';

import SuccessIcon from '../static/icons/success.png';
import { useSelector } from 'react-redux';

export default function PaidOrder(){

    const restaurantInfo = useSelector((state) => state.restaurantInfo)
    const order = restaurantInfo?.order;

    return (

        <div className='bg-white vh-100'>
            <div className='space-20'></div>
            
            <div className='center-div'>
                <img src={SuccessIcon} alt="" />
            </div>
            <div className='text-center'>
                <h3>Pembayaran Berhasil</h3>
                <p>
                    <small className='text-gray'>{new Date(order?.updated_at).toLocaleString()}</small><br/>
                    <small>{order?.order_id}</small>
                </p>
                <h2>{rupiah(parseInt(order?.total))}</h2>
                <p>
                    <small>via</small><br/>
                    QRIS
                </p>
            </div>


        </div>

    );
}