import { useDispatch, useSelector } from 'react-redux';
import { setOrderNumber, setUserOrder, setRestaInfo, setTheme, setCondPricing, setCondPricingFinal } from '../redux/features/restaurant/restaurantInfo';

import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState} from 'react';
import axios from 'axios';
import { setCategories, setMenuForYou, setMenuTodayOffer, setMenus } from '../redux/features/menus/menusSlice';

function useInitialLoad(){
    const restaurant = useSelector((state) => state.restaurantInfo)
    const menus = useSelector((state) => state.menusStore)
    const orderResta = restaurant?.order;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const url = window.location;

    const [order,setOrder] = useState();
    // const [queryParams, setQueryParams] = useSearchParams();
  
    const [order_number, setOrderNumber] = useState()
    const rootStyle = document.querySelector(':root')
    const urlParam = new URLSearchParams(url.search).get('order')
    

    function getOrder(){

            const response = require("../static/sample-data/get-order.json");
       
                if(response.success){ //NOT FIXED. JIKA INI DIHILANGKAN ADA ERROR DI MS EDGE, CHROME DLL
                    dispatch(setUserOrder(response.order))
                dispatch(setRestaInfo(response.resta))
                dispatch(setTheme(response.theme))
                dispatch(setMenuForYou(response.menu_for_you))
                dispatch(setMenuTodayOffer(response.menu_today_offer))
                dispatch(setCondPricing(response.cond_pricings))
                dispatch(setCondPricingFinal(response.cond_pricings_final))

                rootStyle.style.setProperty('--color1',response.theme?.color1 )
                rootStyle.style.setProperty('--color2',response.theme?.color2 )
                }
                
               
        
    }

    useEffect(()=>{
        if(urlParam != ""){
            setOrder(urlParam)
        }
    }, [urlParam])

    useEffect(() => {
        if(order){
    
            setOrderNumber(order)
            localStorage.setItem('qresto-orderNumber', order_number)
        }
    },[order])

    useEffect(()=>{
        getOrder();
    }, [order_number])

    useEffect(() => {
        if(parseInt(orderResta?.is_paid) > 0){
            navigate("/paid-order");
        }
    }, [orderResta])

}

export default useInitialLoad;