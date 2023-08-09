import { useDispatch, useSelector } from 'react-redux';
import { setOrderNumber, setUserOrder, setRestaInfo, setTheme } from '../redux/features/restaurant/restaurantInfo';

import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect} from 'react';
import axios from 'axios';
import { setCategories, setMenuForYou, setMenuTodayOffer, setMenus } from '../redux/features/menus/menusSlice';

function useInitialLoad(){
    const restaurant = useSelector((state) => state.restaurantInfo)
    const menus = useSelector((state) => state.menusStore)
    const order = restaurant.order;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(restaurant)
    console.log(menus)
    const [queryParams] = useSearchParams();
    const order_number = queryParams.get("order")
    localStorage.setItem('qresto-orderNumber', order_number)
    const rootStyle = document.querySelector(':root')
    

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

                rootStyle.style.setProperty('--color1',response.data?.theme?.color1 )
                rootStyle.style.setProperty('--color2',response.data?.theme?.color2 )
               
        })
    }

    useEffect(()=>{
        dispatch(setOrderNumber(order_number))
        getOrder();
    }, [order_number])

    useEffect(() => {
        if(order?.is_paid){
            navigate("/paid-order");
        }
    }, [order])

}

export default useInitialLoad;