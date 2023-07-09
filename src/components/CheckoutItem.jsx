
import '../App.css';
import '../styles/basicStyle.css';
import '../styles/layoutStyle.css';
import '../styles/utilStyle.css';
import BasketIcon from '../static/icons/Basket.png';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { rupiah } from '../Helpers';


export default function CheckoutItem({targetLink}){
	
	const gCart = useSelector((state) => state.cart)
	// let totalCart = 0;

	// if(gCart.item.length > 0){
	// 	totalCart = gCart.item.reduce((prev, curr) => {
	// 		return prev + curr.total
	// 	})
	// }


	const totalCart = gCart.item.reduce((prev, {total}) => {
		return prev + total
	}, 0)

	const totalPrice = gCart.item.reduce((prev, {totalPrice}) => {
		return prev + totalPrice
	}, 0)
	

	
	return(
	
		<div >
			<Link to={targetLink} className="no-text-decoration" >
				<div className=" button-confirm ">
					<div className="basket-div">
						<div className='flex-container'>
							<img className="icon-pembayaran" src={BasketIcon} />
							<div className='text-black2 '>{totalCart}</div>
						</div>
						
					</div>
					<div className="total-pembayaran-div">
						<p>Total</p>
						<b>{rupiah(totalPrice)}</b>
					</div>
					<div className="checkout-div">
						<b>CHECKOUT</b>
					</div>
				
				</div>
			</Link>
		</div>
	
	);
	
}