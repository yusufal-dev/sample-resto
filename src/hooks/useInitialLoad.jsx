import { useDispatch, useSelector } from 'react-redux';
import { setOrderNumber, setUserOrder, setRestaInfo, setTheme } from '../redux/features/restaurant/restaurantInfo';

import { useSearchParams } from 'react-router-dom';
import { useEffect} from 'react';
import axios from 'axios';
import { setCategories, setMenuForYou, setMenuTodayOffer, setMenus } from '../redux/features/menus/menusSlice';

function useInitialLoad(){
    const restaurant = useSelector((state) => state.restaurantInfo)
    const menus = useSelector((state) => state.menusStore)
    const dispatch = useDispatch();

    console.log(restaurant)
    console.log(menus)
    const [queryParams] = useSearchParams();
    const order_number = queryParams.get("order")
    localStorage.setItem('qresto-orderNumber', order_number)
    

    function getOrder(){
        axios.get(process.env.REACT_APP_API_URL + "/orders/get-order", {
            params: {
                order_number: order_number
            }
        }).then((response) =>{
                console.log(response.data)
                dispatch(setUserOrder(response.data.order))
                dispatch(setRestaInfo(response.data.resta))
                dispatch(setTheme(response.data.theme))
                dispatch(setMenuForYou(response.data.menu_for_you))
                dispatch(setMenuTodayOffer(response.data.menu_today_offer))
               
            })
    }

    useEffect(()=>{
        dispatch(setOrderNumber(order_number))
        getOrder();
    }, [order_number])

}

export default useInitialLoad;