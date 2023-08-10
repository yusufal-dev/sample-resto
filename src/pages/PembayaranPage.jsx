import {useState, useEffect} from "react";
import axios from "axios";
import { redirect, useNavigate } from 'react-router-dom';


import '../App.css';

import '../styles/all.css';



import {PageHeader2 as PageHeader} from '../components/PageHeader/PageHeader2';
// import { PaymentInformation } from "../components/Payment/PaymentInformation";
// import { PaymentMethod } from "../components/Payment/PaymentMethod";
// import { PaymentChannel, PaymentSelection } from "../components/Payment/PaymentChannel";
// import { PaymentPayButton } from "../components/Payment/PaymentPayButton";
import { setUserOrder } from '../redux/features/restaurant/restaurantInfo';
import { PaymentInformation, PaymentMethod, PaymentChannel, PaymentPayButton } from "../components/Payment";
import TableNumber from "../components/TableNumber";
import SnapPay from '../components/SnapPay';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import useCheckOrder from "../hooks/useCheckOrder";


export default function PembayaranPage(){

	useCheckOrder();

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const restaurantInfo = useSelector((state) => state.restaurantInfo)
	const orderNumber = restaurantInfo.order.order_id;
	const tableNum = restaurantInfo.order.table_num;
	const orderTotal = restaurantInfo.order.total
	console.log("sebelum payment")
	console.log(restaurantInfo)
	const [snapToken, setSnapToken] = useState();
	const [isFilling, setIsFilling] = useState(false);

	function generateSnapToken(){
		// axios.post(process.env.REACT_APP_API_URL+"/orders/generatesnaptoken2", {
		// 	// 'order_number' : order
		// }).then((response) => {
		//   setSnapToken(response.data.snap_token)
		// })


		axios.post(process.env.REACT_APP_API_URL+"/payment/complete-order",{
			'order_number' : orderNumber
		}).then((response) => {
			if(response.data.success){
				dispatch(setUserOrder(response.data.order))
				navigate('/paid-order')

			}
			else{
				alert("PAYMENT FAILED")
			}
		})

	}

	function payMidtrans(){

		// if(snapToken){
		// 	window.snap.pay(snapToken, {
		// 		onSuccess: function(result){
					
		// 			 redirect("/paid-order")
		// 		},
		// 		onPending: function(result){
		// 			redirect('/payment')
		// 		},
		// 		onError: function(result){

		// 		},
		// 		onClose: function(result){

		// 		}
		// 	})

		// }
		
	}




	useEffect(() => {
		
		if(snapToken){
			payMidtrans();
		}
		
	}, [])


	useEffect(() => {

		const snapUrl = process.env.REACT_APP_SNAP_URL;
        const clientKey = process.env.REACT_APP_SNAP_CLIENT_KEY;

        const script = document.createElement('script');
        script.src = snapUrl;
        script.setAttribute('data-client-key', clientKey);
        script.async = true;

        document.body.appendChild(script);

		if(snapToken){
			window.snap.embed(snapToken,{
				embedId: "snap-container"
			})
		}
		
		
	}, [snapToken]);

	
	return(
		<div className="bg-none">
			<PageHeader title="Payment" backTo="/menu" />
			<div className="container pb-3 ">
				<TableNumber  number={tableNum} orderNumber={orderNumber} />
				<PaymentMethod />
			</div>
			<div className="card-box mt-1 mb-3 pt-3 pb-3 bg-white">
				<PaymentInformation
					onFilling={(x) => setIsFilling(x)}
					
				/>
			</div>
			{/* <div className="card-box pt-1 pb-1 bg-white">
				<PaymentChannel />
			</div> */}
			<div id="snap-container"></div>

			<div className="space-10" />
			<div className="space-5" />
			<div className="container-float card-t-shadow box-top-radius btm-0 w-100 bg-white">

				<PaymentPayButton orderTotal={orderTotal} isFilling={isFilling} onClickPay={generateSnapToken} />
			</div>
		</div>
	);
	
}