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


export default function OrderPage(){


	const gCart = useSelector((state) => state.cart)

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
		
			<PageHeader title="Order" backTo="/cart" />
			
			<div className="container">
			
				<TableNumber number="B1" orderNumber={"XXX132478945XXX"}/>

				<div className=" mb-3 mt-3">
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
				
				<div className="space-20" />
				<div className="space-20" />
				<div className="space-5" />
			
				
				
			</div>
			
			<div className="container-float card-t-shadow btm-0 box-top-radius w-100 bg-white">

					<div className="container mt-2 mb-2">
						<small>Total payment</small>
						<div className="container-between mb-10">
							<div className="flex-left  w-40">
								<p><b>Rp205.618 </b></p>
							</div>
							<div  className="flex-right w-50">
								<Link to="/payment">
									<ButtonPay title="Pay" />
								</Link>
							</div>
						</div>
						
					</div>

					
					<div className="card-t-shadow w-100">
						<div className="container mt-1">
							<div className="container-between ">
								<div className="flex-left  w-40 text-center">
									<Link to="/menu">
										<img src={Book} />
										
									</Link>
									<div>Menu</div>
								</div>
								<div  className="flex-right w-50 text-center ">
									<Link to="/cart">
										<img src={Paper} />
										
									</Link>
									<div className="text-primary">Order List</div>
								</div>
							</div>
						</div>
						
						
					</div>
					
					
				
				</div>
			
		
		</>
	
	);
}