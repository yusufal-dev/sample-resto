import { useDispatch, useSelector } from 'react-redux';
import { setOrderNumber, setUserOrder, setRestaInfo, setTheme } from '../redux/features/restaurant/restaurantInfo';

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

    console.log(restaurant)
    console.log(menus)
    const url = window.location;
    console.log("WINDOW")
    console.log(url)

    const [order,setOrder] = useState();
    // const [queryParams, setQueryParams] = useSearchParams();
    console.log("Order NUMBER "+order)
    const [order_number, setOrderNumber] = useState()
    const rootStyle = document.querySelector(':root')
    

    function getOrder(){
        axios.get(process.env.REACT_APP_API_URL + "/orders/get-order?order_number="+ order_number)
            .then((response) =>{
                console.log(response.data)
                dispatch(setUserOrder(response.data.order))
                dispatch(setRestaInfo(response.data.resta))
                dispatch(setTheme(response.data.theme))
                dispatch(setMenuForYou(response.data.menu_for_you))
                dispatch(setMenuTodayOffer(response.data.menu_today_offer))

                rootStyle.style.setProperty('--color1',response.data?.theme?.color1 )
                rootStyle.style.setProperty('--color2',response.data?.theme?.color2 )
               
        })
    }

    useEffect(()=>{
       setOrder(new URLSearchParams(url.search).get('order'))
    }, [])

    useEffect(() => {
        if(order){
            // console.log(queryParams.get("order"))
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