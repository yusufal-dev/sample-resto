import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

import logo from '../logo.svg';
import '../App.css';
import '../styles/all.css';

import SuccessIcon from '../static/icons/success.png';

export default function PaidOrder(){

    const [queryParams] = useSearchParams();
    const order_number = queryParams.get("order_id")
    const transaction_status = queryParams.get('transaction_status')

    const [order, setOrder] = useState([]);

    const navigate = useNavigate();

    function rupiah(number){
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
          }).format(number);
    }

    function getOrder(){
        axios.get(process.env.REACT_APP_API_URL + "/orders/get-order", {
            params: {
                order_number: order_number
            }
        }).then((response) =>{
                setOrder(response.data.order)
            })
    }

    function backToPayment(){
         navigate("/payment")
    }

    useEffect(() => {
        if(order_number ){
            getOrder();
        }
    }, [order_number])

    useEffect(()=>{
        if(transaction_status == "pending"){
            
            backToPayment();
        }
    }, [transaction_status])


    return (

        <div >
            <div className='space-20'></div>
            
            <div className='center-div'>
                <img src={SuccessIcon} alt="" />
            </div>
            <div className='text-center'>
                <h3>Pembayaran Berhasil</h3>
                <p>
                    <small className='text-gray'>{new Date(order.updated_at).toLocaleString()}</small><br/>
                    <small>XXXX{order_number}XXXX</small>
                </p>
                <h2>{rupiah(parseInt(order.total_price))}</h2>
                <p>
                    <small>via</small><br/>
                    QRIS
                </p>
            </div>


        </div>

    );
}