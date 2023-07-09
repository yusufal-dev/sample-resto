import '../App.css';
import '../styles/basicStyle.css';
import '../styles/layoutStyle.css';
import '../styles/utilStyle.css';

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

	const confirmUrl = '/order'; //link after confirmation
	const [isConfirm, setIsConfirm] = useState(false);


	function onClickIsConfirm(x){
		setIsConfirm(x)

	}
	
	return(
		< >
			
			<PageHeader title="Order" backTo="/menu" />
			
			<div className="container">
			
				<TableNumber number="B1" orderNumber={"XXX132478945XXX"}/>

				<div className="container-between mb-3">
					<div className="flex-left">
						<b>Order Details</b>
					</div>
					<div className="flex-right">
						<small><b><Link to="#" className="no-text-decoration">Add items</Link></b></small>
					</div>
				</div>
				
				<OrderList item={gCart.item} />
				
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
					<OrderConfirm confirmUrl={confirmUrl} onClickModal={(x)=>setIsConfirm(x)} />
				: <></>
			}


		</>
	
	);
}