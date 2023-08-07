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
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { rupiah } from '../Helpers';
import PageBottom from '../components/PageBottom/PageBottom';


export default function OrderPage(){

	const restaurantInfo = useSelector((state) => state.restaurantInfo)
	const order_number = restaurantInfo.order.order_id;
	const tableNum = restaurantInfo.order.table_num
	const [orderList, setOrderList] = useState();
	const [orderTotalPrice, setOrderTotalPrice] = useState(0);
	console.log(orderList)

	function get_order_list(){
		axios.get(process.env.REACT_APP_API_URL + "/order-list", {
            params: {
                order_number: order_number
            }
        }).then((response) =>{
                console.log(response.data)
				setOrderList(response.data.order_sequences)
				setOrderTotalPrice(response.data.order_total_price)
				
                
            })
	}

	useEffect(()=>{
		get_order_list()
	}, [])

	const orderData = [
		{
			name: "Ayam Bakar Komplit",
			description: "ayam bakar + nasi + sambal + lalapan + tempe + es teh manis",
			note: "pedes sedang",
			totalPrice: 28990,
			total: 2
			
		},
		{
			name: "Ayam Bakar Komplit",
			description: "ayam bakar + nasi + sambal + lalapan + tempe + es teh manis",
			note: "pedes extra",
			totalPrice: 28990,
			total: 1
			
		},
		{
			name: "Paket Ayam Penyet Komplit",
			description: "ayam penyet + nasi + sambal + lalapan + tempe + es teh manis",
			note: "pedes banget",
			totalPrice: 28990,
			total: 3
			
		},
		{
			name: "Paket Ayam Penyet Komplit",
			description: "ayam penyet + nasi + sambal + lalapan + tempe + es teh manis",
			note: "tidak pedas",
			totalPrice: 28990,
			total: 1
			
		}
			
		];
	
	return(
		<>
		
			<PageHeader title="Order" backTo="/menu" />
			
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

				{/* <div className=" mb-3 mt-3">
					<div className="flex-left">
						<b>Order 1</b>
					</div>
				</div>
				
				<OrderList item={orderData} />
				
				<div className="mb-3 mt-3">
					<div className="flex-left">
						<b>Order 2</b>
					</div>
				</div>
				
				<OrderList item={orderData} />
				 */}
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
							<p><b>{rupiah(orderTotalPrice)} </b></p>
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