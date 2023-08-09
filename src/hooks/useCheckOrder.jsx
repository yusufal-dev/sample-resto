import { useEffect } from "react";

import { useNavigate } from 'react-router-dom';
import {useSelector } from 'react-redux';

function useCheckOrder(){

    const restaurantInfo = useSelector((state)=>state.restaurantInfo)
	const orderNumber  =  restaurantInfo.order.order_id;
    const isPaid = restaurantInfo.order.is_paid;
	const navigate = useNavigate();


    useEffect(()=>{
        if(orderNumber == ""){
            console.log(orderNumber)
            navigate("/?order="+ localStorage.getItem('qresto-orderNumber'))
        }

        if(isPaid){
            navigate("/paid-order")
        }
    }, [])

}

export default useCheckOrder;