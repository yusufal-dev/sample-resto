import { useEffect } from "react";

import { useNavigate } from 'react-router-dom';
import {useSelector } from 'react-redux';

function useWhenReload(){

    const restaurantInfo = useSelector((state)=>state.restaurantInfo)
	const orderNumber  =  restaurantInfo.order.order_id;
	const navigate = useNavigate();


    useEffect(()=>{
        if(orderNumber == ""){
            console.log(orderNumber)
            navigate("/?order="+ localStorage.getItem('qresto-orderNumber'))
        }
    }, [])

}

export default useWhenReload;