import '../App.css';
import '../styles/basicStyle.css';
import '../styles/layoutStyle.css';
import '../styles/utilStyle.css';

import Book from '../static/icons/Book.png';
import Paper from '../static/icons/Paper.png';

import ButtonPay from '../baseComponents/ButtonPay';

import {PageHeader2 as PageHeader} from '../components/PageHeader/PageHeader2';
import OrderList from '../components/Order/OrderList';
import TableNumber from '../components/TableNumber';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { rupiah } from '../Helpers';
import PageBottom from '../components/PageBottom/PageBottom';
import useCheckOrder from '../hooks/useCheckOrder';
import { setUserOrder } from '../redux/features/restaurant/restaurantInfo';


export default function OrderPage(){

	useCheckOrder();

	const dispatch = useDispatch();
	const restaurantInfo = useSelector((state) => state.restaurantInfo)
	const order_number = restaurantInfo.order.order_id;
	const tableNum = restaurantInfo.order.table_num
	const orderTotal = restaurantInfo.order.total
	const [reload, setReload] = useState(0)
	const [orderList, setOrderList] = useState();
	// const [orderTotalPrice, setOrderTotalPrice] = useState(0);
	console.log(orderList)

	function onReload(){
		setReload(reload + 1)
	}

	function get_order_list(){
		axios.get(process.env.REACT_APP_API_URL + "/order-list?order_number="+order_number)
			.then((response) =>{
                console.log(response.data)
				setOrderList(response.data.order_sequences)
				dispatch(setUserOrder(response.data.order))
				
                
            })
	}

	useEffect(()=>{
		get_order_list()
		return function cleanup(){
			setOrderList(null)
		}
	}, [reload])

	
	return(
		<>
			<PageHeader title="Order" backTo="/menu" onReload={onReload} />
			<div className="container">
				<TableNumber number={tableNum} orderNumber={order_number}/>
				{
					orderList?.map((item,index) => 
						<>
							<div className=" mb-3 mt-3">
								<div className="flex-left">
									<b>Order {index+1}</b>
								</div>
							</div>
							
							<OrderList item={item.order_items} />
						</>
						)
				}

				<div className="space-20" />
				<div className="space-20" />
				<div className="space-5" />
			
				
				
			</div>

			<PageBottom 
				extraClass={" card-t-shadow box-top-radius "}
				 extraComponent={
					<>
					<small>Total payment</small>
					<div className="container-between mb-10">
						<div className="flex-left  w-40">
							<p><b>{rupiah(orderTotal)} </b></p>
						</div>
						<div  className="flex-right w-50">
							<Link to="/payment">
								<ButtonPay title="Pay" />
							</Link>
						</div>
					</div>
					</>
				 }
				/>

		
		</>
	
	);
}