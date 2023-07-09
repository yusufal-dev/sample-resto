
import PopUp from "../../baseComponents/PopUp";
import OrderConfirmButton from "../../baseComponents/OrderConfirmButton";
import orderPlaced from'../../static/orderPlaced.png';
import okConfirm from'../../static/okConfirm.png';

import { useState } from "react";
import { Yard } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/features/cart/cartSlice";

export function OrderConfirm({onClickModal, confirmUrl}){

    const dispatch = useDispatch();

    const defTitle="Confirm your order?";
    const defDesc="Please ensure your order is accurate before we start processing it at the outlet. Thanks!"
    const defConfirm = "Yes, Confirm"
    const defCancel = "Check Again"

    const [imgButton, setImgButton] = useState(orderPlaced)
    const [title, setTitle] = useState(defTitle)
    const [description, setDescription] = useState(defDesc)
    const [button1, setButton1] = useState(defConfirm);
    const [button2, setButton2] = useState(defCancel)

    function onClickConfirm({onClickAction}){
        dispatch(resetCart())
        setButton1("OK")
        setButton2(null)
        setImgButton(okConfirm)
        
    }

    function onClickCancel(){
        onClickModal(false)
    }

    return(
        <>
        
            <PopUp 
                component={
                    <OrderConfirmButton 
                        imgButton={imgButton}
                        title={title}
                        description={description}
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