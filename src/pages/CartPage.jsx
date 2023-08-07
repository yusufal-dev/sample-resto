import '../App.css';
import '../styles/basicStyle.css';
import '../styles/layoutStyle.css';
import '../styles/utilStyle.css';
import orderPlaced from '../static/orderPlaced.png';
import okConfirm from'../static/okConfirm.png';
import { useSelector } from 'react-redux';

import ButtonConfirm from '../baseComponents/ButtonConfirm';

import {PageHeader2 as PageHeader} from '../components/PageHeader/PageHeader2';
import OrderList from '../components/Order/OrderList';
import OrderSummary from '../components/OrderSummary/OrderSummary';
import TableNumber from '../components/TableNumber';

import { useState } from 'react';

import { Link } from 'react-router-dom';
import { OrderConfirm } from '../components/Order/OrderConfirm';


export default function CartPage(){

	const gCart = useSelector((state) => state.cart)
	const restaurantInfo = useSelector((state) => state.restaurantInfo)
	console.log(gCart)
	const orderNumber = restaurantInfo.order.order_id
	const tableNum = restaurantInfo.order.table_num

	const confirmUrl = '/menu'; //link after confirmation
	const [isConfirm, setIsConfirm] = useState(false);
	const [modalTitle, setModalTitle] = useState("Confirm Your Order!")
	const [modalDescription, setModalDescription] = useState("Please ensure your order is accurate before we start processing it at the outlet. Thanks!");
	const [modalButtonConfirm, setModalButtonConfirm] = useState("Yes, confirm")
	const [modalButtonCancel, setModalButtonCancel] = useState("Check Again")
	const [modalImage, setModalImage] = useState(orderPlaced)

	function changeButtonConfiguration(){
		setModalButtonCancel(null)
		setModalButtonConfirm("OK")
	}

	function changeMessage(titleText, descText){
		setModalTitle(titleText)
		setModalDescription(descText)
	}
	
	return(
		< >
			<PageHeader title="Order" backTo="/menu" />
			<div className="container">
				<TableNumber number={tableNum} orderNumber={orderNumber}/>
				<div className="container-between mb-3">
					<div className="flex-left">
						<b>Order Details</b>
					</div>
					<div className="flex-right">
						<small><b><Link to="#" className="no-text-decoration">Add items</Link></b></small>
					</div>
				</div>
				<OrderList item={gCart.items} />
				<div className="space-20" />
				<div className="space-10" />
				<div className="space-5" /> 
			</div >
			<div className="container-float btm-0  w-100">
				<div className='container '>
					<div className=" mb-1 ">
						<OrderSummary />
					</div>
					<ButtonConfirm title="Confirm Order" onClick={() => setIsConfirm(true)}/>
				</div>
			</div>
			{
				isConfirm ?
					<OrderConfirm 
						confirmUrl={confirmUrl} 
						modalTitle={modalTitle}
						modalDescription={modalDescription}
						modalButtonConfirm={modalButtonConfirm}
						modalButtonCancel={modalButtonCancel}
						modalImage={modalImage}
						onClickModal={(x)=>setIsConfirm(x)} 
						onClickButtonConfirm={changeButtonConfiguration}
						changeMessage={changeMessage}
						/>
				: <></>
			}


		</>
	
	);
}