
import PopUp from "../../baseComponents/PopUp";
import OrderConfirmButton from "../../baseComponents/OrderConfirmButton";


import { useEffect, useState } from "react";
import { Yard } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../../redux/features/cart/cartSlice";
import axios from "axios";

export function OrderConfirm({
    confirmUrl, status, modalTitle, modalDescription, modalButtonCancel, modalButtonConfirm, modalImage,
    onClickModal, onClickButtonConfirm, changeMessage
    }){
    
    const gCart = useSelector((state)=>state.cart)
    const restaurantInfo = useSelector((state) => state.restaurantInfo)
    const orderNumber = restaurantInfo.order.order_id
    const totalCart = gCart.items.reduce((prev, {total}) => {
		return prev + total
	}, 0)

	const totalPrice = gCart.items.reduce((prev, {total_price}) => {
		return prev + total_price
	}, 0)
    const dispatch = useDispatch();

    const title = modalTitle ? modalTitle : "Please Confirm";
    const description= modalDescription ? modalDescription : "Please confirm before we continue to  process it. Thanks!"
    const button1 = modalButtonConfirm ? modalButtonConfirm : "Yes"
    const button2 = modalButtonCancel ? modalButtonCancel : null

    const [loading, setLoading] = useState(false)
    const loadingTitle = "Sending your order"
    const loadingDescription = "Please wait a moment. We are confirming your order."

    function onClickConfirm(){
        //CHECK ORDER IN THE BACK END
    
        // sendOrderToRestaurant()
        dispatch(resetCart())
        onClickButtonConfirm()
        changeMessage("Success!", "Thank you for ordering!")
    }

    function onClickCancel(){
        onClickModal(false)
    }

    function sendOrderToRestaurant(){
        axios.post(process.env.REACT_APP_API_URL + "/orders/post-order", {
            order_number : orderNumber,
            total_item: totalCart,
            total_price: totalPrice,
            order_items : gCart.items
        })
        .then((response)=>{
          
        })
    }


    return(
        <>
            <PopUp 
                component={
                    <OrderConfirmButton 
                        imgButton={modalImage}
                        loading={loading}
                        title={loading ? loadingTitle : title}
                        description={loading ? loadingDescription :  description}
                        button1={button1}
                        button2={button2}
                        onClickButton1={onClickConfirm}
                        onClickButton2={onClickCancel}
                        confirmUrl={confirmUrl}
                    
                        />
                } 
            />
        </>
        
    );
}